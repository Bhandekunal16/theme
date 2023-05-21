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
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent {
  validateForm!: UntypedFormGroup;
  // projectservice: any;
  noti: any;

  constructor(
    private fb: UntypedFormBuilder,
    private projectservice: ProjectService
  ) {}

  // additionalForm(): void {
  //   if (this.validateForm.valid) {
  //     console.log('submit', this.validateForm.value);
  //   //   this.route.navigate(['']);
  //   //   // let data = this.validateForm.value;
  //   //   // this.registerservice.additionalForm(data).then((res) => {
  //   //   //   this.noti.success('Success', 'Register successfully');
  //   //   });
  //   // } else {
  //   //   Object.values(this.validateForm.controls).forEach((control) => {
  //   //     if (control.invalid) {
  //   //       control.markAsDirty();
  //   //       control.updateValueAndValidity({ onlySelf: true });
  //   //     }
  //   //   });
  //   }
  // }
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
      projectName: [null, [Validators.required]],
      codeIn: [null, [Validators.required]],
      // Date: [null, [Validators.required]],
      // shopphoneNumberPrefix: [''],
      // shopPhoneNumber: [null, [Validators.required]],
      // website: [null, [Validators.required]],
      // captcha: [null, [Validators.required]],
      // agree: [false],
    });
  }

  additionalForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      // this.route.navigate(['']);
      let data = this.validateForm.value;
      this.projectservice.addproject(data).then(() => {
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
}
