import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrim'
})
export class TextTrimPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    return value.length > args[0] ? value.slice(0, args[0] - 1) : value;
  }
  

}
