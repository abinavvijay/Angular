import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PagesRoutingModule } from './pages-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SearchComponent,IndexComponent,HomeComponent} from '@iv/pages';
import { ComponentsModule } from '@iv/modules';
import { WipComponent } from '../../pages/wip/wip.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../../pages/login/login.component';
import { SignupComponent } from '../../pages/login/signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
// Newsletters
import { NewsletterCreatenewComponent } from '../../pages/newsletters/newsletter-main/newsletter-createnew/newsletter-createnew.component';
import { NewsletterMainComponent } from '../../pages/newsletters/newsletter-main/newsletter-main.component';

// Settings Page
// import { SettingsComponent } from '../../pages/settings/settings.component';

import { MatMenuModule } from '@angular/material/menu';
import { NewlettersTitleComponent } from '../../components/newsletters/newletters-title/newletters-title.component';
@NgModule({
  declarations: [
    SearchComponent,
    HomeComponent,
    IndexComponent,
    WipComponent,
    LoginComponent,
    SignupComponent,
    NewsletterCreatenewComponent,
    NewsletterMainComponent,
    // SettingsComponent
    // NewlettersTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ComponentsModule,
BrowserAnimationsModule,
MatDialogModule,
ReactiveFormsModule,
MatTabsModule,
MatMenuModule,
FormsModule
  ],
  exports :[
    SearchComponent,
    HomeComponent,
    IndexComponent,
    // SettingsComponent,
    NewsletterCreatenewComponent,
    NewsletterMainComponent

  ]
})
export class PagesModule { }
