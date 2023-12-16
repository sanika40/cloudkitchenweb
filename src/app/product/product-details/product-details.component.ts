import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  constructor(private serv :OrderDetailsService){}

  CardData:any
  ngOnInit(){
    this.getDetails()
    this.CardData = this.serv.addTocartData
  }

  productData:any
  getDetails(){
    this.serv.getProduct().subscribe((data)=>{
      this.productData =data
      console.log(data)
    })
  }

  addToCard(prod:any){
    prod.qty=1
    let dataStatus = true
    if(this.CardData.length == 0){
      alert(prod.foodName+" added to cart")
      this.CardData.push(prod)
    }else{
      for(let i of this.CardData){
        if(i.foodName.includes(prod.foodName)){
          dataStatus = false
          alert(prod.foodName+" added to cart")
            i.qty = i.qty +1
            break
          }
          else{
            dataStatus = true
          }
      }
      if(dataStatus){
      alert(prod.foodName+" added to cart")
        this.CardData.push(prod) 
      }
    }
    console.log(prod, this.CardData)
  
  }


}
