import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selectValue: string): any[] {
    let filteredData: any[] = [];

    if (!value || selectValue?.trim() == 'All' || !selectValue) {
      return value;
    } else if (selectValue?.trim() == 'Asia') {
      value.forEach((data: any) => {
        if (data.region == 'Asia') {
          filteredData.push(data);
        }
      });
    } else if (selectValue?.trim() == 'Europe') {
      value.forEach((data) => {
        if (data.region == 'Europe') {
          filteredData.push(data);
        }
      });
    }

    return filteredData;
  }
}
