import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

@Component({
  template: '<div>Loading...</div>'
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }
  
  ngOnInit() {
    this.authService.login();
  }

}
