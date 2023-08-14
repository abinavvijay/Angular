import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { QuickSearchComponent } from '../../components/search/quick-search/quick-search.component';
import { PagingComponent } from '../../components/search/paging/paging.component';
import { SearchBlockComponent } from '../../components/search/search-block/search-block.component';
import { GraphComponent } from '../../components/search/graph/graph.component';
import { SearchSummaryComponent } from '../../components/search/search-summary/search-summary.component';
import { MenuComponent } from '../../components/menu/menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import { RichDropwownComponent } from '../../components/rich-dropwown/rich-dropwown.component';
import { ResultFigureComponent } from '../../components/result-figure/result-figure.component';
import { SearhGraphComponent } from '../../components/searh-graph/searh-graph.component';
import { NgChartsModule } from 'ng2-charts';
import { SearhResultBarComponent } from '../../components/searh-result-bar/searh-result-bar.component';
import { SearhResultComponent } from '../../components/searh-result/searh-result.component';
import { PagerComponent } from '../../components/pager/pager.component';
import { SearchItemComponent } from '../../components/search-item/search-item.component';
import { SearchItemCollectionComponent } from '../../components/search-item-collection/search-item-collection.component';
import { TextTrimPipe } from '../../components/filters/text-trim.pipe';
import { DateValuePipe } from '../../components/filters/date-value.pipe';
import { SavedSearchFilterPipe } from '../../components/filters/saved-search-filter.pipe';
import { ArrayToCSVPipe, SafePipe, SearchFiltersPipe, ThousandSuffixesPipe } from '../../components/filters/search-filters.pipe';
import { SaveSearchComponent } from '../../components/save-search/save-search.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SavedSearchListComponent } from '../../components/saved-search-list/saved-search-list.component';
import { TimeLineComponent } from '../../components/time-line/time-line.component';
import {MatSelectModule} from '@angular/material/select';
import { UserNotificationsComponent } from '../../components/notification/user-notifications/user-notifications.component';
import { TableauModule } from '../../components/tableau/tableau.module';
import { Top5Component } from '../../components/top5/top5.component';

// Dashboards
import { AdvanceDashboardComponent } from '../../components/dashboard/advance-dashboard/advance-dashboard.component';
import { AuthorAdvanceDashboardComponent } from '../../components/dashboard/author-advance-dashboard/author-advance-dashboard.component';
import { BrandDashboardComponent } from '../../components/dashboard/brand-dashboard/brand-dashboard.component';
import { ChipsComponent } from '../../components/dashboard/chips/chips.component';
import { CompetitiveDashboardComponent } from '../../components/dashboard/competitive-dashboard/competitive-dashboard.component';
import { CustomDashboardComponent } from '../../components/dashboard/custom-dashboard/custom-dashboard.component';
import { DashboardGraphsComponent } from '../../components/dashboard/dashboard-graphs/dashboard-graphs.component';
import { DashboardMainComponent } from '../../components/dashboard/dashboard-main/dashboard-main.component';
import { DashboardPageComponent } from '../../components/dashboard/dashboard-page/dashboard-page.component';
import { DashboardSidebarComponent } from '../../components/dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardSidebar2Component } from '../../components/dashboard/dashboard-sidebar2/dashboard-sidebar2.component';
import { DashboardTitlePageComponent } from '../../components/dashboard/dashboard-title-page/dashboard-title-page.component';
import { DashboardWidgetsPopupComponent } from '../../components/dashboard/dashboard-widgets-popup/dashboard-widgets-popup.component';
import { SelectSearchPopupComponent } from '../../components/dashboard/select-search-popup/select-search-popup.component';
import { IndustryDashboardComponent } from '../../components/dashboard/industry-dashboard/industry-dashboard.component';
// Settings
import { SettingsManageruserComponent } from '../../components/settings/settings-manageruser/settings-manageruser.component';
import { SettingsMyaccountComponent } from '../../components/settings/settings-myaccount/settings-myaccount.component';
import { SettingsNotificationsComponent } from '../../components/settings/settings-notifications/settings-notifications.component';
import { SettingsSidebarComponent } from '../../components/settings/settings-sidebar/settings-sidebar.component';
import { SettingsTagsComponent } from '../../components/settings/settings-tags/settings-tags.component';
import { SettingsThemesComponent } from '../../components/settings/settings-themes/settings-themes.component';
import { SettingtagsAddnewComponent } from '../../components/settings/settings-tags/settingtags-addnew/settingtags-addnew.component';
import { SettingthemesAddnewComponent } from '../../components/settings/settings-themes/settingthemes-addnew/settingthemes-addnew.component';
import { AdduserPopupComponent } from '../../components/settings/settings-manageruser/adduser-popup/adduser-popup.component';
import { DeleteuserPopupComponent } from '../../components/settings/settings-manageruser/deleteuser-popup/deleteuser-popup.component';
import { EditPopupComponent } from '../../components/settings/settings-myaccount/edit-popup/edit-popup.component';
import { ChangepasswordPopupComponent } from '../../components/settings/settings-myaccount/changepassword-popup/changepassword-popup.component';
import { EdituserPopupComponent } from '../../components/settings/settings-manageruser/edituser-popup/edituser-popup.component';
import { UserProfileComponent } from '../../components/settings/settings-myaccount/user-profile/user-profile.component';
import { UserSubscripitionComponent } from '../../components/settings/settings-myaccount/user-subscripition/user-subscripition.component';
import { SettingsComponent } from '../../pages/settings/settings.component';
// Additional Modules
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCommonModule } from '@angular/material/core';

