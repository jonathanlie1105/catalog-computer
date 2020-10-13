import { Component, OnInit } from "@angular/core";

import { Item, Display, EmitParams } from "src/types";
import { AppService } from "../app.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  display: Display = "list";
  items: Array<Item>;
  loading: boolean = true;

  constructor(private app: AppService) {}

  ngOnInit() {
    setTimeout(() => {
      this.items = this.app.getItemsByJenis("cpu");
      this.loading = false;
    }, 3000);
  }

  eventHandler({ type }: EmitParams) {
    switch (type) {
      case "grid-outline":
        this.display = "grid";
        break;
      case "list-outline":
        this.display = "list";
        break;
      default:
        console.log("No such action exist");
    }
  }
}
