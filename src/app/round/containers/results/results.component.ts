import { Component, OnInit } from '@angular/core';

// services
import { ViewerService } from '../../../core/viewer.service';

@Component({
  selector: 'app-round-results',
  styleUrls: ['./results.component.css'],
  template: `
    <h1>Results of the round:</h1>
  `
})
export class ResultsComponent implements OnInit {
  timeLeft: number;

  constructor(private viewerService: ViewerService) {}

  ngOnInit() {
    this.viewerService.state.subscribe((msg: any) => {
      this.timeLeft = msg.data.missing;
    });
  }
}
