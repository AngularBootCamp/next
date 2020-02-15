// This component displays a single entry from Firebase on the screen.

import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'one-person',
  template: `
    <strong>Person {{ id }}:</strong>
    <p>{{ person | async | json }}</p>
    <p>{{ (person | async)?.name }}</p>
  `
})
export class OnePersonComponent implements OnInit {
  @Input() id = '';
  person: Observable<any> | undefined;

  constructor(private afDb: AngularFireDatabase) {}

  ngOnInit() {
    this.person = this.afDb
      .object('/stuff/cat1/' + this.id)
      .valueChanges();
  }
}
