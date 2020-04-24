import { Component, OnInit } from '@angular/core';
import { feedbacks, IFeedback } from '../mocks/feedbacks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  feedbacks: IFeedback[] = [];

  ngOnInit(): void {
    this.feedbacks = feedbacks;
  }
}