import { NewlettersTitleComponent } from '../../components/newsletters/newletters-title/newletters-title.component';
import { NewsArticlesComponent } from '../../components/newsletters/news-articles/news-articles.component';
import { NewsletterDatePickerComponent } from '../../components/newsletters/newsletter-date-picker/newsletter-date-picker.component';
import { PeopleDashboardComponent } from '../../components/dashboard/people-dashboard/people-dashboard.component';

import { SaveNewsLetterComponent } from '../../components/newsletters/save-news-letter/save-news-letter.component';
import { RecipientsInputComponent } from '../../components/newsletters/recipients-input/recipients-input.component';

@NgModule({
  declarations: [
    QuickSearchComponent,
    PagingComponent,
    SearchBlockComponent,
    GraphComponent,
    SearchSummaryComponent,
    MenuComponent,
    SearchBarComponent,
    RichDropwownComponent,
    ResultFigureComponent,
    SearhGraphComponent,
    SearhResultBarComponent,
    SearhResultComponent,
    PagerComponent,
    SearchItemComponent,
    SearchItemCollectionComponent,
    TextTrimPipe,
    DateValuePipe,
    SearchFiltersPipe,
    SavedSearchFilterPipe,
    SaveSearchComponent,
    SavedSearchListComponent,
    ThousandSuffixesPipe,
    SafePipe,
    ArrayToCSVPipe,
    TimeLineComponent,
    UserNotificationsComponent,
    Top5Component,
    // Dashboard
    AdvanceDashboardComponent,
    AuthorAdvanceDashboardComponent,
    BrandDashboardComponent,
    ChipsComponent,
    CompetitiveDashboardComponent,
    CustomDashboardComponent,
    DashboardGraphsComponent,
    DashboardMainComponent,
    DashboardPageComponent,
    DashboardSidebarComponent,
    DashboardSidebar2Component,
    DashboardTitlePageComponent,
    DashboardWidgetsPopupComponent,
    SelectSearchPopupComponent,
    IndustryDashboardComponent,
    PeopleDashboardComponent,
    // Settings
    SettingsManageruserComponent,
    SettingsMyaccountComponent,
    SettingsNotificationsComponent,
    SettingsSidebarComponent,
    SettingsTagsComponent,
    SettingsThemesComponent,
    SettingtagsAddnewComponent,
    SettingthemesAddnewComponent,
    AdduserPopupComponent,
    DeleteuserPopupComponent,
    EdituserPopupComponent,
    ChangepasswordPopupComponent,
    EditPopupComponent,
    UserProfileComponent,
    UserSubscripitionComponent,
    SettingsComponent,
    NewlettersTitleComponent,
    NewsArticlesComponent,
    NewsletterDatePickerComponent,
    SaveNewsLetterComponent,
    RecipientsInputComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatButtonModule,
    MatMenuModule,
    NgChartsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    TableauModule,
    MatBottomSheetModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSliderModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCommonModule
  ],
  exports:[
    QuickSearchComponent,
    PagingComponent,
    SearchBlockComponent,
    GraphComponent,
    SearchSummaryComponent,
    MenuComponent,
    SearchBarComponent,
    RichDropwownComponent,
    ResultFigureComponent,
    SearhGraphComponent,
    SearhResultBarComponent,
    SearhResultComponent,
    PagerComponent,
    SearchItemComponent,
    SearchItemCollectionComponent,
    SearchFiltersPipe,
    SavedSearchFilterPipe,
    SaveSearchComponent,
    SavedSearchListComponent,
    ThousandSuffixesPipe,
    SafePipe,
    ArrayToCSVPipe,
    TimeLineComponent,
    Top5Component,
    // Dashboard
    AdvanceDashboardComponent,
    AuthorAdvanceDashboardComponent,
    BrandDashboardComponent,
    ChipsComponent,
    CompetitiveDashboardComponent,
    CustomDashboardComponent,
    DashboardGraphsComponent,
    DashboardMainComponent,
    DashboardPageComponent,
    DashboardSidebarComponent,
    DashboardSidebar2Component,
    DashboardTitlePageComponent,
    DashboardWidgetsPopupComponent,
    SelectSearchPopupComponent,
    //Settings
    SettingsManageruserComponent,
    SettingsMyaccountComponent,
    SettingsNotificationsComponent,
    SettingsSidebarComponent,
    SettingsTagsComponent,
    SettingsThemesComponent,
    SettingtagsAddnewComponent,
    SettingthemesAddnewComponent,
    AdduserPopupComponent,
    DeleteuserPopupComponent,
    EdituserPopupComponent,
    ChangepasswordPopupComponent,
    EditPopupComponent,
    UserProfileComponent,
    UserSubscripitionComponent,
    SettingsComponent,
    NewlettersTitleComponent,
    NewsArticlesComponent,
    NewsletterDatePickerComponent,
    SaveNewsLetterComponent,
    RecipientsInputComponent
  ],
  providers:[SearchFiltersPipe, SavedSearchFilterPipe]
})
export class ComponentsModule { }
