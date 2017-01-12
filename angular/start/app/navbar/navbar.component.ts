import { Component } from '@angular/core'

@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar/navbar.html'
})
export class NavbarComponent {
    siteName = 'rehnz himself';
    navbarItems = ['About', 'Services', 'Contact'];
 }
