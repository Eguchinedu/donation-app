import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  donatePage() {
    this.router.navigate(['/donate']);
  }
}
