import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import { WorkExprDetail } from 'src/app/model/work-expr-detail';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ResumeDetailServiceService } from 'src/app/Services/resume-detail-service.service';
import { WorkExprDetailServiceService } from 'src/app/Services/work-expr-detail-service.service';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-work-expr-detail',
  templateUrl: './work-expr-detail.component.html',
  styleUrls: ['./work-expr-detail.component.css']
})
export class WorkExprDetailComponent implements OnInit {

  workExprDetail:WorkExprDetail;
  
  resumeDetailId:any;
  constructor(private _router:Router,private _resumeDetailsService:ResumeDetailServiceService,private _workExprService:WorkExprDetailServiceService) 
  {
 
    _resumeDetailsService.shareId.subscribe(data=>this.resumeDetailId=data);

    if(this.resumeDetailId==0)
    {
      _router.navigate(['/BasicDetails']);
    }
  
  }

  workExprDetailsForm=new FormGroup
  ({
    orgName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    fromYear:new FormControl('',[Validators.required]),
    toYear:new FormControl(''),
    role:new FormControl('',[Validators.required]),
    discription:new FormControl('',[Validators.required,Validators.maxLength(1000)])

  });
get orgName()
{
  return this.workExprDetailsForm.get('orgName');
}
get fromYear()
{
  return this.workExprDetailsForm.get('fromYear');
}
get toYear()
{
  return this.workExprDetailsForm.get('toYear');
}
get role()
{
  return this.workExprDetailsForm.get('role');
}
get discription()
{
  return this.workExprDetailsForm.get('discription');
}

ngOnInit(): void { }

//Save data
workExprDetails=new WorkExprDetail;

onSubmit()
{
  this.workExprDetails.orgName=this.workExprDetailsForm.get('orgName').value;
  this.workExprDetails.fromYear=this.workExprDetailsForm.get('fromYear').value;
  this.workExprDetails.toYear=this.workExprDetailsForm.get('toYear').value;
  this.workExprDetails.role=this.workExprDetailsForm.get('role').value;
  this.workExprDetails.discription=this.workExprDetailsForm.get('discription').value;


  this._resumeDetailsService.sendResumeDetailID(this.resumeDetailId);

  this._workExprService.saveWorkExprDetail(this.workExprDetails,this.resumeDetailId).subscribe();

   this.onGenerate();

}
file:any;
onGenerate()
{
//  var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});

  this._workExprService.generateResume(this.resumeDetailId).subscribe(data=>this.file=data);


  var file1 = new Blob([this.file],{type: "application/pdf"});
 saveAs(file1);

      //saveAs(new Blob([this.file],{type:'application/pdf'}))
      
}



}
