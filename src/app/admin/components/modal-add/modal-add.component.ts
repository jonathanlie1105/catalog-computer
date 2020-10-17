import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { AppService } from "src/app/app.service";
import { EmitParams, Jenis } from "src/types";

const required: Validators = {
  validators: [Validators.required],
};

@Component({
  selector: "app-modal-add",
  templateUrl: "./modal-add.component.html",
  styleUrls: ["./modal-add.component.scss"],
})
export class ModalAddComponent implements OnInit {
  form: FormGroup;
  jenis: Jenis;

  constructor(
    private app: AppService,
    private modalController: ModalController,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      foto: new FormControl(null, required),
      jenis: new FormControl(null, required),
      nama: new FormControl(null, required),
      merek: new FormControl(null, required),
      harga: new FormControl(null, required),
      stok: new FormControl(null, required),
      base_clock: new FormControl(null),
      boost_clock: new FormControl(null),
      core: new FormControl(null),
      thread: new FormControl(null),
      chipset: new FormControl(null),
      to_prosesor: new FormControl(null),
      speed: new FormControl(null),
      ukuran: new FormControl(null),
    });
  }

  setControlForm() {
    const detailFormName = {
      cpu: ["base_clock", "boost_clock", "core", "thread"],
      mobo: ["chipset", "to_prosesor"],
      ram: ["speed", "ukuran"],
    };

    for (let jenis of ["cpu", "mobo", "ram"]) {
      for (let formName of detailFormName[jenis]) {
        this.form.setControl(formName, new FormControl(null));
      }
    }

    if (this.jenis !== "gpu") {
      for (let formName of detailFormName[this.jenis]) {
        this.form.setControl(formName, new FormControl(null, required));
      }
    }
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

  changeJenis({ target }) {
    const { value } = target;
    this.jenis = value;
    this.setControlForm();
  }

  onSubmit() {
    if (!this.form.valid) {
      this.presentToast("error");
      return;
    }
    this.showAlert();
  }

  async presentToast(type: "error" | "success") {
    const toast = await this.toastController.create({
      header: type === "error" ? "ERROR!" : "SUCCESS",
      message:
        type === "error" ? "Some required input is empty" : "Add item success",
      color: type === "error" ? "warning" : "success",
      duration: 3000,
    });

    return await toast.present();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: "Are you sure?",
      message: "Add this item cannot be undo...",
      buttons: [
        {
          text: "Yes",
          role: "submit",
          cssClass: "danger",
          handler: () => {
            this.app.addItems(this.form);
            this.presentToast("success");
            this.modalController.dismiss();
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
