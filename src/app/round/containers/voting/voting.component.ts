import { Component, OnInit } from '@angular/core';

// services
import { ViewerService } from '../../../core/viewer.service';

@Component({
  selector: 'app-round-voting',
  styleUrls: ['./voting.component.css'],
  template: `
    <h1>Start voting now!</h1>
    <p>{{ timeLeft }}</p>
  `
})
export class VotingComponent implements OnInit {
  timeLeft: number;

  constructor(private viewerService: ViewerService) {}

  ngOnInit() {
    this.viewerService.state.subscribe((msg: any) => {
      this.timeLeft = msg.data.missing;
    });
  }
}
