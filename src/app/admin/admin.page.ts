import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";
import { Display, EditParams, EmitParams, Item } from "src/types";
import { AppService } from "../app.service";
import { ModalAddComponent } from "./components/modal-add/modal-add.component";
import { ModalEditComponent } from "./components/modal-edit/modal-edit.component";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"],
})
export class AdminPage implements OnInit {
  items: Array<Item>;
  display: Display = "list";
  loading: boolean = true;

  constructor(
    private app: AppService,
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.items = this.app.getAllItems(true);
      this.loading = false;
    }, 1000);
  }

  ionViewWillEnter() {
    this.items = this.app.getAllItems(true);
  }

  eventHandler({ type }: EmitParams) {
    switch (type) {
      case "add-outline":
        this.showAddModal();
        return;
      case "grid-outline":
        this.display = "grid";
        break;
      case "list-outline":
        this.display = "list";
        break;
      case "trash-outline":
        this.showAlert();
        break;
      case "close-outline":
        this.app.clearSelectedItem();
        break;
      default:
        console.log("No such action exist");
    }
  }

  getSelectedLength() {
    return this.app.getSelectedItem().length;
  }

  isThereSelectedItems() {
    return this.getSelectedLength() > 0;
  }

  editHandler({ itemId }: EditParams) {
    this.showEditModal(itemId);
  }

  async showEditModal(itemId: string) {
    const modal = await this.modalController.create({
      component: ModalEditComponent,
      componentProps: { item: this.app.getItemsById(itemId) },
    });

    return modal.present();
  }

  async showAddModal() {
    const modal = await this.modalController.create({
      component: ModalAddComponent,
    });

    return modal.present();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: "Are your sure?",
      message: `Deleting ${this.getSelectedLength()} items cannot be undo..`,
      buttons: [
        {
          text: "Yes",
          role: "submit",
          cssClass: "danger",
          handler: () => {
            this.app.deleteSelectedItem();
          },
        },
        {
          text: "No",
          role: "cancel",
        },
      ],
    });
    return await alert.present();
  }
}
