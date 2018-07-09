import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { CountdownComponent } from './containers/countdown/countdown.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'countdown',
        component: CountdownComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoundRoutingModule {}
