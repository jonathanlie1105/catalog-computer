import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DetailPageRoutingModule } from "./detail-routing.module";

import { DetailPage } from "./detail.page";
import {
  SharedheaderModule,
  HeaderComponent,
  LoadingSkeletonDetailComponent,
} from "../components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    SharedheaderModule,
  ],
  declarations: [DetailPage, LoadingSkeletonDetailComponent],
  bootstrap: [HeaderComponent],
})
export class DetailPageModule {}
