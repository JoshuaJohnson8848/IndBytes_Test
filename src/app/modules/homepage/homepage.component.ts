import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  worldData: any = [];
  constructor(
    private _apiService: ServicesService,
    private _httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.fetchResult();
  }

  fetchResult() {
    this._httpClient
      .get<any>('https://restcountries.com/v2/all?fields=name,region,flag')
      .subscribe((result: any) => {
        return (this.worldData = result);
      });
  }
}
