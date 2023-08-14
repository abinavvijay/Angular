import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ScriptService } from './scripts.service';
import { VizCreateOptions } from './vizCreateOptions';

declare var tableau: any;

declare global {
  interface Window {
    tableau?: any;
  }
}


export interface Viz {
  dispose():any;
  show():any;
  hide():any;
  pauseAutomaticUpdatesAsync():any;
  resumeAutomaticUpdatesAsync():any;
  toggleAutomaticUpdatesAsync():any;
  revertAllAsync():any;
  refreshDataAsync():any;
  showDownloadDialog():any;
  showDownloadWorkbookDialog():any;
  showExportImageDialog():any;
  showExportPDFDialog():any;
}

@Component({
  selector: 'iv-tableau',
  template: `
    
      <div class="ngx-tableau-viz" id="tableauViz{{id}}">

    <div>
  `,
  styles: [
    `
    /* .dashboard_widgets:nth-child(odd) {
      padding-right: 10px;
      width:calc(100%)
    }
    .ngx-tableau-viz-border:nth-child(even) {
      padding-left: 10px;
      width:calc(100%);
      float:right
    } */
  
      .ngx-tableau-viz {
        width:inherit;
        z-index: 1;
        height: calc(100vh - 20px);
        background-color:white;
        padding-top:10px;
        
       


      }
    `,
  ],
})
export class TableauComponent implements OnInit, OnDestroy {
  scriptService;
  tableauViz!: Viz;
  @Output() loaded = new EventEmitter();
  @Input() tableauVizUrl!: string;

  @Input() serverUrl!: string;

  @Input() ticket!: string;

  @Input() site!: string;

  @Input() report!: string;

  @Input() filters!: object;

  @Input() options!: VizCreateOptions;

  @Input() id!:number

  constructor(scriptService: ScriptService) {
    this.scriptService = scriptService;
  }

  ngOnInit() {
    this.scriptService
      .load('tableau')
      .then(data => {
        console.log('Tableau API successful loaded', data);
        this.renderTableauViz();
        this.loaded.emit(data);
      })
      .catch(error => console.error('Tableau API not loaded', error));
  }

  /**
   * Render a Tableau visualization, generating Tableau URL and using Tableau JS API to show vizualization
   */
  renderTableauViz() {
    const placeholderDiv = document.getElementById('tableauViz'+this.id);
    const options = {
      ...this.options,
      ...this.filters,
    };
    if (this.checkRequiredInputs()) {
      // Usage of Tableau JS API to show visualization
      this.tableauViz = new tableau.Viz(
        placeholderDiv,
        this.tableauVizUrl,
        options
      ) as Viz;
    }
  }

  /**
   * Check if all required inputs for embedding a Tableau visualization are set
   * @returns true if all required inputs are set, false otherwise
   */
  checkRequiredInputs(): boolean {
    if (!this.tableauVizUrl) {
      return this.createUrlFromInputs();
    } else {
      console.log(`Using Tableau visualization URL: ${this.tableauVizUrl}`);
    }

    return true;
  }

  multisiteUrlOrNot() {
    if (this.site) {
      return `/t/${this.site}/views/${this.report}`;
    } else {
      return `/views/${this.report}`;
    }
  }

  createUrlFromInputs() {
    if (this.ticket && this.serverUrl && this.report) {
      const endOfUrl = this.multisiteUrlOrNot();

      this.tableauVizUrl = `${this.serverUrl}/trusted/${
        this.ticket
      }${endOfUrl}`;
      console.log(
        `Using Tableau visualization URL for private site: ${
          this.tableauVizUrl
        }`
      );
      return true;
    } else if (this.serverUrl && this.report) {
      const endOfUrl = this.multisiteUrlOrNot();
      
      this.tableauVizUrl = `${this.serverUrl}${endOfUrl}`;
      console.log(
        `Using Tableau visualization URL for public site: ${this.tableauVizUrl}`
      );
      return true;
    } else {
      console.error(
        'One or both of the following parameters are missing: serverUrl or report'
      );
      return false;
    }
  }

  ngOnDestroy() {
   let vizs= window.tableau.VizManager.getVizs();

   for(let i=0;i<vizs.length;i++)
    vizs[0].dispose();
    // Dispose tableauViz to avoid memory leaks when component is destroyed
    if (this.tableauViz) {
      console.log(this.tableauViz);
//      this.tableauViz.dispose();
      


    //  document.getElementById('tableauViz')!.innerHTML="";
    }
  }
}
