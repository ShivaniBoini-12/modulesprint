import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCenter'
})
export class FilterCenterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] 
  {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => 
      {
      return it.centerName.toLowerCase().includes(searchText);
      }
      );
   }

}
