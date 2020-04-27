import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MAX_RATING, StarsIcon } from '../../feedback-card/star-rating/star-rating.component';

type IRate = number | null;

@Component({
  selector: 'app-rating-controls',
  templateUrl: './rating-controls.component.html',
  styleUrls: ['./rating-controls.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RatingControlsComponent,
      multi: true,
    },
  ],
})
export class RatingControlsComponent implements ControlValueAccessor, OnInit {
  private rateControl!: IRate;

  fakeRate!: number | null;
  starsIconEnum = StarsIcon;
  stars = new Array(MAX_RATING).fill('');

  propagateChange = (rate: IRate) => rate;
  propagateTouched = (rate: IRate) => rate;

  ngOnInit() {
    this.stars = this.stars.map(() => this.starsIconEnum.FILLED);
  }

  setRate(rate: IRate): void {
    this.rate = rate;
  }

  onStarHover(index: IRate): void {
    this.fakeRate = index;
  }

  onStarBlur(): void {
    this.fakeRate = null;
  }

  get rate(): IRate {
    return this.rateControl;
  }

  set rate(index: IRate) {
    const rate = (index) ? index + 1 : index;

    this.rateControl = rate;
    this.propagateChange(rate);
    this.propagateTouched(rate);
  }

  writeValue(rate: IRate): void {
    this.rate = rate;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
}
