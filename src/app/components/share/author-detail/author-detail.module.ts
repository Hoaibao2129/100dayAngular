import { CommonModule } from "@angular/common";
import { AuthorDetailComponent } from "./author-detail.component";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AuthorDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [AuthorDetailComponent]
  })
  export class AuthorDetailModule { }
  
