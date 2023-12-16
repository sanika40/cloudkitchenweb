import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-addto-cart',
  templateUrl: './addto-cart.component.html',
  styleUrls: ['./addto-cart.component.css']
})
export class AddtoCartComponent {

  constructor(private serv: OrderDetailsService){}

  cartProduct:any
  totalAm:any = 0
  ngOnInit(){
    this.cartProduct = this.serv.addTocartData

    this.cartProduct.forEach((data:any)=>{
      console.log(data)
      this.totalAm += Number(data.foodPrice) * Number(data.qty)
    })

  }
} 
