import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ApiService } from 'src/app/services/api.service';
import { AlertTypeEnum } from 'src/app/services/error-handler/alert-type.enum';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.page.html',
  styleUrls: ['./select-service.page.scss'],
})

export class SelectServicePage implements OnInit {
  arr: any = [1, 2, 3, 4, 5, 6, 7];
  select: any = {}
  categoryList: any
  arr1: any = []

  constructor(
    private api: ApiService,
    private router: Router, private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.getCategoryList()
  }

  segmentChanged(event: any) {
    console.log(event);
    const temp = event.detail.value;

    const a = temp.name;
    const tmp = a.toString()

    if (this.select[tmp]) {
      this.arr1 = this.arr1.filter((itam) => {
        return itam != tmp
      })
      this.select[tmp] = false
    }
    else {
      this.select[tmp] = true
      this.arr1.push(tmp)
      console.log(this.select[tmp]);

    }
    console.log(this.arr1, "arr");

    this.arr.push(event.detail.value.index);
    if (this.select[tmp] === true) {
    } else {
      return;
    }
  }

  onConfirmDetails() {
    if (this.arr1.length) {
      this.commonService.setData(this.arr1)
      this.router.navigateByUrl('/confirm-details');
    } else {
      this.commonService.showToast('Please select any one service to continue.');
    }
  }

  async getCategoryList() {
    this.commonService.showLoader();
    this.api.getCategories().then((data: any) => {
      console.log(data);
      if (data.status == 200) {
        console.log(data);
        this.categoryList = data.data;
      }
    }).catch(err => {
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }

}
