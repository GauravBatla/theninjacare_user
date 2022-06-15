import { userInterface } from './../../models/user/user.interface';
import { ApiService } from './../../services/api.service';
import { CommonService } from './../../services/common.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Camera, CameraResultType } from '@capacitor/camera';
import { AlertTypeEnum } from 'src/app/services/error-handler/alert-type.enum';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileForm: FormGroup;
  imageUrl: string = null;
  userData: userInterface;

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.userData = this.commonService.user.value.user;
    this._buildForm();
  }

  private _buildForm() {
    this.profileForm = this.formBuilder.group(
      {
        name: new FormControl(this.userData.name, Validators.compose([Validators.required, Validators.minLength(3)])),
        email: new FormControl(this.userData.email, Validators.compose([Validators.required])),
        mobile: new FormControl(this.userData.mobile, Validators.compose([Validators.required])),
        address: new FormControl(this.userData.address, Validators.compose([Validators.required])),
        image: new FormControl(this.userData.profile_image, Validators.compose([])),
      },
    );
  }
  // test

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    console.log(image);
    this.imageUrl = `data:image/${image.format};base64,${image.base64String}`;
    if (this.imageUrl != null) {
      this.profileForm.patchValue({
        'image': this.imageUrl
      });
    }
    // var imageUrl = image.webPath;
  };

  async update() {
    console.log(this.profileForm.value);
    this.commonService.showLoader();
    this.api.updateProfile(this.profileForm.value).then((data: any) => {
      console.log(data);
      if (data.status == 200) {
        this.commonService.updateLocalUser(data.data);
        // this.navCtrl.navigateRoot('/tabs');
        this.commonService.showToast('Profile updated!');
        this.ngOnInit();
      } else {
        this.commonService.showAlert(AlertTypeEnum.Error, data.message);
      }
    }).catch(err => {
      // console.log('ERROR', err);
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }

}
