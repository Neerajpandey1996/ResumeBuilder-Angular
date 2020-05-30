import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkExprDetail } from '../model/work-expr-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExprDetailServiceService {

  path:string="http://localhost:8080/WorkExpr";
  constructor(private _httpClient:HttpClient) { }

  //Save Data
  saveWorkExprDetail(detail:WorkExprDetail,id:number):Observable<WorkExprDetail>
  {
    return this._httpClient.post<WorkExprDetail>(`${this.path}/${id}`,detail);
  }



  //generate and download 

  path1:string="http://localhost:8080/generate";
  generateResume(id:number)
  {
        return this._httpClient.get<File>(`${this.path1}/${id}`);
  }
}
