import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  status: boolean = false;

  constructor(
    private router: Router,
    protected authService: AuthService
  ) { }

  protected openNavbar(): void {
    this.status = !this.status;
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }

  logout(): void {
    this.authService.logout();
  }
}
