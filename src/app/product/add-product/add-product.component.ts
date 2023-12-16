import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private fb: FormBuilder, private serv: OrderDetailsService ){}

  addProductForm =this.fb.group({
    id:[""],
    foodName:[""],
    foodImg:[""],
    foodDetails:[""],
    foodPrice:[""],
  })

  submitFun(){
    this.addProductForm.patchValue({
      foodImg:this.imgPath
    })
    console.log(this.addProductForm.value)
    

    this.serv.postProduct(this.addProductForm.value).subscribe(()=>{
      alert("Product Added")
    })
  }
   
  imgPath:any ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAJ1BMVEX09PT19fXMzMzJycnm5ubp6enQ0NDt7e3Y2Njj4+Pw8PDV1dXb29vGfcNWAAABUElEQVRoge2Y0a6DIBBEYRFU9P+/t6Co1LbgTRjNTea8NU047u4gqlKEEEIIIYQQQgghhBDyj9AXwIhVV8cqgFx35hJde7cXkQtmEd/aHIqW2Vb7PUv7svVojK2nzAI6HkdtdUy5KuQYqdZqdm7yv1bHqNeGezExbv2P5YFV6yGaRdz7f7eoJZHtIO2PHtyhzmzKHb+QaienhkfzcSVItV1mbca9zPViTMo8MOFh7Xg3PZt3N/iWElK1m5Xbhr/uN6haZXspM6d5o9Wb/d0ssswDrNZTHPbZHN3whg8xaHvCMtBqPYUNFgSfZpR6TOrFLGI+xeiqk/k7UPV2dN2vLpuxVRfNWHXRjE34g1W7ItiEl9/1UA0PZ9NTrwAyjDW6QbLzrRX+4tueqy/1V9ZHo7q7fdHx0ai3fQXbo74rPPVBgxBCCCGEEEIIIYQQQkC8AEPaDw80AgDqAAAAAElFTkSuQmCC"
  changeImage(event:any){
    let file =event.target.files[0]
    console.log(file)

    let imgFile =new FileReader()
    imgFile.readAsDataURL(file)

    imgFile.onload =()=>{
      console.log(imgFile.result)
      this.imgPath =imgFile.result
    }
  }

}
