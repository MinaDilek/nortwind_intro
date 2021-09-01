import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl =" http://localhost:3000/categories";

  constructor(private httpClient : HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.apiUrl);

  }
}
