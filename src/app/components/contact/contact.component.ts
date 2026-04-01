import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    // Setting up the validation rules
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitted = true;
      console.log('Form Data:', this.contactForm.value);
      // Here you would normally call your backend service
      setTimeout(() => {
        this.contactForm.reset();
        this.isSubmitted = false;
      }, 3000); // Reset after 3 seconds for demo purposes
    } else {
      // Force validation display if they click submit early
      this.contactForm.markAllAsTouched();
    }
  }
}