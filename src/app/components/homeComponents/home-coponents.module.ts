import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { ProgressBartModule } from '../share/progress-bar/progress-bar.module';
import { AuthorDetailModule } from '../share/author-detail/author-detail.module';
import { AuthorListModule } from '../share/author-list/author-list.module';
import { ToggleModule } from '../share/toggle/toggle.module';




@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProgressBartModule,
    AuthorDetailModule,
    AuthorListModule,
    ToggleModule
  ]
})
export class HomeCoponentsModule { }
