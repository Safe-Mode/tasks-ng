import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRes} from './interceptor.service';

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  status: boolean;
  feedbacksCount: number;
  images: IProductImage[];
  rating?: number | null;
  feedbacks?: IFeedback;
  subCategory?: string;
}

export interface IFeedback {
  rate: number;
  advantages: string;
  limitations: string;
  description: string;
}
export interface IProductImage {
  url: string;
  source: string;
}

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get<IRes>('products');
  }

}

