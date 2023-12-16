import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent {
  constructor(private serv :OrderDetailsService, private router:Router){}

  ngOnInit(){
    this.getDetails()
  }

  productData:any
  getDetails(){
    this.serv.getProduct().subscribe((data)=>{
      this.productData =data
      console.log(data)

    })
  }
    edit(id:any){
      console.log(id)
      this.router.navigate(["update-product",id])
    }

    delete(id:any){
      console.log(id)
      this.serv.deleteProduct(id).subscribe(()=>{
        this.getDetails()
        alert(id+" product is been deleted")
      })
    }

    addProduct(){
      this.router.navigate(["/add-product"])
    }

  }
