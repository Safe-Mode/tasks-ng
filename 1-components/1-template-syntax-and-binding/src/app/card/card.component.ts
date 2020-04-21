import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IProduct } from './../../mocks/products';

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input()
  product!: IProduct;

  @Output()
  addToCart: EventEmitter<any> = new EventEmitter();

  public addProduct(): void {
    this.addToCart.emit(this.product);
  }

}
