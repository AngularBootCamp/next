import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

const apiUrl = 'https://api.angularbootcamp.com';

export interface Employee {
  first_name: string;
  last_name: string;
  hours_worked: number;
  hourly_wage: number;
}

export interface TableOptions {
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  filter: string;
}

// Convert any possible value to 'desc' or 'asc'
function convertToAscOrDesc(dir: unknown) {
  return dir === 'desc' ? 'desc' : 'asc';
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Observable<Employee[]>;
  tableOptions: Observable<TableOptions>;

  constructor(route: ActivatedRoute, http: HttpClient) {
    this.tableOptions = route.queryParamMap.pipe(
      map(params => {
        return {
          sortBy: params.get('sortBy') || '',
          sortDirection: convertToAscOrDesc(
            params.get('sortDirection')
          ),
          filter: params.get('filter') || ''
        };
      })
    );

    this.employees = this.tableOptions.pipe(
      switchMap(options => {
        let params = new HttpParams()
          .set('_sort', options.sortBy)
          .set('_order', options.sortDirection);

        if (options.filter) {
          params = params.set('q', options.filter);
        }

        return http.get<Employee[]>(apiUrl + '/employees', {
          params
        });
      }),
      shareReplay(1)
    );
  }
}
