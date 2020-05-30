import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import { EducationDetail } from 'src/app/model/education-detail';
import { Router } from '@angular/router';
import { ResumeDetailServiceService } from 'src/app/Services/resume-detail-service.service';
import { EducationDetailServiceService } from 'src/app/Services/education-detail-service.service';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  educationDetail:EducationDetail;

  resumeDetailId:any;
  constructor(private _router:Router,private _resumeDetailService:ResumeDetailServiceService,private _educationDetailService:EducationDetailServiceService) 
  {
      _resumeDetailService.shareId.subscribe(data=>this.resumeDetailId=data);

      if(this.resumeDetailId==0)
      {
        _router.navigate(['BasicDetails']);
      }
  }

  educationDetailForm=new FormGroup
  ({
      courseName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      schoolName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      yearOfPassing:new FormControl('',[Validators.required]),
      percentage:new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]) 
  
    });
get courseName()
{
  return this.educationDetailForm.get('courseName');
}
get schoolName()
{
 return this.educationDetailForm.get('schoolName');
}
get yearOfPassing()
{
return this.educationDetailForm.get('yearOfPassing');
}
get percentage()
{
return this.educationDetailForm.get('percentage');
}


  ngOnInit(): void {  }


  //save Data

  educationDetails=new EducationDetail;
  onSubmit()
  {
    this.educationDetails.courseName=this.educationDetailForm.get('courseName').value;
    this.educationDetails.schoolName=this.educationDetailForm.get('schoolName').value;
    this.educationDetails.yearOfPassing=this.educationDetailForm.get('yearOfPassing').value;
    this.educationDetails.percentage=this.educationDetailForm.get('percentage').value;
    console.warn(this.educationDetails);
    
    this._resumeDetailService.sendResumeDetailID(this.resumeDetailId);
    this._educationDetailService.saveEducationDetail(this.educationDetails,this.resumeDetailId).subscribe();
    this._router.navigate(['/OtherDetails']);
  }

  onSkip()
  {
    this._resumeDetailService.sendResumeDetailID(this.resumeDetailId);
    this._router.navigate(['/OtherDetails']);
  }
}
