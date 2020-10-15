import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
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

  constructor(private modalController: ModalController) {}

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
    console.log(this.form.valid);
  }
}
