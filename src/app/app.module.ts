import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeCoponentsModule } from './components/homeComponents/home-coponents.module';
import { IndexComponent } from './components/homeComponents/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeCoponentsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
