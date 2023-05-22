import { CommonModule } from "@angular/common";
import{ProgressBarComponent} from "./progress-bar.component";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ProgressBarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [ProgressBarComponent]
  })
  export class ProgressBartModule { }
  
