import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {
  AnnouncementComponent,
  AnnouncementComponentTagsDirective
} from './announcement';
import {
  CollectionPanelComponent,
  CollectionPanelComponentTagsDirective
} from './collection-panel';
import { NewsComponent } from './news';

@NgModule({
  declarations: [
    NewsComponent,
    CollectionPanelComponent,
    CollectionPanelComponentTagsDirective,
    AnnouncementComponent,
    AnnouncementComponentTagsDirective
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [NewsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
