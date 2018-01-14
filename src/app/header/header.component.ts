import { Component } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { Router } from '@angular/router';

@Component( {
    selector: 'header-component',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
    constructor(private authService: AuthService, private router: Router) {  
    }

    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/');
    }
}