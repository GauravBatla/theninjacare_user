import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { AlertTypeEnum } from 'src/app/services/error-handler/alert-type.enum';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.page.html',
  styleUrls: ['./my-booking.page.scss'],
})
export class MyBookingPage implements OnInit {

  upcomingBookingList: any = [];
  cancelledBookingList: any = [];
  completedBookingList: any = [];
  selectedSegment: string = 'upcoming';

  constructor(
    private _apiService:ApiService, 
    private commonService:CommonService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {}
  
  ionViewDidEnter() {
    this.getBooking();
  }

  
  segmentChange(event: any) {
    // console.log(event.detail.value);
    this.selectedSegment = event.detail.value;
  }

  async getBooking(){
    this._apiService.getMyBookings().then((data: any) => {
      console.log(data);
      if (data.status == 200) {
       this.upcomingBookingList = data.data.Booked;
       this.cancelledBookingList = data.data.Cancelled;
       this.completedBookingList = data.data.Completed;
      }
    }).catch(err => {
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }

  async onCancelBooking(id: any) {
    this.commonService.showLoader();
    this._apiService.cancelBooking(id).then((data: any) => {
      console.log(data);
      if (data.status == 200) {
        this.commonService.showToast(data.msg);
        this.getBooking();
      }
    }).catch(err => {
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }

  async presentAlert(id) {
    const alert = await this.alertCtrl.create({
      header: 'Warning',
      message: 'Are you sure want to cancel?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.onCancelBooking(id)
          }
        },
        {
          text: 'No',
          role: 'cancel'
        }
      ]
    });

    alert.present();
  }
}
