import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { CommonService } from './common.service';
import { Error } from './error-handler/error.handler';
import { AlertTypeEnum } from './error-handler/alert-type.enum';
import { RequestManagerService } from './request-manager.service';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private storage: Storage,
    private requestManager: RequestManagerService,
    private commonService: CommonService
  ) {
    // console.log(this.commonService.user.value.token)
  }

  login = async (formData) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('login', formData).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }


  verify_otp = async (formData) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('verifyOtp', formData).subscribe((data: any) => {
        // console.log(data);
        if (data.status == 200) {
          console.log('User Logged In!');
          var user = new User(data.user, data.token);
          this.storage.set('user', user);
          this.commonService.user.next(user);
        } else {
          setTimeout(() => {
            this.commonService.showAlert(AlertTypeEnum.Error, data.msg);
          }, 3000);
        }
        resolve(user);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
    
  };

  contactInfo = async () => {
    return new Promise((resolve, reject) => {
      this, this.requestManager.get('supportData').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  queryForm = async (formData) => {
    return new Promise((resolve, reject) => {
      this, this.requestManager.post('contactForm', formData).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  getCategories = async () => {
    return new Promise((resolve, reject) => {
      this, this.requestManager.get('getAllCategory').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  getRecommendations = async (formData) => {
    return new Promise((resolve, reject) => {
      this, this.requestManager.get(`recommendedList/${formData}`).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  updateProfile = async (formData) => {
    return new Promise((resolve, reject) => {
      this, this.requestManager.post('updateProfile', formData).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }


  booking = async (formData) => {
    return new Promise((resolve, reject) => {
      this, this.requestManager.post('booking', formData).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  getMyBookings = async () => {
    return new Promise((resolve, reject) => {
      this, this.requestManager.get('getMyBooking').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  cancelBooking = async (formData) => {
    return new Promise((resolve, reject) => {
      this, this.requestManager.get(`cancelledBooking?booking_id=${formData}`).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  getNotification = async () => {
    return new Promise((resolve, reject) => {
      this, this.requestManager.get('getNotification').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  logout = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('logout').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

}
