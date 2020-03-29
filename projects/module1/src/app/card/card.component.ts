import { Component } from '@angular/core';
import { product, IProduct } from './../../mocks/products';

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  public product: IProduct = product;

}
