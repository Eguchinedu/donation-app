import { Component, OnInit } from '@angular/core';
import { ProcessService } from 'src/app/services/process.service';
import { IProcess } from 'src/app/types/process';

@Component({
  selector: 'app-section-five',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.css'],
})
export class SectionFiveComponent implements OnInit {
  processes: IProcess[] = [];
  errorMessage = '';

  constructor(private processService: ProcessService) {}

  ngOnInit(): void {
    this.processService.getProcess().subscribe({
      next: (process) => {
        this.processes = process;
        console.log(process);
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
