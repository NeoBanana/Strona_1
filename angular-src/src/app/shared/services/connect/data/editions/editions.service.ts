import { Injectable } from '@angular/core';
import { ErrorService } from 'app/shared/services/connect/error.service';
import { Observable }            from 'rxjs/Observable'; 
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Edition, Participant, Class } from '../data.models';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EditionsService {
  private url = 'api';  // URL to web api

  constructor(private http :HttpClient, private error:ErrorService) { }

    getEditions (): Observable<any[]> {
      return this.http.get<any[]>(this.url+"/editions")
        .pipe(
          catchError(this.error.handleError('getEditions', []))
        );
    }
    getEditionsNames (): Observable<any[]> {
      return this.http.get<any[]>(this.url+"/editions?nazwa")
        .pipe(
          catchError(this.error.handleError('getEditionsNames', []))
        );
    }
    getEdition (id:number | String): Observable<Edition> {
      return this.http.get<any>(this.url+"/editions/"+id)
      .pipe(
        catchError(this.error.handleError('getEdition', []))
      );
    }
}

