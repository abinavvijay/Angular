import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { HttpService } from '../../services/http.service';
import { SearchService } from '../../services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from '../../services/storage.service';
import { SpinnerService } from '../../services/spinner.service';
import { SavedSearchService } from '../../services/saved-search.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[StorageService,MenuService, HttpService, SearchService, SpinnerService, SavedSearchService]
})
export class ServicesModule { }
