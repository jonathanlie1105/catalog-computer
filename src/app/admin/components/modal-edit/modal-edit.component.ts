import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { EmitParams, Item } from "src/types";

@Component({
  selector: "app-modal-edit",
  templateUrl: "./modal-edit.component.html",
  styleUrls: ["./modal-edit.component.scss"],
})
export class ModalEditComponent implements OnInit {
  @Input() item: Item;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  eventHandler({ type }: EmitParams) {
    switch (type) {
      case "close-outline":
        this.modalController.dismiss();
    }
  }
}
