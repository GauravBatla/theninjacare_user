import { environment } from './../../../environments/environment';
import { ApiService } from './../../services/api.service';
import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { AlertTypeEnum } from 'src/app/services/error-handler/alert-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    slidesPerView: 4.8,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };
  categoryList: { id: number; name: string; img: string; }[];
  recommendationList: any = [];
  name: string;
  url: string;

  constructor(
    private commonService: CommonService,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.url = "https://www.theninjacare.com/";

    this.getCategoryList();
    this.getRecommendationList();
  }

  ionViewDidEnter() {
    this.name = this.commonService.user.value.user.name;
  }

  async getCategoryList() {
    this.commonService.showLoader();
    this.api.getCategories().then((data: any) => {
      console.log(data);
      if (data.status == 200) {
        this.categoryList = data.data;
      }
    }).catch(err => {
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }
  
  async getRecommendationList() {
    this.api.getRecommendations(5).then((data: any) => {
      console.log(data);
      if (data.status == 200) {
        this.recommendationList = data.data;
      }
    }).catch(err => {
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }
}
