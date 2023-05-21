import { Component } from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss'],
})
export class SubscribeFormComponent {
  validateForm!: UntypedFormGroup;

  noti: any;

  constructor(private fb: UntypedFormBuilder, private sub: YoutubeService) {}

  additionalForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      // this.route.navigate(['']);
      let data = this.validateForm.value;
      this.sub.addYouTube(data).then((res) => {
        this.noti.success('Success', 'Register successfully');
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  // change() {
  //   this.route.navigate(["first-component"]);
  // }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls['checkPassword'].updateValueAndValidity()
    );
  }

  confirmationValidator = (
    control: UntypedFormControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      // email: [null, [Validators.email, Validators.required]],
      // password: [null, [Validators.required]],
      // checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]],
      // Date: [null, [Validators.required]],
      type: [null, [Validators.required]],
      // shopphoneNumberPrefix: [''],
      // shopPhoneNumber: [null, [Validators.required]],
      // website: [null, [Validators.required]],
      // captcha: [null, [Validators.required]],
      // agree: [false],
    });
  }
}
