import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { ViewerService } from './core/viewer.service';
import { WebsocketService } from './core/websocket.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(
    private viewerService: ViewerService,
    private wsService: WebsocketService,
    private router: Router
  ) {
    this.wsService.connect();
  }

  ngOnInit() {
    this.viewerService.state.subscribe((data: any) => {
      console.log(data);
      switch (data.type) {
        case 'ROUND_COUNTDOWN':
          this.router.navigate(['round/countdown']);
          break;
        default:
          this.router.navigate(['/']);
      }
    });
  }
}
