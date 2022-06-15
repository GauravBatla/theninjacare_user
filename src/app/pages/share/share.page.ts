import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

import { Share } from '@capacitor/share';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {
  
  refer_code: string;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.refer_code = this.commonService.user.value.user.refer_code;
  }
  
  async share() {
    await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }

}
