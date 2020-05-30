import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import { OtherDetail } from 'src/app/model/other-detail';
import { Router } from '@angular/router';
import { ResumeDetailServiceService } from 'src/app/Services/resume-detail-service.service';
import { OtherDetailServiceService } from 'src/app/Services/other-detail-service.service';
@Component({
  selector: 'app-other-detail',
  templateUrl: './other-detail.component.html',
  styleUrls: ['./other-detail.component.css']
})
export class OtherDetailComponent implements OnInit {


  resumeDetailId:any;
  constructor(private _router:Router , private _resumeDetilsService:ResumeDetailServiceService,private otherDetailService:OtherDetailServiceService) 
  {
      _resumeDetilsService.shareId.subscribe(data=>this.resumeDetailId=data);

      if(this.resumeDetailId==0)
      {
        _router.navigate(['/BasicDetils']);
      }
  }

otherDetailForm=new FormGroup
({
name:new FormControl('',[Validators.required,Validators.minLength(3)]),
description:new FormControl(''),
year:new FormControl('')
});
get name()
{
  return this.otherDetailForm.get('name');
}
get description()
{
  return this.otherDetailForm.get('description');
}
get year()
{
  return this.otherDetailForm.get('year');
}


  ngOnInit(): void  {  }

  //Save Data
otherDetails=new OtherDetail;
onSubmit()
  {
this.otherDetails.name=this.otherDetailForm.get('name').value;
this.otherDetails.discription=this.otherDetailForm.get('description').value;
this.otherDetails.year=this.otherDetailForm.get('year').value;
console.warn(this.otherDetails);

this._resumeDetilsService.sendResumeDetailID(this.resumeDetailId);

this.otherDetailService.saveOtherDetail(this.otherDetails,this.resumeDetailId).subscribe();

this._router.navigate(['/ProjectDetails']);
}

onSkip()
{
  this._resumeDetilsService.sendResumeDetailID(this.resumeDetailId);
  this._router.navigate(['/ProjectDetails']);
}
}
