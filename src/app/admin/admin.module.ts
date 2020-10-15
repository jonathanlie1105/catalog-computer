import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AdminPageRoutingModule } from "./admin-routing.module";

import { AdminPage } from "./admin.page";
import {
  HeaderComponent,
  ItemsGridComponent,
  ItemsListComponent,
  LoadingSkeletonComponent,
  SharedheaderModule,
} from "../components";
import { ModalEditComponent } from "./components/modal-edit/modal-edit.component";
import { ModalAddComponent } from "./components/modal-add/modal-add.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AdminPageRoutingModule,
    SharedheaderModule,
  ],
  declarations: [
    AdminPage,
    ItemsGridComponent,
    ItemsListComponent,
    LoadingSkeletonComponent,
    ModalAddComponent,
    ModalEditComponent,
  ],
  bootstrap: [HeaderComponent],
})
export class AdminPageModule {}
