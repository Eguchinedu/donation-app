import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetails } from 'src/app/types/user-details';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  originalUserDetails: UserDetails = {
    name: null,
    email: null,
    phoneNo: null,
    address: null,
    message: null,
  };
  userDetails: UserDetails = { ...this.originalUserDetails };
  postError = false;
  postErrorMessage = '';

  constructor() {}
  ngOnInit(): void {
    console.log(this.userDetails);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.value);
    if (form.valid) {
      // this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      //   result => console.log('success: ', result),
      //   error => this.onHttpError(error),
      //   );
      this.postError = false;
      this.postErrorMessage = '';
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors';
    }
  }
}
