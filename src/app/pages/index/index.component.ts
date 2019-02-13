import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;
  isGuest: boolean = false;

  public AnimationBarOption;

  constructor(private _chartsService: ChartsService,
              private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();

    this.isGuest = this._auth.isGuest();

    if(this.isGuest){
      this._router.navigate(["login"])
    }
  }
}
