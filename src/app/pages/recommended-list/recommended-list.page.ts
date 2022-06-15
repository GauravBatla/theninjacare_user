import { CommonService } from './../../services/common.service';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { AlertTypeEnum } from 'src/app/services/error-handler/alert-type.enum';

@Component({
  selector: 'app-recommended-list',
  templateUrl: './recommended-list.page.html',
  styleUrls: ['./recommended-list.page.scss'],
})
export class RecommendedListPage implements OnInit {

  recommendationList: any = [];
  url: string;

  constructor(
    private api: ApiService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.url = "https://www.theninjacare.com/";
    this.getRecommendedList();
  }

  async getRecommendedList() {
    this.commonService.showLoader();
    this.api.getRecommendations(60).then((data: any) => {
      console.log(data);
      if (data.status == 200) {
        this.recommendationList = data.data;
      }
    }).catch(err => {
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }

}
