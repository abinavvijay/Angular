import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'iv-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  _currentMenu: string = "";

  @Output() currentMenuChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() set currentMenu(value: any) {
    console.log(value)
    this.currentSelectedMenu = this._currentMenu = value;
    this.menuService.setSelected(this.menuIndex, this.currentSelectedMenu);
  }

  @Output() clickEvent: EventEmitter<any> = new EventEmitter();
  @Input()
  menuIndex: string = "";
  menuItems: Array<any> = [];
  currentSelectedMenu: string = "";
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenu(this.menuIndex);
    this
      .menuService
      .selectedMenu
      .subscribe(t => this.currentSelectedMenu = t[this.menuIndex])
  }

  changeMenu(item: string) {
    this.menuService.setSelected(this.menuIndex, item)
    this.clickEvent.next(item);
    this.currentMenuChange.emit(item);
  }

}
