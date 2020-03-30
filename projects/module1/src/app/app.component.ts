import { Component } from '@angular/core';
import { product, IProduct } from './../mocks/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public product: IProduct = product;
  public choosenProduct!: IProduct;

  public getProduct(evt: IProduct): void {
    this.choosenProduct = evt;
  }

}
