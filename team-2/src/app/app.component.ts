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
    this._router.navigateByUrl('/login')
  }

  title = 'Truck-U';
}


