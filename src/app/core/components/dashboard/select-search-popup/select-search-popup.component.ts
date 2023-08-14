import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { SavedSearchService } from 'src/app/core/services/saved-search.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'iv-select-search-popup',
  templateUrl: './select-search-popup.component.html',
  styleUrls: ['./select-search-popup.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SelectSearchPopupComponent implements OnInit {


  savedSearch: any[] = [];

  userSearchId: any

  userName: any;

  public searchText: any ='';

  constructor(private savedSearchService: SavedSearchService,
              private authService: AuthService,
              private diaLogRef: MatDialogRef<SelectSearchPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {

    this.authService.UserSession.subscribe(session => {
      this.userName= session.fullName
      console.log("Name:",this.userName);

    })

    this.savedSearchService.getSavedSearch().subscribe(
      (savedSearch_Response: any)=>{
        console.log(savedSearch_Response);

        this.savedSearch = savedSearch_Response.saved_search.filter( (items: any) => {
          // return Object.values(items).every(value => value !== "")
          return items.savedas;
        });

        console.log(this.savedSearch);

      },
      (err: any) =>{
        alert( "NO saved Searches are available")
      }
    )
  }

  onClickSavedSearch(id: any,){
      this.diaLogRef.close(id);

  }

}
