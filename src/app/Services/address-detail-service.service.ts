import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationDetail } from '../model/education-detail';
import { AddressDetail } from '../model/address-detail';

@Injectable({
  providedIn: 'root'
})
export class AddressDetailServiceService {
  path:string="http://localhost:8080/Address";
  constructor(private _httpClient:HttpClient) { }

//Save Data
saveAddressDetail(detail:AddressDetail,id:number):Observable<AddressDetail>
{
  console.log("**********"+id);
  return this._httpClient.post<AddressDetail>(`${this.path}/${id}`,detail);
}




}
