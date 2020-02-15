import { Component, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'weather-panel',
  templateUrl: './weatherPanel.html'
})
export class WeatherPanelComponent {
  @Input() city = '';

  hourly: Observable<any[]>;
  currently: Observable<any>;

  constructor(private afDb: AngularFireDatabase) {
    this.hourly = this.afDb
      .list(this.city + '/hourly/data', ref => ref.limitToLast(10))
      .valueChanges();

    this.currently = this.afDb
      .object(this.city + '/currently')
      .valueChanges();
  }
}
