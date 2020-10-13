import { Component, Input, OnInit } from "@angular/core";
import { Item } from "src/types";

@Component({
  selector: "app-items-grid",
  templateUrl: "./items-grid.component.html",
  styleUrls: ["./items-grid.component.scss"],
})
export class ItemsGridComponent implements OnInit {
  @Input() items: Array<Item>;

  constructor() {}

  ngOnInit() {}
}
