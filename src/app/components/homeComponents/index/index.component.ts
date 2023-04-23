import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
   isWarning : boolean = false;
   isDangger : boolean = false;
  name : string = 'ANGULAR';

  user = [
    {
      name : 'Hoài Bảo',
      age : 18 ,
      address : 'Quảng Nam'
    },
    {
      name : 'Nguyễn A',
      age : 19 ,
      address : 'Điện Bàn'
    }
  ]
  
 
    
}