import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode'; // Import QRCodeModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, QRCodeModule], // Use imports array for standalone component
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  qrData: string | null = null;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { firstName, lastName, email, mobileNo } = this.registerForm.value;

      // Generate a simple contact string
      const contactString = `BEGIN:VCARD\nVERSION:3.0\nFN:${firstName}\nTEL:${mobileNo}\nEND:VCARD`;
      
      // Generate QR data
      this.qrData = contactString;
    }
  }
}



/*
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, QRCodeModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  qrData: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      // Send form data to backend
      this.http.post('http://localhost:8080/api/register', formData).subscribe(
        response => {
          console.log('User registered successfully', response);

          // Generate a simple contact string
          const contactString = `BEGIN:VCARD\nVERSION:3.0\nFN:${formData.firstName}\nTEL:${formData.mobileNo}\nEND:VCARD`;
          
          // Generate QR data
          this.qrData = contactString;
        },
        error => {
          console.error('Error registering user', error);
        }
      );
    }
  }
}

*/