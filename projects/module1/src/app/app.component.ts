import { Component } from '@angular/core';
import { product, IProduct } from './../mocks/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public product: IProduct = product;
  public chosenProduct!: IProduct;

  public addProduct(evt: IProduct): void {
    this.chosenProduct = evt;
  }

}
