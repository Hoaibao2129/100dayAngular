import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { ProgressBartModule } from '../share/progress-bar/progress-bar.module';




@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProgressBartModule,
  ]
})
export class HomeCoponentsModule { }
