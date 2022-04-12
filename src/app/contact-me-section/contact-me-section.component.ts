import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-me-section',
  templateUrl: './contact-me-section.component.html',
  styleUrls: ['./contact-me-section.component.scss']
})
export class ContactMeSectionComponent {

  constructor(private formBuilder: FormBuilder) { }

  checkoutForm = this.formBuilder.group({
    title: '',
    email: '',
    description: ''
  });
  // Das checkoutForm wird dann vom im HTML der Komponente als Property Binding für das 
  // Form Tag Attribut formGroup verwendet.

  onSubmit(): void {
    console.log('Email was sent with ', this.checkoutForm.value);
    this.checkoutForm.reset();
  }


}
