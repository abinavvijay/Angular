import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateValue'
})
export class DateValuePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('T')[0];
  }

}