import { Component } from '@angular/core';
import { ISlimScrollOptions } from 'ng2-slimscroll';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./css/myWiproStyle.css','./css/handheld.css']
})
export class AppComponent {
  title = 'app';
  isAdmin: string = 'admin';

  constructor(
    private commonservice: CommonService,
  ){}
  
   opts: ISlimScrollOptions;
    ngOnInit() {
      this.commonservice.AdminOrUser.subscribe(value=>{
        this.isAdmin = value;
        console.log(this.isAdmin);
      });
    this.opts = {
      position: 'right',
      barBackground: '#000000',
    }
  }
  
}
