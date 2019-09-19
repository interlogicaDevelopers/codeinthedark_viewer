import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ViewerService {
  videoPlaylist: string[] = [
    // 2018
    // 'rioe3YISiQs',
    // 'DQIyh29Q2z4',
    // 'G0fFLvwjr0g',
    // 'LEhzTL5V7Xw',
    // 'Aba7VD4h6G4'
    // 2019
    'WUtVUDzkH9U',
    'ZrKgyY5aDvA',
    'WTN1WsUCyQc',
    '9tiUMijUC78',
    'aHZdDmYFZN0',

  ];
  state: Subject<object> = new Subject<object>();
  videoQueue = 0;
}
