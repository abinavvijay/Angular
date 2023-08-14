import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'savedSearchFilter'
})
export class SavedSearchFilterPipe implements PipeTransform {

  transform(items: any, searchText?: any): any {

    if(!items) return null;
    if(!searchText)return items;

    searchText = searchText.toLowerCase();

    return  items.filter(function(item: any){
      return JSON.stringify(item).toLowerCase().includes(searchText)
    })
  }

}
