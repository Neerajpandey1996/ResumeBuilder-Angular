import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ResumeDetail } from '../model/resume-detail';

@Injectable({
  providedIn: 'root'
})
export class ResumeDetailServiceService {

  path:string="http://localhost:8080/BasicDetails";
  constructor(private _httpClient:HttpClient) { }

//Save Data

public saveResumeDetails(resumeDetail:ResumeDetail):Observable<ResumeDetail>
{
   return this._httpClient.post<ResumeDetail>(this.path,resumeDetail);
}




//pass ResumeDetail Id to other Component
private subject = new BehaviorSubject<number>(0);
public shareId=this.subject.asObservable();

sendResumeDetailID(message: number) {
        this.subject.next(message);
}




}
