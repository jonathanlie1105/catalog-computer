import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
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

  constructor() {}

  ngOnInit() {
    if (this.admin && this.handler === undefined) {
      throw new Error("If you are an admin, please provide a handler");
    }
  }
}
