import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private serv:OrderDetailsService, private router:Router){}

  submitForm(formData:any, profile:any){
    console.log(formData,profile)
    this.serv.authProfile(profile).subscribe((data:any)=>{
      data.map((result:any)=>{
        if(result.Username.includes(formData.Username)){
          if(result.Username == formData.Username){
            if(result.Password == formData.Password){
              localStorage.setItem("userProfile",profile)
              alert("Login Success!")
              this.router.navigate([""])
            }
            else{
              alert("Password is invalid")
            }

          }

          else{
            alert(formData.Username+"Username is invalid")
          }
        }
      })
    })
  }

}
