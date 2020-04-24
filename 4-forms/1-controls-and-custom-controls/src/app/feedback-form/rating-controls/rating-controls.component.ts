import { Component, HostListener, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MAX_RATING, StarsIcon } from '../../feedback-card/star-rating/star-rating.component';

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
  rateControl!: number;
  starsIconEnum = StarsIcon;
  stars = new Array(MAX_RATING).fill('');
  intRating!: number;

  @HostListener('click')
  setRate($event: Event): void {
    // this.rateControl =
    console.log($event)
  }

  ngOnInit() {
    if (this.rateControl) {
      this.intRating = Math.floor(this.rateControl);

      this.stars = this.stars.map((_, i) => {
        if (i < this.intRating || (i === this.intRating && this.rateControl % this.intRating >= 0.75)) {
          return StarsIcon.FILLED;
        } else if (i === this.intRating && this.rateControl % this.intRating >= 0.25 && this.rateControl % this.intRating < 0.75) {
          return StarsIcon.HALF;
        } else {
          return StarsIcon.BORDERED;
        }
      });
    } else {
      this.stars = this.stars.map(() => StarsIcon.BORDERED);
    }
  }

  writeValue(): void {}
  registerOnChange() {}
  registerOnTouched(): void {}
}
