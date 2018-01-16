import { Component } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

@Component({
    selector: 'sidenav-component',
    templateUrl: 'sidenav.component.html'
})
export class SideNavComponent {
    constructor(private authService: AuthService) { }
}