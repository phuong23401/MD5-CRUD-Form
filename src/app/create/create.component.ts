import { ProductServiceService } from '../product-service.service';
import { IProduct } from '../iproduct';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id = 0;
  name = '';
  price = 0;

  productList: Array<IProduct> = [];

  constructor(private p : ProductServiceService) { 
    this.productList = p.productList;
  }

  ngOnInit(): void {
  }

  save() {
    let prod : IProduct = {
      id: this.id,
      name: this.name,
      price: this.price
    };
    this.productList.push(prod);
    console.log(prod);
  }
}
