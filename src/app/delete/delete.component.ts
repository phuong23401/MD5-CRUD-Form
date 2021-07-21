import { ProductServiceService } from '../product-service.service';
import { IProduct } from '../iproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id : any;
  name = '';
  price = 0;
  productList: Array<IProduct> = [];

  sub : Subscription;
  constructor(private p : ProductServiceService, private activatedRoute : ActivatedRoute, private router : Router) {
    this.productList = p.productList;
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap : ParamMap) => {
    this.id = paramMap.get('id');
    })
   }

  ngOnInit(): void {
  }

  delete(id: number) {
    console.log(id);
    let index = this.productList.findIndex(e => e.id === id);
    this.productList.splice(index, 1);
  }
}
