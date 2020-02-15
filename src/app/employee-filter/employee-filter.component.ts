import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { TableOptions } from '../employees.service';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.css']
})
export class EmployeeFilterComponent implements OnDestroy {
  @Input() set options(val: TableOptions) {
    if (val) {
      this.filter.setValue(val.filter);
    }
  }

  private controlSub: Subscription;
  filter = new FormControl();

  constructor(private router: Router) {
    this.controlSub = this.filter.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(searchTerm => {
        // If filter is an empty string, replace with undefined
        // This avoids having an empty key-value pair in the URL
        const filter = searchTerm || undefined;
        const queryParams = { filter };
        // Navigate returns a promise, best practices dictate that you should always handle them
        // We are intentionally choosing not to so we are casting it to a void to pass lint
        void this.router.navigate([], {
          queryParams,
          queryParamsHandling: 'merge'
        });
      });
  }

  ngOnDestroy() {
    this.controlSub.unsubscribe();
  }
}
