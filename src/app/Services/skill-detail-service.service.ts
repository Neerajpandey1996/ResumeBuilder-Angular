import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillDetail } from '../model/skill-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillDetailServiceService {

  path:string="http://localhost:8080/skill";

  constructor(private _httpClient:HttpClient) { }


  //Save Details

  saveskillDetails(details:SkillDetail,id:number):Observable<SkillDetail>
  {
   return this._httpClient.post<SkillDetail>(`${this.path}/${id}`,details);
  }
}
