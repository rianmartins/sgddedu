import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../shared/models/user-model';
import { Router } from '@angular/router';
import { AlertMessages } from '../../shared/constants/alertMessages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  user: UserModel;

  requiredAlert: string = AlertMessages.REQUIRED;
  emailAlert: string = AlertMessages.EMAIL;

  constructor(private _auth: AuthService,
              private _formBuilder: FormBuilder,
              private _router: Router) { }

  ngOnInit() { 
    this.user = this._auth.getUser();

    this.profileForm = this._formBuilder.group({
      'name': [this.user.name, Validators.required],
      'email': [this.user.email, Validators.compose([Validators.required, Validators.email])],
      'ocupation': [this.user.ocupation, Validators.required]
    });
  }

  post(isValid: boolean){
    if(isValid){
      this.user = this.profileForm.value;
      this._auth.setUser(this.user);

      this._router.navigate(['index']);
      window.location.reload();
      
    }
  }

}
