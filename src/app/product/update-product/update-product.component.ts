import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  // constructor(private serv: OrderDetailsService,private actvRoute:ActivatedRoute){}

  constructor(private fb: FormBuilder, private apiservice: OrderDetailsService, private actRoute: ActivatedRoute){ }

  prodId:any
  ngOnInit(){
    // take id values from url 
    this.actRoute.params.subscribe((actid: any)=>{
      console.log(actid);
      this.prodId = actid["id"]
    })

    this.apiservice.SearchProduct(this.prodId).subscribe((data:any)=>{
      console.log(data);

      this.addProductForm.patchValue({
      id:data.id,
      foodName:data.foodName,
      foodDetails:data.foodDetails,
      foodPrice:data.foodPrice,
      })
      this.imgPath=data.foodImg
    })
  }
  addProductForm =this.fb.group({
    id:[""],
    foodName:[""],
    foodImg:[""],
    foodDetails:[""],
    foodPrice:[""],
  })


  imgPath: any 
  changeImg(e: any){
    let file = e.target.files[0]
    console.log(e.target.files[0]);
    let fileReader = new FileReader()
    fileReader.onload = () => {
      console.log(fileReader.result);
      this.imgPath = fileReader.result
    console.log(this.imgPath, "imagepath");
    }
    fileReader.readAsDataURL(file)
  }

  updateForm() {
    this.addProductForm.patchValue({
      foodImg: this.imgPath
    })
    console.log(this.addProductForm.value);
    this.apiservice.putProduct(this.addProductForm.value, this.prodId).subscribe(() => {
      alert(this.addProductForm.value.foodName + "product is updated")
    })
  }
}





  // prodId:any
  // prodDetails:any
  // ngOnInit(){
  //   this.actvRoute.params.subscribe((pid)=>{
  //     this.prodId = pid["id"]
  //     console.log("Product Id is", this.prodId)

  //   })

  //   this.serv.SearchProduct(this.prodId).subscribe((data)=>{
  //     this.prodDetails=data
  //     console.log(this.prodDetails)
  //   })
  // }



