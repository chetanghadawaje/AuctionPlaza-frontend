import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/env';
import { Observable } from 'rxjs';
import { CommonConstants } from '../common/CommonConstants';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  baseUrl: String

  constructor(private httpClient:HttpClient) { 
    this.baseUrl = environment.serviceBaseUrls.DOMAIN
  }

  public getAllBids(): Observable<any> {
    let url = this.baseUrl + CommonConstants.APIURL.bids
    return this.httpClient.get(url)
  }

  public createBid(requestdata: any): Observable<any> {
    let url = this.baseUrl + CommonConstants.APIURL.bids
    return this.httpClient.post(url, requestdata)
  }

}
