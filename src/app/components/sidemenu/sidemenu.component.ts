import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.scss"],
})
export class SidemenuComponent implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  resetNav() {
    this.navController.navigateRoot("about");
  }
}
