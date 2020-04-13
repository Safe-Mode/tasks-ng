import {Component, OnInit} from '@angular/core';
import {IProduct, ProductsService} from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public products!: IProduct[];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe((products) => this.products = products);
  }

  addProduct() {

  }
}
