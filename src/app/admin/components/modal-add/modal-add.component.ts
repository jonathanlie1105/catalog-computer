import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { EmitParams } from "src/types";

@Component({
  selector: "app-modal-add",
  templateUrl: "./modal-add.component.html",
  styleUrls: ["./modal-add.component.scss"],
})
export class ModalAddComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  eventHandler({ type }: EmitParams) {
    switch (type) {
      case "close-outline":
        this.modalController.dismiss();
    }
  }
}
