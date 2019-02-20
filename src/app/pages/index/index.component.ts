import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from "@angular/router";
import { UserModel } from '../../shared/models/user-model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;
  isGuest: boolean = false;
  user: UserModel;

  sgddeduList = [];
  sgddeduCompletedList = [];
  sgddeduInProgressList = [];

  public AnimationBarOption;

  constructor(private _chartsService: ChartsService,
              private _auth: AuthService,
              private _router: Router,
              private _ref: ChangeDetectorRef) {

                this.user = this._auth.getUser();
                this._ref.markForCheck();
                console.log("constructor index");
  }

  ngOnInit() {
    this.isGuest = this._auth.isGuest();
    if(this.isGuest){
      this._router.navigate(["/login"]);
    }
    
    
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
    
    this.sgddeduList = [
      {
        gameTitle: 'Titulo do Jogo 1',
        author: 'SGDDEdu by ' + this.user.name,
        done: false
      },
      {
        gameTitle: 'Titulo do Jogo 2',
        author: 'SGDDEdu by ' + this.user.name,
        done: false
      },
      {
        gameTitle: 'Titulo do Jogo 3',
        author: 'SGDDEdu by ' + this.user.name,
        done: true
      },
      {
        gameTitle: 'Titulo do Jogo 4',
        author: 'SGDDEdu by ' + this.user.name,
        done: false
      }
    ];

    this.sgddeduCompletedList = this.sgddeduList.filter(sgddedu => sgddedu.done);
    this.sgddeduInProgressList = this.sgddeduList.filter(sgddedu => !sgddedu.done);

  }
}
