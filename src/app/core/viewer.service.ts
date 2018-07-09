import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ViewerService {
  state: Subject<object> = new Subject<object>();
}
