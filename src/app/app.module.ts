import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';

import { ActivityPanelComponent } from './activityPanel';
import { ExampleComponent } from './example';
import { OnePersonComponent } from './onePerson';
import { PersonListComponent } from './personList';

export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>',

  databaseURL: 'https://a2-fb-demo.firebaseio.com/'
};

@NgModule({
  declarations: [
    ExampleComponent,
    ActivityPanelComponent,
    PersonListComponent,
    OnePersonComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [ExampleComponent]
})
export class AppModule {}
