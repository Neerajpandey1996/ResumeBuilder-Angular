import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressDetailComponent } from './Component/address-detail/address-detail.component';
import { EducationDetailComponent } from './Component/education-detail/education-detail.component';
import { OtherDetailComponent } from './Component/other-detail/other-detail.component';
import { ProjectDetailComponent } from './Component/project-detail/project-detail.component';
import { ResumeDetailComponent } from './Component/resume-detail/resume-detail.component';
import { SkillDetailComponent } from './Component/skill-detail/skill-detail.component';
import { WorkExprDetailComponent } from './Component/work-expr-detail/work-expr-detail.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddressDetailComponent,
    EducationDetailComponent,
    OtherDetailComponent,
    ProjectDetailComponent,
    ResumeDetailComponent,
    SkillDetailComponent,
    WorkExprDetailComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
