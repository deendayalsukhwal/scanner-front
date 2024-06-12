import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { RegisterComponent } from './app/register/register.component';

bootstrapApplication(RegisterComponent, {
  providers: [
    provideRouter([]),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
