import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OtherDetail } from '../model/other-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtherDetailServiceService {

  path:string="http://localhost:8080/Other";
  constructor(private _httpClient:HttpClient) { }


//Save Data
saveOtherDetail(detail:OtherDetail,id:number):Observable<OtherDetail>
{
      return this._httpClient.post<OtherDetail>(`${this.path}/${id}`,detail);
}
}
