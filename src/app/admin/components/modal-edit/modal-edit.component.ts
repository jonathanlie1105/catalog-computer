import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { AppService } from "src/app/app.service";
import { EmitParams, Item, Jenis } from "src/types";

const required: Validators = {
  validators: [Validators.required],
};

@Component({
  selector: "app-modal-edit",
  templateUrl: "./modal-edit.component.html",
  styleUrls: ["./modal-edit.component.scss"],
})
export class ModalEditComponent implements OnInit {
  @Input() item: Item;

  form: FormGroup;
  jenis: Jenis;

  constructor(
    private app: AppService,
    private modalController: ModalController,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.jenis = this.item.jenis;
    const { foto, nama, merek, harga, stok } = this.item;
    const { base_clock, boost_clock, core, thread } =
      "base_clock" in this.item && this.item;
    const { chipset, to_prosesor } = "chipset" in this.item && this.item;
    const { speed, ukuran } = "speed" in this.item && this.item;

    this.form = new FormGroup({
      foto: new FormControl(foto, required),
      nama: new FormControl(nama, required),
      merek: new FormControl(merek, required),
      harga: new FormControl(harga, required),
      stok: new FormControl(stok, required),
      base_clock: new FormControl(base_clock, base_clock && required),
      boost_clock: new FormControl(boost_clock, boost_clock && required),
      core: new FormControl(core, core && required),
      thread: new FormControl(thread, thread && required),
      chipset: new FormControl(chipset, chipset && required),
      to_prosesor: new FormControl(to_prosesor, to_prosesor && required),
      speed: new FormControl(speed, speed && required),
      ukuran: new FormControl(ukuran, ukuran && required),
    });
  }

  eventHandler({ type }: EmitParams) {
    switch (type) {
      case "close-outline":
        this.modalController.dismiss();
        break;
      case "checkmark-outline":
        this.onSubmit();
        break;
    }
  }

  onSubmit() {
    if (!this.form.valid) {
      this.presentToast("error");
    }
    this.showAlert();
  }

  async presentToast(type: "error" | "success") {
    const toast = await this.toastController.create({
      header: type === "error" ? "ERROR!" : "SUCCESS",
      message:
        type === "error" ? "Some required input is empty" : "Edit item success",
      color: type === "error" ? "warning" : "success",
      duration: 3000,
    });

    return await toast.present();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: "Are your sure?",
      message: "Editing this item cannot be undo..",
      buttons: [
        {
          text: "Yes",
          role: "submit",
          cssClass: "danger",
          handler: () => {
            this.app.editItems(this.item.id, this.form);
            this.modalController.dismiss();
            this.presentToast("success");
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
