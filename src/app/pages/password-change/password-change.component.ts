import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessages } from '../../shared/constants/alertMessages';

@Component({
selector: 'app-passwordchange',
templateUrl: './password-change.component.html',
styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent {

    passwordForm: FormGroup;
    validPassword: boolean = true;

    requiredAlert: string = AlertMessages.REQUIRED;
    passwordMatchAlert: string = AlertMessages.PASSWORD_MATCH;

    constructor(private _formBuilder: FormBuilder,
                private _router: Router){

    }

    ngOnInit(){
        this.passwordForm = this._formBuilder.group({
            'currentPassword': [null, Validators.required],
            'password': [null, Validators.required],
            'passwordConfirmation': [null, Validators.required]
        });
    }

    passwordConfirmationValidation(){
        if(this.passwordForm.get('password').value != this.passwordForm.get('passwordConfirmation').value)
            this.validPassword = false;
        else
            this.validPassword = true;
    }

    post(isValid: boolean){
        this._router.navigate(['index']);
    }

}