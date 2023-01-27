import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectTestService {
  userName = new Subject<any>();
  constructor() {}
}
