import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { EditParams, EmitParams, Item } from "src/types";
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
  loading: boolean = true;

  constructor(
    private app: AppService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.items = this.app.getItemsByJenis("cpu", true);
      this.loading = false;
    }, 3000);
  }

  eventHandler({ type }: EmitParams) {
    switch (type) {
      case "add-outline":
        this.showAddModal();
        return;
      default:
        return;
    }
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
}
