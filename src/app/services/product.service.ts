import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = "http://localhost:3000/products"
  

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]>{ //dönüş tipi
    return this.httpClient.get<Product[]>(this.apiUrl)

  }

  getProductsByCategory(categoryId:number):Observable<Product[]>{ //dönüş tipi
    return this.httpClient.get<Product[]>(this.apiUrl + "?categoryId="+categoryId);

  }

  getProductById(id:number):Observable<Product>{ //dönüş tipi
    return this.httpClient.get<Product>(this.apiUrl + "/"+id);

  }



}
