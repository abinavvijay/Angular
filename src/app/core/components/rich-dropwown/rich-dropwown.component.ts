import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'iv-rich-dropwown',
  templateUrl: './rich-dropwown.component.html',
  styleUrls: ['./rich-dropwown.component.css']
})
export class RichDropwownComponent implements OnInit {
  private _selectedOptions!: Array<string>

  @Input()
  datasource: Array<any> = [];

  @Input()
  label: string = "Some Good Title";

  @Input()
  displayText: string = "text";

  @Input()
  value: string = "val"

  @Input()
  selectionLabel: string = "Some Text"

  @Input()
  selectionTextPrefix: string = "All"

  @Input()
  set selectedOptions(val: Array<string>) {

    console.log(val);
    this._selectedOptions = val || [];

  };

  get selectedOptions() {
    return this._selectedOptions;
  }

  @Output() selectedOptionsChange: EventEmitter<{ id: any, value: Array<string> }> = new EventEmitter<{ id: any, value: Array<string> }>();





  state: number = 0;
  toggleChips: boolean = false;
  toggleOptions: boolean = false;
  constructor() { }

  onselectionChange(val: string, ele: Event) {
    if ((<any>ele?.target).checked) {
      if (this._selectedOptions.findIndex(v => v == val) == -1)
        this._selectedOptions.push(val);

    } else {
      this._selectedOptions = this._selectedOptions.filter(t => t != val);
    }

    this.selectionTextPrefix = this._selectedOptions.filter(t => t != 'All').length > 0 ? this._selectedOptions.length.toString() : "All";

    

  }

  onOK(){
    this.selectedOptionsChange.emit({ id: this.selectionLabel, value: this._selectedOptions });
    this.ontoggle('options');
  }

  ontoggle(type: any) {
    console.log(type)
    if (type == 'options') {
      this.state = this.state != 1 ? 1 : 0
    }
    if (type == 'chips') {
      this.state = this.state != 2 ? 2 : 0
    }
  }

  checkIfSelected(val:string){
    return this.selectedOptions.findIndex(v=>v==val)!=-1;
  }

  ngOnInit(): void {
  }

}
