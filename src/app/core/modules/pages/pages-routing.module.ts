import { DashboardPageComponent } from './../../components/dashboard/dashboard-page/dashboard-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, SearchComponent, WipComponent } from '@iv/pages';
import { LoginComponent } from '../../pages/login/login.component';
import { SignupComponent } from '../../pages/login/signup/signup.component';
// import { AuthGuardService } from '../../pages/login/auth.guard';
import { NewsletterCreatenewComponent } from '../../pages/newsletters/newsletter-main/newsletter-createnew/newsletter-createnew.component';
import { NewsletterMainComponent } from '../../pages/newsletters/newsletter-main/newsletter-main.component';
import { SettingsMyaccountComponent } from '../../components/settings/settings-myaccount/settings-myaccount.component';
import { SettingsComponent } from './../../pages/settings/settings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent ,  },
  { path: 'search', component: SearchComponent,  },
  { path: 'search/for/:mode/:id', component: SearchComponent, },
  { path: 'dashboard', component: DashboardPageComponent,  },
  { path: 'newsletter', component: NewsletterMainComponent,  },
  { path: 'settings', component: WipComponent,   },
  {path: "newsletter/createnew", component: NewsletterCreatenewComponent, },

  {
    path: '',
    redirectTo: "login",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
