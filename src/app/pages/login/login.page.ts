import { ApiService } from './../../services/api.service';
import { NavController } from '@ionic/angular';
import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { AlertTypeEnum } from '../../services/error-handler/alert-type.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  otpdiv: boolean;
  name: string;
  mobile: number;
  nameCheck: boolean = false;
  mobileCheck: boolean = false;
  opt1: number;
  opt2: number;
  opt3: number;
  opt4: number;
  country_code: string = '+91';

  constructor(
    private commonService: CommonService,
    private navCtrl: NavController,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.otpdiv = false;
  }

  blurName(event: any) {
    // console.log(event);
    if (event.target.value.length > 3) {
      this.nameCheck = true;
    } else {
      this.nameCheck = false;
    }
  }
  
  blurMobile(event: any) {
    // console.log(event);
    if (event.target.value.length == 10) {
      this.mobileCheck = true;
    } else {
      this.mobileCheck = false;
    }
  }

  async onNext() {
    this.commonService.showLoader();
    this.api.login({role_id: 4, name: this.name, mobile: this.mobile}).then((data: any) => {
      console.log(data);
      if (data.status == 200) {
        this.otpdiv = true;
      }
    }).catch(err => {
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
    // this.otpdiv = true;
  }

  onResendOTP() {
    this.onNext();
  }

  otpController(event, next, prev){
    if(event.target.value.length < 1 && prev){
      prev.setFocus();
    }
    else if(next && event.target.value.length > 0){
      next.setFocus();
    }
    else {
     return 0;
    } 
  }

  async OTPVerify() {
    let otpPin = `${this.opt1}${this.opt2}${this.opt3}${this.opt4}`;
    console.log('->', otpPin);
    this.commonService.showLoader();
    this.api.verify_otp({role_id: 4, mobile: this.mobile, otp: otpPin}).then((data: any) => {
      console.log(data);
      setTimeout(() => {
        this.navCtrl.navigateRoot('/tabs');
      }, 200);
    }).catch(err => {
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }

}
