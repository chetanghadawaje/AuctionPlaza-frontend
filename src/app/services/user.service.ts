import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import userRegisterInterface from '../common/types/userRegister';
import userLoginInterface from '../common/types/userLogin';
import { environment } from '../../environment/env';
import { CommonConstants } from '../common/CommonConstants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.serviceBaseUrls.DOMAIN;

  constructor(private httpClient:HttpClient) { 
    this.baseUrl = environment.serviceBaseUrls.DOMAIN
  }

  public onSignUp(requestdata: userRegisterInterface): Observable<any> {
    let url = this.baseUrl + CommonConstants.APIURL.registerUrl
    return this.httpClient.post(url, requestdata)
  }

  public loginUser(requestdata: userLoginInterface): Observable<any> {
    let url = this.baseUrl + CommonConstants.APIURL.loginUrl
    return this.httpClient.post(url, requestdata)
  }
}
