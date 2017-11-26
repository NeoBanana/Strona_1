import { Injectable } from '@angular/core';
import { SnackbarService }             from '../messages/snackbar.service';
import { Observable }            from 'rxjs/Observable';
import { of }             from 'rxjs/observable/of';
//import { Hero }             from './hero';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class LoadDataService {

  private url = 'api';  // URL to web api
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption

      this.messageService.popup(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  constructor( private http :HttpClient,
    private messageService:SnackbarService
  ) { }

  getEditions (): Observable<any[]> {
    return this.http.get<any[]>(this.url+"/editions")
      .pipe(
        catchError(this.handleError('getEditions', []))
      );

     
  }
  getParticipants (): Observable<any[]> {
    return this.http.get<any[]>(this.url+"/participants")
      .pipe(
        catchError(this.handleError('getParticipants', []))
      );
  }
  getSponsors (): Observable<any[]> {
    return this.http.get<any[]>(this.url+"/sponsors")
      .pipe(
        catchError(this.handleError('getSponsors', []))
      );
  }
  getCommittees(): Observable<any[]> {
    return this.http.get<any[]>(this.url+"/committees")
      .pipe(
        catchError(this.handleError('getCommittees', []))
      );
  }
}
