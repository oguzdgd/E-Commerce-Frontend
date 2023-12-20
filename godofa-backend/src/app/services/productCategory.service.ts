import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductCategory } from '../models/productCategory';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  apiUrl = "https://localhost:44374/api/ProductCategory/getall"
  
  constructor(private httpClient: HttpClient) { }

  getProductCategories():Observable<ListResponseModel<ProductCategory>>{    
    return this.httpClient.get<ListResponseModel<ProductCategory>>(this.apiUrl)
  }

}