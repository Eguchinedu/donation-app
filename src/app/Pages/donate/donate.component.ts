import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDonation } from 'src/app/types/donation';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
})
export class DonateComponent implements OnInit {
  originalDonate: IDonation = {
    donationAmt: null,
    otherAmt: null,
    contact: null,
  };
  donate: IDonation = { ...this.originalDonate };
  postError = false;
  postErrorMessage = '';
  amounts: string[] = ['$75', '$125', '$150', '$200', 'other'];
  constructor() {}
  ngOnInit(): void {
    console.log(this.donate);
  }
  addDollarSign(text: number) {
    return '$ ' + text;
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
      this.postErrorMessage = 'Please select or type in amount';
    }
  }
}
