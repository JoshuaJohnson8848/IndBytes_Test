import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private _httpClient: HttpClient) {}

  getResult() {
    this._httpClient
      .get<any>('https://restcountries.com/v2/all?fields=name,region,flag')
      .subscribe((result: any) => {
        console.log(result);

        return result;
      });
  }
}
