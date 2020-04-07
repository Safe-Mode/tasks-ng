import {Component, OnInit} from '@angular/core';
import {IProduct, products} from '../mocks/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public products!: IProduct[];

  ngOnInit() {
    this.products = products;
  }

  addProduct() {

  }
}
