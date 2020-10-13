import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AboutPageRoutingModule } from "./about-routing.module";

import { AboutPage } from "./about.page";
import { HeaderComponent, SharedheaderModule } from "../components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    SharedheaderModule,
  ],
  declarations: [AboutPage],
  bootstrap: [HeaderComponent],
})
export class AboutPageModule {}
