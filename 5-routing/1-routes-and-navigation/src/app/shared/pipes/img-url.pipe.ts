import { Pipe, PipeTransform } from '@angular/core';
import { IProductImage } from '../services/products.service';

@Pipe({
  name: 'imgUrl',
})
export class ImgUrlPipe implements PipeTransform {
  transform(images: IProductImage[]): string {
    return images[0].url;
  }
}
