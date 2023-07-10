import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    protected authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.errorMsgLogin = '';
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.required]],
    })
  }

  loginUser() {
    return this.authService.login(this.form.value)
  }
}
