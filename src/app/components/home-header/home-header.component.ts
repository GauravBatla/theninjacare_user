import { CommonService } from './../../services/common.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  @Input() name: string;

  constructor(
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    console.log(this.name);
  }

  onNotification() {
    console.log('Notification Clicked');
    this.router.navigateByUrl('/notifications');
  }

  onGetStarted() {
    this.router.navigateByUrl('/tabs/home/select-service');
  }

}
