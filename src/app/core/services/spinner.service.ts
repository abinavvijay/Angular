import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  state: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  start(): void {
    document.body.style.overflow = 'hidden';
    this.state.next(1);
  }

  stop(showNoData: boolean = false): void {
    document.body.style.overflow = 'visible';

    this.state.next(showNoData ? 2 : 0);
  }
}
