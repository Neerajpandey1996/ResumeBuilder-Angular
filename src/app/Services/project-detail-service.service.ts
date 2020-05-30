import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectDetail } from '../model/project-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailServiceService {

  path:string="http://localhost:8080/project";
  constructor(private _httpClient:HttpClient) { }


  //Save Details

  saveProjectDetils(detail:ProjectDetail,id:number):Observable<ProjectDetail>
  {
     return this._httpClient.post<ProjectDetail>(`${this.path}/${id}`,detail);
  }
}
