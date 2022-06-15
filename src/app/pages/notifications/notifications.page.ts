import { ApiService } from './../../services/api.service';
import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { AlertTypeEnum } from 'src/app/services/error-handler/alert-type.enum';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notificationList: any = [];

  constructor(
    private commonService: CommonService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getNotificationList();
  }

  async getNotificationList() {
    this.commonService.showLoader();
    this.api.getNotification().then((data: any) => {
      if (data.status == 200) {
        this.notificationList = data.data;
      }
    }).catch(err => {
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }

}
