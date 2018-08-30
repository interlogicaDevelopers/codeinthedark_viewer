import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

// services
import { ViewerService } from '../../../core/viewer.service';

@Component({
  selector: 'app-round-results',
  styleUrls: ['./results.component.css'],
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit, OnDestroy {
  players: any[] = [];
  isLoading: Boolean = true;

  private viewerServiceSub: Subscription;

  constructor(
    private viewerService: ViewerService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.viewerServiceSub = this.viewerService.state.pipe(
      mergeMap((resp: any) => this.http.get(`${environment.ws_url}/vote/${resp.data.round}`))
    ).subscribe((players: any) => {
      this.players = players;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.viewerServiceSub.unsubscribe();
  }
}
