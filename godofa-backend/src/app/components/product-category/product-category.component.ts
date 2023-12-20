import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../models/productCategory';
import { ProductCategoryService } from '../../services/productCategory.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent implements OnInit{

  productCategories:ProductCategory[]=[];
  currentProductCategory:ProductCategory;
  
  dataLoaded=false;
  constructor(private productCategoryService:ProductCategoryService){}

  ngOnInit(): void {
    this.getProductCategories();
  }

  getProductCategories(){

    this.productCategoryService.getProductCategories().subscribe(response=>{
      this.productCategories=response.data
      this.dataLoaded=true
    })
  }
  setCurrentProductCategory(productCategory:ProductCategory){
   this.currentProductCategory=productCategory;
  }

  getCurrentProductCategoryClass(productCategory:ProductCategory){
    if(productCategory==this.currentProductCategory){
      return "list-group-item active"
    }else{
      return "list-group-item "
    }
  }
}
