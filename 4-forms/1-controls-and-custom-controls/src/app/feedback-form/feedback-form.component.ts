import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFeedback } from '../../mocks/feedbacks';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit {
  @Output() createFeedback = new EventEmitter<IFeedback>();

  feedbackForm!: FormGroup;

  ngOnInit(): void {
    const { required, minLength } = Validators;

    this.feedbackForm = new FormGroup({
      rateControl: new FormControl(''),
      advantages: new FormControl('', [required, minLength(10)]),
      limitations: new FormControl('', [required, minLength(10)]),
      description: new FormControl('', [required, minLength(10)])
    });
  }

  save(): void {
    this.createFeedback.emit(this.feedbackForm.value);
    this.feedbackForm.reset();
  }
}
