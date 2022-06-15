import { ApiService } from './../../services/api.service';
import { CommonService } from './../../services/common.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { AlertTypeEnum } from 'src/app/services/error-handler/alert-type.enum';

@Component({
  selector: 'app-shared-form-modal',
  templateUrl: './shared-form-modal.page.html',
  styleUrls: ['./shared-form-modal.page.scss'],
})
export class SharedFormModalPage implements OnInit {

  @Input() type: string;
  queryForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this._buildForm();
  }

  private _buildForm() {
    this.queryForm = this.formBuilder.group(
      {
        name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
        email: new FormControl('', Validators.compose([Validators.required])),
        phone: new FormControl('', Validators.compose([Validators.required])),
        query: new FormControl('', Validators.compose([Validators.required])),
        type: new FormControl(this.type, Validators.compose([Validators.required])),
      },
    );
  }

  async submit() {
    this.commonService.showLoader();
    this.api.queryForm(this.queryForm.value).then((data: any) => {
      console.log(data);
    }).catch(err => {
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

}
