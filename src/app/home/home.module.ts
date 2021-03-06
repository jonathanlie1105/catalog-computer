import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";
import {
  SharedheaderModule,
  HeaderComponent,
  ItemsGridComponent,
  ItemsListComponent,
  LoadingSkeletonComponent,
} from "../components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedheaderModule,
  ],
  declarations: [
    HomePage,
    ItemsGridComponent,
    ItemsListComponent,
    LoadingSkeletonComponent,
  ],
  bootstrap: [HeaderComponent],
})
export class HomePageModule {}
