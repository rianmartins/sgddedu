import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: string;
  senha: string;

  user: any;

  constructor(private _formBuilder: FormBuilder,
              private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
    if(! this._auth.isGuest())
      this._router.navigate(['index']);

    this.loginForm = this._formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.required]
    });
  }

  login(isValid: boolean){

    if(isValid){

      this.user = {
        name: 'Educador',
        email: this.loginForm.get('email').value,
        ocupation: 'Professor'
      };

      this._auth.setUser(this.user);

      this._router.navigate(['index']);
    }
  }

}
