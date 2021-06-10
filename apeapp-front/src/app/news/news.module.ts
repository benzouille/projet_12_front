import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { NewsFormStep1Component } from './news-form/news-form-step1/news-form-step1.component';
import { NewsFormStep2Component } from './news-form/news-form-step2/news-form-step2.component';
import { NewsFormStep3Component } from './news-form/news-form-step3/news-form-step3.component';
import { NewsListTabComponent } from './news-list-tab/news-list-tab.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import {NewsService} from './services/news.service';
import {MatCardModule} from '@angular/material/card';
import {NewsRoutingModule} from './news-routing.module';
import {FlexModule} from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {NewFormService} from './news-form/new-form.service';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { NewsMainPageComponent } from './news-main-page/news-main-page.component';

@NgModule({
    declarations: [
        NewsCardComponent,
        NewsDetailComponent,
        NewsFormComponent,
        NewsFormStep1Component,
        NewsFormStep2Component,
        NewsFormStep3Component,
        NewsListTabComponent,
        UploadFileComponent,
        NewsMainPageComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        NewsRoutingModule,
        FlexModule,
        MatTabsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatIconModule,
        FormsModule,
        MatRadioModule,
        MatInputModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatProgressBarModule
    ],
    providers: [
        MatDatepickerModule,
        MatNativeDateModule,
        NewFormService,
        NewsService,
    ],
    exports: [
        NewsMainPageComponent
    ]
})
export class NewsModule {
  static forRoot(): ModuleWithProviders<NewsModule> {
    return {
      ngModule: NewsModule,
      providers: [
        NewsService
      ],
    };
  }
}
