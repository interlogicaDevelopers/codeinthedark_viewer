import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundRoutingModule } from './round-routing.module';
import { SharedModule } from '../shared/shared.module';

// containers
import { CountdownComponent } from './containers/countdown/countdown.component';
import { StartComponent, SafePipe } from './containers/start/start.component';
import { VotingComponent } from './containers/voting/voting.component';
import { ResultsComponent } from './containers/results/results.component';

// components
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  declarations: [
    CountdownComponent,
    StartComponent,
    VotingComponent,
    ResultsComponent,
    PreviewComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    RoundRoutingModule,
    SharedModule
  ]
})
export class RoundModule {}
