import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatetimeChangeEventDetail, IonDatetime, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-date-time-modal',
  templateUrl: './date-time-modal.page.html',
  styleUrls: ['./date-time-modal.page.scss'],
})
export class DateTimeModalPage implements OnInit {

  @Input() mode: string;
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.mode);
  }

  // confirm() {
  //   this.datetime.nativeEl.confirm();
  // }

  selectDate(event: any) {
    console.log(event);
    this.modalCtrl.dismiss({
      'mode': this.mode,
      'value': event.detail.value
    });
  }

}
