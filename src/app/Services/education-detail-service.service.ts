import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EducationDetail } from '../model/education-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationDetailServiceService {

  path:string="http://localhost:8080/EducationDetail";
  
  constructor(private _httpClient:HttpClient) { }


  //save Data
  saveEducationDetail(detail:EducationDetail,id):Observable<EducationDetail>
  {
    return this._httpClient.post<EducationDetail>(`${this.path}/${id}`,detail);
  }
  
}
