import { Component, OnInit } from '@angular/core';

import {FormControl,FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import { ProjectDetail } from 'src/app/model/project-detail';
import { Router } from '@angular/router';
import { ResumeDetailServiceService } from 'src/app/Services/resume-detail-service.service';
import { ProjectDetailServiceService } from 'src/app/Services/project-detail-service.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  projectDetail:ProjectDetail;

  resumeDetailId:any;
  constructor(private _router:Router,private _resumeDetailService:ResumeDetailServiceService,private _projectDetailService:ProjectDetailServiceService) 
  { 
    _resumeDetailService.shareId.subscribe(data=>this.resumeDetailId=data);

    if(this.resumeDetailId==0)
    {
      _router.navigate(['BasicDetails']);
    }

  }

projectDetailForm=new FormGroup({
  projectName:new FormControl('',[Validators.required,Validators.minLength(5)]),
  projectDiscription:new FormControl('',[Validators.required,Validators.maxLength(1200)]),
  year:new FormControl('',Validators.required)
});

get projectName()
{
  return this.projectDetailForm.get('projectName');
}
get projectDiscription()
{
  return this.projectDetailForm.get('projectDiscription');
}
get year()
{
  return this.projectDetailForm.get('year');
}


  ngOnInit(): void {  }


  //Save Data
  projectDetails=new ProjectDetail;
onSubmit()
{
    this.projectDetails.projectName=this.projectDetailForm.get('projectName').value;
    this.projectDetails.projectDiscription=this.projectDetailForm.get('projectDiscription').value;
    this.projectDetails.year=this.projectDetailForm.get('year').value;
    
    this._resumeDetailService.sendResumeDetailID(this.resumeDetailId);

    this._projectDetailService.saveProjectDetils(this.projectDetails,this.resumeDetailId).subscribe();

    this._router.navigate(['/SkillDetails']);
  }

  onSkip()
  {
    this._resumeDetailService.sendResumeDetailID(this.resumeDetailId);
    this._router.navigate(['/SkillDetails']);

  }
}
