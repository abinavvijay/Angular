import { DashboardTitlePageComponent } from './../../components/dashboard/dashboard-title-page/dashboard-title-page.component';
import { SettingsMyaccountComponent } from './../../components/settings/settings-myaccount/settings-myaccount.component';
import { SettingsThemesComponent } from './../../components/settings/settings-themes/settings-themes.component';
import { SettingsTagsComponent } from './../../components/settings/settings-tags/settings-tags.component';
import { SettingsNotificationsComponent } from './../../components/settings/settings-notifications/settings-notifications.component';
import { SettingsManageruserComponent } from './../../components/settings/settings-manageruser/settings-manageruser.component';
import { NewsletterCreatenewComponent } from '../../pages/newsletters/newsletter-main/newsletter-createnew/newsletter-createnew.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceDashboardComponent } from '../../components/dashboard/advance-dashboard/advance-dashboard.component';
import { AuthorAdvanceDashboardComponent } from '../../components/dashboard/author-advance-dashboard/author-advance-dashboard.component';
import { BrandDashboardComponent } from '../../components/dashboard/brand-dashboard/brand-dashboard.component';
import { CompetitiveDashboardComponent } from '../../components/dashboard/competitive-dashboard/competitive-dashboard.component';
import { CustomDashboardComponent } from '../../components/dashboard/custom-dashboard/custom-dashboard.component';
import { IndustryDashboardComponent } from '../../components/dashboard/industry-dashboard/industry-dashboard.component';
import { PeopleDashboardComponent } from '../../components/dashboard/people-dashboard/people-dashboard.component';
// import { AuthGuardService } from '../../pages/login/auth.guard';

const routes: Routes = [

  {path: 'new-dasboard/brand-dashboard', component:DashboardTitlePageComponent, },
  {path: 'new-dasboard/industry-dashboard', component:IndustryDashboardComponent, },
  {path: 'new-dasboard/people-dashboard', component:PeopleDashboardComponent, },
  {path: 'new-dasboard/competitive-dashboard', component:CompetitiveDashboardComponent,  },
  {path: 'new-dasboard/custom-dashboard', component:CustomDashboardComponent,  },
  {path: 'new-dasboard/advanced-dashboard', component: AdvanceDashboardComponent,  },
  {path: 'new-dasboard/author-dashboard', component: AuthorAdvanceDashboardComponent,  },
  {path: "newsletter/createnew", component: NewsletterCreatenewComponent,  },
  {path: 'manage-users', component: SettingsManageruserComponent,  },
   {path: 'setting-notifications', component: SettingsNotificationsComponent,  },
   {path: 'setting-tags', component: SettingsTagsComponent,  },
   {path: 'setting-themes', component: SettingsThemesComponent,  },

  // {path: 'new-dasboard/brand-dashboard', component:DashboardTitlePageComponent},
  // {path: 'new-dasboard/competitive-dashboard', component:CompetitiveDashboardComponent},
  // {path: 'new-dasboard/custom-dashboard', component:CustomDashboardComponent},
  // {path: 'new-dasboard/advanced-dashboard', component: AdvanceDashboardComponent},
  // {path: 'new-dasboard/author-dashboard', component: AuthorAdvanceDashboardComponent},
  // {path: "newsletter/createnew", component: NewsletterCreatenewComponent},
  // {path: 'manage-users', component: SettingsManageruserComponent},
  //  {path: 'setting-notifications', component: SettingsNotificationsComponent},
  //  {path: 'setting-tags', component: SettingsTagsComponent},
  //  {path: 'setting-themes', component: SettingsThemesComponent},
  //  {path: 'setting-myaccount', component: SettingsMyaccountComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
