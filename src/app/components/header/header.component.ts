import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

import { Icon } from "src/types";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() sideMenu: boolean = true;
  @Input() backButton: boolean;
  @Input() defaultHistory: string;
  @Input() icons: Array<Icon>;
  @Output() handler: EventEmitter<Icon> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (this.backButton) {
      this.sideMenu = false;
    }
    if (this.backButton && this.defaultHistory === undefined) {
      throw new Error(
        "you need to define defaultHistory if backButton is true i.e [defaultHistory]=\"['myRoutes']\""
      );
    }
  }
}
