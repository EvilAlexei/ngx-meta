import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadersListService {
  headersList: Subject<[]>;

  constructor() {
    this.headersList = new Subject();
  }

  getHeaders(element) {
    const str = element.querySelectorAll('h3[id], h4[id]');

    this.headersList.next(str);
  }
}
