import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import { SkillDetail } from 'src/app/model/skill-detail';
import { Router } from '@angular/router';
import { ResumeDetailServiceService } from 'src/app/Services/resume-detail-service.service';
import { SkillDetailServiceService } from 'src/app/Services/skill-detail-service.service';
@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css']
})
export class SkillDetailComponent implements OnInit {

   skillDetail:SkillDetail;

   resumeDetailId:any;
  constructor(private _router:Router,private _resumeDetailsService:ResumeDetailServiceService,private _skillDetilService:SkillDetailServiceService) 
  {
     _resumeDetailsService.shareId.subscribe(data=>this.resumeDetailId=data);

     if(this.resumeDetailId==0)
     {
       _router.navigate(['/BasicDetails']);
     }
  }

skillDetailForm=new FormGroup
({
  name:new FormControl('',[Validators.required]),
  expxInYear:new FormControl('',[Validators.required,Validators.max(50)]),
  expxInMonth:new FormControl('',[Validators.required,Validators.max(12)]),
  level:new FormControl('',[Validators.required])

});

get name()
{
  return this.skillDetailForm.get('name');
}
get expxInYear()
{
  return this.skillDetailForm.get('expxInYear');
}
get expxInMonth()
{
  return this.skillDetailForm.get('expxInMonth');
}
get level()
{
  return this.skillDetailForm.get('level');
}

  ngOnInit(): void {  }

//Save Data

skillDetails=new SkillDetail();

onSubmit()
{
  this.skillDetails.name=this.skillDetailForm.get('name').value;
  this.skillDetails.expxInYear=this.skillDetailForm.get('expxInYear').value;
  this.skillDetails.expxInMonth=this.skillDetailForm.get('expxInMonth').value;
  this.skillDetails.level=this.skillDetailForm.get('level').value;

   this._resumeDetailsService.sendResumeDetailID(this.resumeDetailId);

   this._skillDetilService.saveskillDetails(this.skillDetails,this.resumeDetailId).subscribe();

  this._router.navigate(['/WorkExprDetails']);
}

onSkip()
{
  this._resumeDetailsService.sendResumeDetailID(this.resumeDetailId);
  this._router.navigate(['/WorkExprDetails']);
}

}
