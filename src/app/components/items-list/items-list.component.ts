import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import {
  AlertController,
  IonItemSliding,
  ToastController,
} from "@ionic/angular";
import { AppService } from "src/app/app.service";
import { Item } from "src/types";

@Component({
  selector: "app-items-list",
  templateUrl: "./items-list.component.html",
  styleUrls: ["./items-list.component.scss"],
})
export class ItemsListComponent implements OnInit {
  @Input() items: Array<Item>;
  @Input() admin: boolean = false;
  @Output() handler: EventEmitter<() => void> = new EventEmitter();

  constructor(
    private app: AppService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    if (this.admin && this.handler === undefined) {
      throw new Error("If you are an admin, please provide a handler");
    }
  }

  deleteItem(itemId: string, slider: IonItemSliding) {
    if (!this.isSelected(itemId)) {
      this.showAlert(itemId, slider);
    } else {
      this.showToastError();
      slider.close();
    }
  }

  selectItem(itemId: string, slider: IonItemSliding) {
    this.app.selectItem(itemId);
    slider.close();
  }

  isSelected(itemId: string) {
    return this.app.getSelectedItem().includes(itemId);
  }

  async showAlert(itemId: string, slider: IonItemSliding) {
    const alert = await this.alertController.create({
      header: "Are you sure?",
      message: "Deleting this item cannot be undo...",
      buttons: [
        {
          text: "Yes",
          role: "submit",
          cssClass: "danger",
          handler: () => {
            this.app.deleteItem(itemId);
            this.showToast();
            slider.close();
          },
        },
        {
          text: "No",
          role: "cancel",
          handler: () => {
            slider.close();
          },
        },
      ],
    });
    return await alert.present();
  }

  async showToastError() {
    const toast = await this.toastController.create({
      header: "Error",
      message: `This item already selected!`,
      color: "warning",
      duration: 2000,
    });

    return await toast.present();
  }

  async showToast() {
    const toast = await this.toastController.create({
      header: "Success",
      message: `Success delete item`,
      color: "success",
      duration: 2000,
    });

    return await toast.present();
  }
}
