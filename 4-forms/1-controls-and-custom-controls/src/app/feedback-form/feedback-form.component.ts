import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit {

  feedbackForm!: FormGroup;

  ngOnInit(): void {
    const { required } = Validators;

    this.feedbackForm = new FormGroup({
      advantages: new FormControl('', required),
      limitations: new FormControl('', required),
      description: new FormControl('')
    });
  }

  createFeedback():void {

  }

  save():void {

  }
}
