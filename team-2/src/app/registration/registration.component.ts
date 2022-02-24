import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  onAddPost() {
    alert('BOOM!');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
