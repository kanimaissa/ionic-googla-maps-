import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders , HttpParams,HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { retry, catchError } from 'rxjs/operators';
import { Agence } from './../agence';
@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  AGENCE_LIST_URL="http://192.168.1.14/webserviceMobileApp/v1/allagences";
  AGENCE_AUTOUR_DE_MOI="http://192.168.1.14/webserviceMobileApp/v1/agences";
  constructor(private httpclient: HttpClient ) { }


  getAgenceList()
  {
    var results:any;
    let headers =new HttpHeaders({
      
      'content-type':'application/json',
      'Authorization': "Basic " + btoa("admin:expressmobile$$2018"),
    });
   results= this.httpclient.get(`${this.AGENCE_LIST_URL}`,{ headers : headers })
  
    return results 
  } 

  
getAgenceAutour_de_moi(lattitude:string,longitude:string)
{
  var results:any;
  let headers =new HttpHeaders({
    
    'content-type':'application/json',
    'Authorization': "Basic " + btoa("admin:expressmobile$$2018"),
  });
 results= this.httpclient.get<Agence>(`${this.AGENCE_AUTOUR_DE_MOI+'/'+lattitude+'/'+longitude}`,{ headers : headers })

  return results 
}

}
