import { Component, OnInit, PipeTransform, Pipe, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

// services
import { ViewerService } from '../../../core/viewer.service';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-round-start',
  styleUrls: ['./start.component.css'],
  templateUrl: './start.component.html'
})
export class StartComponent implements OnInit, OnDestroy {
  missing: number;
  videoSrc: any;
  isCountdownStarted = false;
  isTimesUp = false;

  private viewerServiceSub: Subscription;
  private videoId = 'rioe3YISiQs';
  private countdownId = 'AAOh91P6x60';

  constructor(
    private viewerService: ViewerService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.videoSrc = this.setVideoURL(this.videoId);

    this.viewerServiceSub = this.viewerService.state.subscribe((msg: any) => {
      this.missing = msg.data.missing;

      // 10 seconds remained
      if (msg.data.time === 11 && !this.isCountdownStarted) {
        this.isCountdownStarted = true;
      }

      // time's up
      if (msg.data.time === 0) {
        this.isTimesUp = true;
      }
    });
  }

  ngOnDestroy() {
    this.viewerServiceSub.unsubscribe();
  }

  private setVideoURL(videoId: string) {
    return `https://www.youtube.com/embed/${videoId}?rel=0?version=3&loop=1&showinfo=0&controls=0&modestbranding=1&autoplay=1&mute=1`;
  }
}
