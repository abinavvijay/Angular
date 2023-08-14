import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private remoteService: HttpService, private storageService: StorageService, private http:HttpClient) { }

  private searchStoreKey: string = "search";
  public cuid : string= ''
  private pageSize: number = 10;
  private filter: string = "";
  private  top: number = 5;
  widgets: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
  widgets1: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
  baseURL: string = environment.config.apiUrl;

  createSearch(data: any): Observable<any> {

    return this
      .remoteService
      .post(data, this.baseURL + "api/Search")
      .pipe(map(response => {
        if (response.isSuccess) {

          this.storageService.store(this.searchStoreKey, response.data);

        }
        return response;
      }));

  }

  SaveSearch(data: any): Observable<any> {

    return this
      .remoteService
      .post(data, this.baseURL + "api/Search/save")
      .pipe(map(response => {
        if (response.isSuccess) {
          this.storageService.store(this.searchStoreKey, response.data);
        }
        return response;
      }));

  }

  retriveSearch(id: string, mode: string, filters?: string, sort?: any, offset: number = 0, appendToPreviousResult: boolean = false): Observable<any> {
    this.cuid = id
    
    sort = sort ? sort : "";
    var searchStore = this.storageService.fetch("search");
    if (searchStore && searchStore[id]) {
      return of(searchStore);
    }
    return this
      .remoteService
      .get<any>(this.baseURL + "api/search/result/" + mode + "/" + id + "/" + offset + "?filters=" + this.formatFilters(filters) + "&sort=" + sort)
      .pipe(map(response => {
        if (response.isSuccess && response.data.items.length > 0) {
          if (!appendToPreviousResult) {
            this.storageService.store(this.searchStoreKey, response);
          }
          else {
            let local = this.storageService.fetch(this.searchStoreKey);
            response.data.items = local.data.items.concat(response.data.items);
            this.storageService.store(this.searchStoreKey, response);
          }
        }
        return response;
      }));
  }

  retriveSavedSearchs(): Observable<any> {
    var searchStore = this.storageService.fetch("savedsearch");
    if (searchStore) {
      return of(searchStore);
    }
    return this
      .remoteService
      .get<any>(this.baseURL + "api/search/saved/Searches")
      .pipe(map(response => {
        if (response.isSuccess && response.data.length > 0) {
          this.storageService.store(this.searchStoreKey, response.data);
        }
        return response;
      }));
  }

  retriveToken() {
    this.remoteService.tableauToken(this.baseURL + "api/Search/tableau-token").subscribe((t: any) => {
      this.widgets.next(t.data);
    })
  }
  
  
  retriveToken1() {
    this.remoteService.tableauToken1(this.baseURL +"api/search/tableau-token-7").subscribe((t: any) => {
      this.widgets1.next(t.data);
    })
  }

  formatFilters(filters: any) {
    let filterStr: Array<string> = [];
    if (filters) {
      for (let iterator of Object.keys(filters)) {
        if (filters[iterator].length > 0)
          filterStr.push(iterator + ":" + filters[iterator].join(","));
      }
    }
    return filterStr.join("|");
  }

  retrieveMoreSearchData(currentPage: number, id: string, mode: string, filters?: string, sort?: any): Observable<any> {


    let local = this.storageService.fetch(this.searchStoreKey);
    let availablePages = Math.ceil(local.data.items.length / 10);

    if ((availablePages - currentPage <= 10) && local.data.query.totalRecords > local.data.items.length) {

      return this.retriveSearch(id, mode, filters, sort, local.data.items.length, true)

    }
    return of(undefined);
  }

  download(url: string): Observable<Blob> {

    return this.remoteService.download(environment.config.download + url);

  }

downloadTop5(id : any ): Observable<Blob>{
  // console.log(id, "abi")
  return this.remoteService.download(environment.config.download + `download/reach/{user_search_identifier,top_n}?user_search_identifier=${id}&top_n=${this.top}`)
}

}






