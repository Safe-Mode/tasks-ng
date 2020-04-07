import { Pipe, PipeTransform } from '@angular/core';
import {IProductImage} from '../../mocks/products';

@Pipe({
  name: 'imgUrl',
})
export class ImgUrlPipe implements PipeTransform {
  transform(images: IProductImage[]): string {
    return images[0].url;
  }
}
