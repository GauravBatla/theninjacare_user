import { DateTimeModalPage } from './date-time-modal/date-time-modal.page';
import { ModalController, NavController } from '@ionic/angular';
import { CommonService } from './../../services/common.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { AlertTypeEnum } from 'src/app/services/error-handler/alert-type.enum';
import { ApiService } from 'src/app/services/api.service';
import { Browser } from '@capacitor/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-confirm-details',
  templateUrl: './confirm-details.page.html',
  styleUrls: ['./confirm-details.page.scss'],
})
export class ConfirmDetailsPage implements OnInit {

  confirmDetailForm: FormGroup;
  date1: any;
  date2: any;
  category_name: any
  selected_start_date: any;
  selected_end_date: any;
  selected_start_time: any;
  selected_end_time: any;

  constructor(
    private formBuilder: FormBuilder,
    private nativeGeocoder: NativeGeocoder,
    private commonService: CommonService,
    private _api: ApiService,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this._buildForm();
    var passedData = this.commonService.getData();
    console.log(passedData, "data");

    // this.category_name = passedData.slice(0, passedData.length - 1).join(',').concat(
    //   ',' + passedData[passedData.length - 1]);
    this.category_name = passedData.join()
    console.log(this.category_name);
    this.confirmDetailForm.patchValue({ 'category_name': this.category_name });
  }


  private _buildForm() {
    this.confirmDetailForm = this.formBuilder.group(
      {
        name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
        mobile: new FormControl('', Validators.compose([Validators.required])),
        location: new FormControl('', Validators.compose([Validators.required])),
        booking_date_start: new FormControl('', Validators.compose([Validators.required])),
        booking_date_end: new FormControl('', Validators.compose([Validators.required])),
        start_time: new FormControl('', Validators.compose([Validators.required])),
        //end_time: new FormControl('', Validators.compose([Validators.required])),
        category_name: new FormControl('', Validators.compose([Validators.required]))
      }
    );
  }

  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });
    console.log('Current position:', coordinates.coords.latitude, coordinates.coords.longitude);
    this.getAddress(coordinates.coords.latitude, coordinates.coords.longitude);
  };

  nativeGeocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  getAddress(lat, long) {
    this.nativeGeocoder.reverseGeocode(lat, long, this.nativeGeocoderOptions)
      .then((res: NativeGeocoderResult[]) => {
        // console.log('address new ->', this.pretifyAddress(res[0]));
        console.log('address new ->', this.pretifyAddress(res[0]));
        let fetchedAddress = this.pretifyAddress(res[0]);
        this.confirmDetailForm.patchValue({
          'location': fetchedAddress
        });
        // this.currentAddress = fetchedArress.slice(0, -6);
        // this.currentPin = fetchedArress.substr(-6);
      })
      .catch((error: any) => {
        console.log(error);
        this.commonService.showAlert(AlertTypeEnum.Error, 'Location could not be fetched!');
      });
  }


  pretifyAddress(address) {
    let obj = [];
    let data = "";
    for (let key in address) {
      obj.push(address[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length)
        data += obj[val] + ', ';
    }
    console.log('-> Address Pretify: ', address);
    return `${address.areasOfInterest[0]}, ${address.subLocality}, ${address.subAdministrativeArea}, ${address.administrativeArea} ${address.postalCode}`;
    return address.slice(0, -2);
  }

  selectDate(event: any) {
    console.log("xscdfvg", event);

  }

  async confirmDetail() {
    console.table(this.confirmDetailForm.value);
    this.commonService.showLoader();
    this._api.booking(this.confirmDetailForm.value).then((data: any) => {
      console.log(data);
      if (data.status == 200) {
        this.openCapacitorSite(data.booking_id);
        this.navCtrl.navigateRoot('/tabs');
      } else {
        this.commonService.showAlert(AlertTypeEnum.Error, data.message);
      }
    }).catch(err => {
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }

  openCapacitorSite = async (type: string) => {
    console.log(`${environment.baseURL}booking-payment/${type}`);
    await Browser.open({ url: `${environment.baseURL}booking-payment/${type}`, presentationStyle: 'fullscreen' });
  };

  async onDateTimeSelection(flag: string) {
    const modal = await this.modalCtrl.create({
      component: DateTimeModalPage,
      componentProps: { mode: flag },
      cssClass: 'date-time-modal'
    });

    modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
    if (data.mode == 'start_date') {
      var date = data.value.toString().split('T');
      this.selected_start_date = data.value;
      this.confirmDetailForm.patchValue({
        'booking_date_start': date[0]
      });
    } else if (data.mode == 'end_date') {
      this.selected_end_date = data.value;
      var date = data.value.toString().split('T');
      this.confirmDetailForm.patchValue({
        'booking_date_end': date[0]
      });
    } else if (data.mode == 'start_time') {
      this.selected_start_time = data.value;
      var time = data.value.toString().split('T');
      this.confirmDetailForm.patchValue({
        'start_time': time[1]
      });
    } else if (data.mode == 'end_time') {
      this.selected_end_time = data.value;
      var time = data.value.toString().split('T');
      this.confirmDetailForm.patchValue({
        'end_time': time[1]
      });
    } else {
      this.commonService.showToast('Something went wrong. Try again!!');
    }
  }

}
