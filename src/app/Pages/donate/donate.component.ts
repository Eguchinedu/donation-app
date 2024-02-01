import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDonation } from 'src/app/types/donation';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
})
export class DonateComponent implements OnInit {
  isLoading: boolean = false;
  originalDonate: IDonation = {
    name: null,
    email: null,
    amount: 200000,
    count: 1,
  };
  donate: IDonation = { ...this.originalDonate };
  postError = false;
  postErrorMessage = '';
  written!:boolean;
  isAnonymous:boolean = false;
  constructor() {}
  ngOnInit(): void {
    console.log(this.donate);
  }
  increment(e:any){
    e.preventDefault();
    this.donate.count++;
    if(this.donate.amount !== null){
    this.donate.amount = this.donate.amount + 200000;
    }
  }
  decrement(e:any){
    e.preventDefault();
    this.donate.count--;
     if (this.donate.amount !== null) {
       this.donate.amount = this.donate.amount - 200000;
     }
  }
 
  typeAmount(ev:any){
    // this.written = true;
    ev.preventDefault();
    
    this.written = ev.target.checked;

    if(this.written){
      this.donate.amount = null;
    }else {
      this.donate.amount = 200000;
      this.donate.count = 1;
    }
    // let cl = document.getElementsByClassName(index);
    // let cl2 = document.getElementsByClassName(index2);
    
  // if (ev.target.checked) {
  //   console.log(index);
  //   for (let i = 0; i < cl.length; i++) {
  //     cl[i].classList.add('hidden');
  //     for (let j = 0; j < cl2.length; j++) {
  //       cl2[j].classList.add('show');
  //     }
  //   }
  // } else {
  //   for (let i = 0; i < cl.length; i++) {
  //     cl[i].classList.remove('hidden');
  //     for (let j = 0; j < cl2.length; j++) {
  //       cl2[j].classList.remove('show');
  //     }
  //   }
  // }

  }
  isAnon(ev:any){
    ev.preventDefault();

    this.isAnonymous = ev.target.checked;
    console.log('anonymous:', this.isAnonymous);
    if (this.isAnonymous) {
      this.donate.name = 'Anonymous'
      this.donate.email = 'Anonymous'
    } else {
      this.donate.name = null;
      this.donate.email = null;
    }
    // let cl = document.getElementsByClassName(index);
    // if(ev.target.checked){
    //   console.log(index);
    //   for(let i = 0; i < cl.length; i++){
    //     cl[i].classList.add('hidden')
    //   }
    // }else {
    //   for(let i = 0; i < cl.length; i++){
    //     cl[i].classList.remove('hidden');
    //   }
    // }
  }
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.value);
    if (form.valid) {
      this.isLoading = true;
      // this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      //   result => console.log('success: ', result),
      //   error => this.onHttpError(error),
      //   );
      this.postError = false;
      this.postErrorMessage = '';
      this.isLoading = false;
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please select or type in amount';
      this.isLoading = false
    }
  }
}
