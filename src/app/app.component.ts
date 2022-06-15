import { environment } from './../environments/environment';
import { ApiService } from './services/api.service';
import { CommonService } from './services/common.service';
import { SharedFormModalPage } from './pages/shared-form-modal/shared-form-modal.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, IonRouterOutlet, MenuController, ModalController, Platform, AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

import { Browser } from '@capacitor/browser';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { AlertTypeEnum } from './services/error-handler/alert-type.enum';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild(IonRouterOutlet, { static : true }) routerOutlet: IonRouterOutlet;
  contactNumber: number;
  contactEmail: string;
  
  constructor(
    private storage: Storage,
    private platform: Platform,
    private router: Router,
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private call: CallNumber,
    private email: EmailComposer,
    private commonService: CommonService,
    private api: ApiService,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}

  async ngOnInit() {
    await this.storage.create();
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (this.router.url === '/login' || this.router.url === '/tabs/home') {
        navigator['app'].exitApp();
      }
    });
    this.getContactInfo();
  }

  onMenuClose() {
    this.menuCtrl.close('m1');
  }

  openCapacitorSite = async (type: string) => {
    if (type == 'privacy')
      await Browser.open({ url: `${environment.baseURL}privacy-policy/app/user`, presentationStyle: 'fullscreen' });
    else if (type == 'terms')
      await Browser.open({ url: `${environment.baseURL}term-condition/app/user`, presentationStyle: 'fullscreen' });
    else if (type == 'about')
      await Browser.open({ url: `${environment.baseURL}about/app/user`, presentationStyle: 'fullscreen' });
    else
      this.commonService.showAlert(AlertTypeEnum.Error, 'Something went wrong!');
  };

  async openModal(flag: string) {
    const modal = await this.modalCtrl.create({
      component: SharedFormModalPage,
      componentProps: {type: flag},
      swipeToClose: true,
      mode: 'ios',
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.present();
  }

  async getContactInfo() {
    this.api.contactInfo().then((data: any) => {
      console.log(data);
      if (data.status == 200) {
        this.contactNumber = data.data.support_mobile;
        this.contactEmail = data.data.support_email
      }
    }).catch(err => {
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }

  async onContact() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact',
      buttons: [
        {
          text: `${this.contactNumber}`,
          icon: 'call',
          handler: () => {
            this.call.callNumber(`${this.contactNumber}`, true).then((data: any) => {
              console.log('Dialer Launched: ', data);
            }).catch(err => {
              console.log('Error launching Dailer', err);
              this.commonService.showAlert(AlertTypeEnum.Error, 'Something went wrong!');
            });
          }
        },
        {
          text: `${this.contactEmail}`,
          icon: 'mail',
          handler: () => {
            let email = {
              to: `${this.contactEmail}`,
              subject: 'Contact Query',
              body: '',
              isHtml: true
            };

            this.email.open(email);
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  async onLogout() {
    this.commonService.showLoader();
    this.api.logout().then((data: any) => {
      console.log(data);
      if (data.status == 200) {
        this.commonService.showToast(data.message);
        this.commonService.logout();
        this.navCtrl.navigateRoot('/login');
      }
    })
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Warning',
      message: 'Are you sure want to logout?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.onLogout();
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
