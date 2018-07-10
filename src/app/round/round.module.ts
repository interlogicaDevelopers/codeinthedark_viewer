import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundRoutingModule } from './round-routing.module';

// components
import { CountdownComponent } from './containers/countdown/countdown.component';
import { StartComponent } from './containers/start/start.component';
import { VotingComponent } from './containers/voting/voting.component';
import { ResultsComponent } from './containers/results/results.component';


@NgModule({
  declarations: [
    CountdownComponent,
    StartComponent,
    VotingComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    RoundRoutingModule
  ]
})
export class RoundModule {}
