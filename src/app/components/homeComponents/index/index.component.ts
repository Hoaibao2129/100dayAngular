
import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { ToggleComponent } from '../../share/toggle/toggle.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @ViewChild("toggle") changeToggle : ToggleComponent;

  isWarning: boolean = false;
  isDangger: boolean = false;
  name: string = 'ANGULAR ' + VERSION.major;
  title: string = 'ANGULAR ' + VERSION.major;
  checked: boolean = false;
  
  ngOnInit() {}

   onChangeToggle(){
      this.changeToggle.toggle();
   }
  
 
    
}