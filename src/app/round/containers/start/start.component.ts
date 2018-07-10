import { Component, OnInit } from '@angular/core';

// services
import { ViewerService } from '../../../core/viewer.service';

@Component({
  selector: 'app-round-start',
  styleUrls: ['./start.component.css'],
  template: `
    <h1>Start Round:</h1>
    <p>{{ timeLeft }}</p>
  `
})
export class StartComponent implements OnInit {
  timeLeft: number;

  constructor(private viewerService: ViewerService) {}

  ngOnInit() {
    this.viewerService.state.subscribe((msg: any) => {
      this.timeLeft = msg.data.missing;
    });
  }
}
