import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'person-list',
  template: `
    <h4>Person List</h4>
    <ul>
      <li *ngFor="let p of people | async">
        {{ p['$key'] }} / {{ p.name }} / {{ p.score }}
      </li>
    </ul>
  `
})
export class PersonListComponent {
  people: Observable<any[]>;

  constructor(afDb: AngularFireDatabase) {
    this.people = afDb
      .list('stuff/cat1', ref =>
        ref.orderByChild('name').limitToFirst(10)
      )
      .valueChanges()
      .pipe(debounceTime(100));
  }
}
