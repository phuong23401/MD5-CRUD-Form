import { IProduct } from '../iproduct';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id = 0;
  name = '';
  price = 0;

  productList: Array<IProduct> = [];

  constructor(private p : ProductServiceService) { 
    this.productList = p.productList;
  }

  ngOnInit(): void {
  }

  edit(id: number, newProduct: IProduct) {
    for(let i = 0; i < this.productList.length; i++) {
      if(this.productList[i].id == id) {
        this.productList[i] = newProduct;
      }
    }
    console.log(newProduct);
  }

  update() {
    let prod : IProduct = {
      id: this.id,
      name: this.name,
      price: this.price
    };
    this.edit(this.id,prod);
  }
}
