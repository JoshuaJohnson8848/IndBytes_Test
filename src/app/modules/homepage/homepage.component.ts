import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  filterValue: any;
  active: any;
  worldData: any = [];
  constructor(private _httpClient: HttpClient) {}

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

  filter(value: string, event: any) {
    this.filterValue = event.target.textContent;
    this.active = value;
  }
}
