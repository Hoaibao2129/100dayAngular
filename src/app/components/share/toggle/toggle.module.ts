import { CommonModule } from "@angular/common";
import { ToggleComponent } from './toggle.component';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AuthorDetailModule } from "../author-detail/author-detail.module";

@NgModule({
    declarations: [
        ToggleComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthorDetailModule
    ],
    exports: [ToggleComponent]
  })
  export class ToggleModule { }
  
