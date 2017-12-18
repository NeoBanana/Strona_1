import { Injectable } from '@angular/core';
import { ErrorService } from 'app/shared/services/connect/error.service';
import { Observable }            from 'rxjs/Observable'; 
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ISponsor } from '../data.models';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SponsorsService {
  private url = 'api';  // URL to web api
  
    constructor(private http :HttpClient, private error:ErrorService) { }
    
      // returns all sponsors from database
    getSponsors (): Observable<any[]> {
      return this.http.get<any[]>(this.url+"/sponsors")
        .pipe(
          catchError(this.error.handleError('getSponsors', []))
        );
    }
}
