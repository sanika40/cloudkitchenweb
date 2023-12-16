import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  addTocartData:any = []

  constructor(private http:HttpClient) { }

  apiUrl = "http://localhost:3000"

  //GET API
  getProduct(){
    return this.http.get(`${this.apiUrl}/foodDetails`)
  }

  //GET API -- search Product
  SearchProduct(id:any){
    return this.http.get(`${this.apiUrl}/foodDetails/${id}`)
  }

  //Authenication

  authProfile(profile:any){
    return this.http.get(`${this.apiUrl}/${profile}`)
  }



  //DELETE API
  deleteProduct(id:any){
    return this.http.delete(`${this.apiUrl}/foodDetails/${id}`)
  }





  //POST API
  postProduct(formData:any){
    return this.http.post(`${this.apiUrl}/foodDetails`,formData)
  }

  //PUT API

  putProduct(id:any,formData:any){
    return this.http.post(`${this.apiUrl}/foodDetails/${id}`,formData)
  }

  
 

  

}

