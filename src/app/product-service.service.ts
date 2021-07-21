import { IProduct } from './../../.history/src/app/iproduct_20210721101407';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  id = 0;
  name = '';
  price = 0;

  productList: Array<IProduct> = [];

  constructor() {
    let prod1 : IProduct = {
      id: 1,
      name: "iphoneX",
      price: 123
    };
    let prod2 : IProduct = {
      id: 2,
      name: "iphone11",
      price: 234
    };
    let prod3 : IProduct = {
      id: 3,
      name: "iphone12",
      price: 345
    };
    this.productList.push(prod1, prod2, prod3);
   }
}
