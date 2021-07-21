import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  id = 0;
  name = '';
  price = 0;

  productList: Array<IProduct> = [];

  constructor(private p : ProductServiceService) {
    this.productList = p.productList;
  }

  ngOnInit(): void {}
}
