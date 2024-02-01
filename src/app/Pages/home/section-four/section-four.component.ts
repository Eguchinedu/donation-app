import { Component } from '@angular/core';

export interface statCards{
  title : string;
  stat: number;
}

@Component({
  selector: 'app-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.css'],
})
export class SectionFourComponent {
  statcards: statCards[] = [
    {
      title: 'Total Amount Donated',
      stat: 0,
    },
    {
      title: 'Total Number of Beneficiaries ',
      stat: 0,
    },
    {
      title: 'Total Number of States reached',
      stat: 0,
    },
    {
      title: 'Total Number of Countries reached',
      stat: 0,
    },
  ];
}
