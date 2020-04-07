import {Component, Input, OnInit} from '@angular/core';

const MAX_RATING = 5;

export enum StarsIcon {
  FILLED = 'star',
  HALF = 'star_half',
  BORDERED = 'star_border',
}

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.sass'],
})
export class StarRatingComponent implements OnInit {
  @Input()
  rating!: number;

  starsIconEnum = StarsIcon;
  stars = new Array(MAX_RATING).fill('');
  intRating!: number;

  ngOnInit() {
    if (this.rating) {
      this.intRating = Math.floor(this.rating);

      this.stars = this.stars.map((_, i) => {
        if (i < this.intRating || (i === this.intRating && this.rating % this.intRating >= 0.75)) {
          return StarsIcon.FILLED;
        } else if (i === this.intRating && this.rating % this.intRating >= 0.25 && this.rating % this.intRating < 0.75) {
          return StarsIcon.HALF;
        } else {
          return StarsIcon.BORDERED;
        }
      });
    } else {
      this.stars = this.stars.map(() => StarsIcon.BORDERED);
    }
  }
}
