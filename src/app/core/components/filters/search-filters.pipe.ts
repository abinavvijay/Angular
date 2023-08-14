import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'searchFilters'
})
export class SearchFiltersPipe implements PipeTransform {

  transform(value: any, ...args: any[]): Array<any> {
    let selectedFilters = args[0];
    let clone: Array<any> = [];// = Object.assign({},value);
    let keys = Object.keys(selectedFilters);
    let ifProcessed = false;
    for (let i = 0; i < keys.length; i++) {
      for (var k = 0; k < selectedFilters[keys[i]].length; k++) {
        clone = clone.concat((value.data.items as Array<any>).filter(t => t[keys[i]] == selectedFilters[keys[i]][k]));
        ifProcessed = true;
      }

    }
    if (ifProcessed)
      value.data.items = clone;
    return value;
  }

}


@Pipe({
  name: 'thousandSuff'
})
export class ThousandSuffixesPipe implements PipeTransform {

  transform(input: any, args?: any): any {
    var exp, rounded,
      suffixes = ['k', 'M', 'B', 'T', 'P', 'E'],
      suffixes_1 = ['Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion'];

    if (Number.isNaN(input)) {
      return null;
    }

    if (input < 1000) {
      return input;
    }

    exp = Math.floor(Math.log(input) / Math.log(1000));

    if (args == "long")
      return (input / Math.pow(1000, exp)).toFixed(args) + " " + suffixes_1[exp - 1];

    return (input / Math.pow(1000, exp)).toFixed(args) + " " + suffixes[exp - 1];


  }

}


@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  /**
   * Pipe Constructor
   *
   * @param _sanitizer: DomSanitezer
   */
  // tslint:disable-next-line
  constructor(protected _sanitizer: DomSanitizer) {
  }

  /**
   * Transform
   *
   * @param value: string
   * @param type: string
   */
  transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html':
        return this._sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this._sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this._sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this._sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this._sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        return this._sanitizer.bypassSecurityTrustHtml(value);
    }
  }
}


@Pipe({
  name: 'arrToCSV'
})
export class ArrayToCSVPipe implements PipeTransform {
  /**
   * Pipe Constructor
   *
   * @param _sanitizer: DomSanitezer
   */
  // tslint:disable-next-line
  constructor() {
  }

  /**
   * Transform
   *
   * @param value: string
   * @param type: string
   */
  transform(value: string | Array<any>, type: string, top: number): string | number {
    let arr: Array<any> = typeof (value) === 'string' ?
      value.split("'").join('').split('[').join('').split(']').join("").split(',') : value;
    console.log(type, top);
    if (type.toLowerCase() === 'csv') {
      return arr.splice(0, top).join(",");
    }
    if (type.toLowerCase() === 'count') {
      return arr.length;
    }
    return -1;
  }
}