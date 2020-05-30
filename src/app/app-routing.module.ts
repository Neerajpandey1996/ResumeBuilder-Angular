import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeDetailComponent } from './Component/resume-detail/resume-detail.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { AddressDetailComponent } from './Component/address-detail/address-detail.component';
import { EducationDetailComponent } from './Component/education-detail/education-detail.component';
import { OtherDetailComponent } from './Component/other-detail/other-detail.component';
import { ProjectDetailComponent } from './Component/project-detail/project-detail.component';
import { SkillDetailComponent } from './Component/skill-detail/skill-detail.component';
import { WorkExprDetailComponent } from './Component/work-expr-detail/work-expr-detail.component';


const routes: Routes = [
  {path:'',redirectTo:'/BasicDetails' ,pathMatch:'full'},
  {path:'BasicDetails',component:ResumeDetailComponent},
  {path:'EducationDetails',component:EducationDetailComponent},
  {path:'OtherDetails',component:OtherDetailComponent},
  {path:'ProjectDetails',component:ProjectDetailComponent},
  {path:'SkillDetails',component:SkillDetailComponent},
  {path:'WorkExprDetails',component:WorkExprDetailComponent},
  {path:'**' , component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
