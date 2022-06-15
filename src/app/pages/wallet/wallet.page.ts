import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { RequestPage } from './request/request.page';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  bal: any
  constructor(
    private commonService: CommonService,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.commonService.user.subscribe((data: any) => {
      this.bal = data.user.wallet;
      // console.log(this.userData);
    });
  }

  async paymentReq() {
    const popover = await this.popoverCtrl.create({
      component: RequestPage,
      cssClass: 'popover-css',
      size: 'cover',
      //  componentProps: { id: id }
    });

    popover.present();
  }
}
