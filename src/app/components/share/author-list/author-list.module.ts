import { CommonModule } from "@angular/common";
import { AuthorListComponent } from "./author-list.component";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AuthorDetailModule } from "../author-detail/author-detail.module";

@NgModule({
    declarations: [
        AuthorListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthorDetailModule
    ],
    exports: [AuthorListComponent]
  })
  export class AuthorListModule { }
  
