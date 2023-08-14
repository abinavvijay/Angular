import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class MenuService {


  selectedMenu:BehaviorSubject<any> = new BehaviorSubject({main:"Home", search:"All Result"})

  private menuData:any={
    main:[
          {title:"Home", route:"/home", isSelected:false},
          {title:"Search", route:"/search", isSelected:false},
          {title:"Dashboard", route:"/dashboard", isSelected:false},
          {title:"Newsletter", route:"/newsletter", isSelected:false},
          {title:"Settings", route:"/settings", isSelected:false}
    ],
    search:[
      {title:"All Results", isSelected:false},
      {title:"Dashboard View", isSelected:false},
      {title:"Create New Dashboard", isSelected:false},
      {title:"Create Newsletter", isSelected:false},

    ]
  }

  constructor() { }

    getMenu(menuIdentifier:string):Array<any>{
      return this.menuData[menuIdentifier];
    }

    setSelected(menuIdentifer: string, menuItem:string){
      let selectedMenu =this.selectedMenu.value;
      selectedMenu[menuIdentifer]=menuItem;
      this.selectedMenu.next(selectedMenu);
    }

}
