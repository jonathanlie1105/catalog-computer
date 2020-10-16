import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item, Jenis } from "src/types";
import { AppService } from "../app.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  item: Item;
  loading: boolean = true;

  constructor(
    private app: AppService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      if (param.has("itemId")) {
        const id = param.get("itemId");
        this.item = this.app.getItemsById(id);
      }
    });
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
