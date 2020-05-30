import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import {Validator} from '@angular/forms'
import { AddressDetail } from 'src/app/model/address-detail';
import { Router } from '@angular/router';
import { ResumeDetailServiceService } from 'src/app/Services/resume-detail-service.service';
import { AddressDetailServiceService } from 'src/app/Services/address-detail-service.service';
@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {

   resumeDetailId:any;
  constructor(private _router:Router,private _resumeDetailService:ResumeDetailServiceService,private _addressDetailService:AddressDetailServiceService) 
  { 
     this._resumeDetailService.shareId.subscribe(data=>this.resumeDetailId=data);
  
     if(this.resumeDetailId==0)
     {
       _router.navigate(['/BasicDetails']);
     }
  }

  ngOnInit(): void 
  {
    
  }

addressDetailForm=new FormGroup
({
fullName:new FormControl('',[Validators.required,Validators.minLength(2)]),
streetAddress:new FormControl('',[Validators.required,Validators.minLength(5)]),
city:new FormControl('',[Validators.required,Validators.minLength(2)]),
state:new FormControl('',[Validators.required]),
zipCode:new FormControl('',[Validators.required])
});

get fullName()
{
  return this.addressDetailForm.get('fullName');
}
get streetAddress()
{
  return this.addressDetailForm.get('streetAddress');
}
get city()
{
  return this.addressDetailForm.get('city');
}
get state()
{
  return this.addressDetailForm.get('state');
}
get zipCode()
{
  return this.addressDetailForm.get('zipCode');
}



//Save Data
addressDetails=new AddressDetail;
onSubmit()
{
  this.addressDetails.fullName=this.addressDetailForm.get('fullName').value;
  this.addressDetails.streetAddress=this.addressDetailForm.get('streetAddress').value;
  this.addressDetails.city=this.addressDetailForm.get('city').value;
  this.addressDetails.state=this.addressDetailForm.get('state').value;
  this.addressDetails.zipCode=this.addressDetailForm.get('zipCode').value;

  this._resumeDetailService.sendResumeDetailID(this.resumeDetailId);
  this._addressDetailService.saveAddressDetail(this.addressDetails,this.resumeDetailId).subscribe();
 
   this._router.navigate(['/EducationDetails']);
 }

//Skip this Step
skipStep()
{
     this._resumeDetailService.sendResumeDetailID(this.resumeDetailId);

     this._router.navigate(['/EducationDetails'])
}


//Add More Address
newaddressDetails=new AddressDetail;
addAddress()
{
   this.newaddressDetails.fullName=this.addressDetailForm.get('fullName').value;
   this.newaddressDetails.streetAddress=this.addressDetailForm.get('streetAddress').value;
   this.newaddressDetails.city=this.addressDetailForm.get('city').value;
   this.newaddressDetails.state=this.addressDetailForm.get('state').value;
   this.newaddressDetails.zipCode=this.addressDetailForm.get('zipCode').value;

   
   this._resumeDetailService.sendResumeDetailID(this.resumeDetailId);
   this._addressDetailService.saveAddressDetail(this.newaddressDetails,this.resumeDetailId).subscribe();
 
   this._router.navigate(['/  `']);
 // this.addressDetailForm.setValue({fullName:'',streetAddress:'',city:'',state:'',zipCode:''});
}

}
