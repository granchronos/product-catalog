import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}


  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/catalog']);
    } else {
      alert('Bad credentials');
    }
  }

}
