import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Item } from "src/types";

@Component({
  selector: "app-items-grid",
  templateUrl: "./items-grid.component.html",
  styleUrls: ["./items-grid.component.scss"],
})
export class ItemsGridComponent implements OnInit {
  @Input() items: Array<Item>;
  @Input() admin: boolean = false;
  @Output() handler: EventEmitter<() => void> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (this.admin && this.handler === undefined) {
      throw new Error("If you are an admin, please provide a handler");
    }
  }
}
