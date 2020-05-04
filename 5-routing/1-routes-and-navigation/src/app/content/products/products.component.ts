import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { ProductsService, IProduct } from './../../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit {
  products!: IProduct[];
  pageSequence$$ = new Subject();

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService
      .getProducts()
      .subscribe((products: IProduct[]) => {
        this.products = products;
      });
  }

  addProduct(): void {

  }

}
