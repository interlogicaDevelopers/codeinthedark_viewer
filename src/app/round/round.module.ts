import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundRoutingModule } from './round-routing.module';

// components
import { CountdownComponent } from './containers/countdown/countdown.component';

@NgModule({
  declarations: [
    CountdownComponent
  ],
  imports: [
    CommonModule,
    RoundRoutingModule
  ]
})
export class RoundModule {}
