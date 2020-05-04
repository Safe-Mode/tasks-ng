import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/services/products.service';

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  product!: IProduct;

  @Output()
  addToCart = new EventEmitter<any>();

  addProduct() {
    this.addToCart.emit();
  }
}
