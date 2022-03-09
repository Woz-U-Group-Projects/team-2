import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private _router: Router) { }

  navigateToProfile() {
    this._router.navigate(['profile'])
  }
  navigateToLogin() {
    this._router.navigate(['/login'])
  }
  navigateToRegistration() {
    this._router.navigate(['registration'])
  }

  title = 'Truck-U';
}


