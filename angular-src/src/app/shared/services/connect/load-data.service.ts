import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { Observable }            from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class LoadDataService {

  private url = 'api';  // URL to web api

  constructor( private http :HttpClient, private error:ErrorService
  
  ) { }

  getEditions (): Observable<any[]> {

    return this.http.get<any[]>(this.url+"/editions")
      .pipe(
        catchError(this.error.handleError('getEditions', []))
      );
  }
 
  getSponsors (): Observable<any[]> {
    return this.http.get<any[]>(this.url+"/sponsors")
      .pipe(
        catchError(this.error.handleError('getSponsors', []))
      );
  }
  getCommittees(): Observable<any[]> {
    return this.http.get<any[]>(this.url+"/committees")
      .pipe(
        catchError(this.error.handleError('getCommittees', []))
      );
  }
}
