import { Component, OnInit } from '@angular/core';

// services
import { ViewerService } from '../../../core/viewer.service';

@Component({
  selector: 'app-round-countdown',
  styleUrls: ['./countdown.component.css'],
  template: `
    <h1>Remaining time to the next round:</h1>
    <p>{{ timeLeft }}</p>
  `
})
export class CountdownComponent implements OnInit {
  timeLeft: number;

  constructor(private viewerService: ViewerService) {}

  ngOnInit() {
    this.viewerService.state.subscribe((msg: any) => {
      this.timeLeft = msg.data.missing;
    });
  }
}
