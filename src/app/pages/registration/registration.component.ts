import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../../shared/models/user-model';
import { AlertMessages } from '../../shared/constants/alertMessages';

@Component({
selector: 'app-registration',
templateUrl: './registration.component.html',
styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

    registrationForm: FormGroup;
    validPassword: boolean = true;
    user: UserModel;

    requiredAlert: string = AlertMessages.REQUIRED;
    emailAlert: string = AlertMessages.EMAIL;
    passwordMatchAlert: string = AlertMessages.PASSWORD_MATCH;

    constructor(private _formBuilder: FormBuilder,
                private _auth: AuthService,
                private _router: Router) { }

    ngOnInit() {
    
        this.registrationForm = this._formBuilder.group({
            'name': [null, Validators.required],
            'ocupation': [null, Validators.required],
            'email': [null, Validators.compose([Validators.required, Validators.email])],
            'password': [null, Validators.required],
            'passwordConfirmation': [null, Validators.required]
        });
    }

    passwordConfirmationValidation(){
        if(this.registrationForm.get('password').value != this.registrationForm.get('passwordConfirmation').value)
            this.validPassword = false;
        else
            this.validPassword = true;
    }

    post(isValid: boolean){
        if(isValid){

            this.user = {
              name: this.registrationForm.get('name').value,
              email: this.registrationForm.get('email').value,
              ocupation: this.registrationForm.get('ocupation').value,
            };
      
            this._auth.setUser(this.user);
      
            this._router.navigate(['/sggedu/index']);
          }
    }

}