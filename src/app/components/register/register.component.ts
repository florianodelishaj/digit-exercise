import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    protected authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.msgRegister = '';
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.required]],
    })
  }

  registerUser() {
    return this.authService.register(this.form.value)
  }
}
