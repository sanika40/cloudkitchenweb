import { Component, DoCheck } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements DoCheck{
  userStatus:any =true

  constructor(private serv: OrderDetailsService){}
  notify:any=0
  ngDoCheck() {
   let  nt = 0
    this.serv.addTocartData.forEach((i:any)=>{
      nt += i.qty
    })

    this.notify = nt


      let st:any = localStorage.getItem("userProfile")
      if(st.length == 0){
        this.userStatus = true
      }
      else{
        this.userStatus =false
      }
}

logout(){
  localStorage.setItem("userProfile","")
}
}
