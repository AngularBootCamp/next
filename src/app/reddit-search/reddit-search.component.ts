import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
// tslint:disable:no-submodule-imports
// tslint:disable:ordered-imports
// add the various operators
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

import {
  RedditImageSearchService,
  RedditResult
} from './reddit-image-search.service';

@Component({
  selector: 'reddit-search',
  templateUrl: './reddit-search.component.html'
})
export class RedditSearchComponent {
  subReddit = new FormControl('aww');
  search = new FormControl('');
  results: Observable<RedditResult[]>;

  constructor(ris: RedditImageSearchService) {
    const validSubReddit$ = this.subReddit.valueChanges
      .startWith(this.subReddit.value)
      .map(sr => sr.trim())
      .distinctUntilChanged()
      .filter(sr => sr !== '');

    const validSearch$ = this.search.valueChanges
      .startWith(this.search.value)
      .map(search => search.trim())
      .distinctUntilChanged()
      .filter(search => search !== '');

    const combinedCriteria$ = Observable.combineLatest([
      validSubReddit$,
      validSearch$
    ]).map(([subReddit, search]) => ({ subReddit, search }));

    this.results = combinedCriteria$
      .do(x => console.log('change', x))
      .debounceTime(500)
      .do(x => console.log('after debounce', x))
      .switchMap(val =>
        Observable.merge(
          // Initially, show no results, while waiting.
          Observable.of([]),
          // Replace with results as they arrive, auto retry.
          ris.search(val.subReddit, val.search).retry(3)
        )
      );
  }
}
