import { Component, OnInit } from '@angular/core';

import {FormControl , FormGroup, Validators } from '@angular/forms';
import {Validator} from '@angular/forms';
import { ResumeDetail } from 'src/app/model/resume-detail';
import { Router } from '@angular/router';
import { ResumeDetailServiceService } from 'src/app/Services/resume-detail-service.service';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-resume-detail',
  templateUrl: './resume-detail.component.html',
  styleUrls: ['./resume-detail.component.css']
})
export class ResumeDetailComponent implements OnInit {

  
  constructor(private _router:Router,private resumeDetailService:ResumeDetailServiceService) { }

  resumeDetailForm=new FormGroup
  ({
    name:new FormControl('',[Validators.required,Validators.minLength(2)]),
    mobile:new FormControl('',[Validators.required,Validators.maxLength(12),Validators.minLength(12)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    linkdIn:new FormControl(''),
    gitId:new FormControl(''),
    declaration:new FormControl('')
  });

get name()
{
  return this.resumeDetailForm.get('name');
}
get mobile()
{
  return this.resumeDetailForm.get('mobile');
}
get email()
{
  return this.resumeDetailForm.get('email');
}


ngOnInit(): void 
  {
  }
 

  // Save Basic Details 
  resumeDetails=new ResumeDetail;
  //url:string="/AddressDetails";
  
  onSubmit()
  {
    
    this.resumeDetails.name=this.resumeDetailForm.get('name').value;
    this.resumeDetails.mobile=this.resumeDetailForm.get('mobile').value;
    this.resumeDetails.email=this.resumeDetailForm.get('email').value;
    this.resumeDetails.linkdIn=this.resumeDetailForm.get('linkdIn').value;
    this.resumeDetails.gitId=this.resumeDetailForm.get('gitId').value;
    this.resumeDetails.declaration=this.resumeDetailForm.get('declaration').value;


    this.resumeDetailService.saveResumeDetails(this.resumeDetails).subscribe(data=>this.getData(data))
    
    
  }

  getData(resumeDetail:ResumeDetail)
  {
    
    this.resumeDetailService.sendResumeDetailID(resumeDetail.id);
    this._router.navigate(['/EducationDetails']);
  // console.log(this._router.navigate(['/AddressDetail'+"/"+resumeDetail.id]));
  }
  
}
