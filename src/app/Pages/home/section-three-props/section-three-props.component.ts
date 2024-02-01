import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-three-props',
  templateUrl: './section-three-props.component.html',
  styleUrls: ['./section-three-props.component.css'],
})
export class SectionThreePropsComponent implements OnInit {
  @Input() imgsrc!: string;
  @Input() imgsrc2!: string;
  @Input() vision!: string;
  @Input() visionHead!: string;
  @Input() mission!: string;
  @Input() missionHead!: string;
  
  
  constructor() {}
  ngOnInit(): void {}
}
