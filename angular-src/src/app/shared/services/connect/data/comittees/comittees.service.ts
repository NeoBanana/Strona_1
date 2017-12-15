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
export class ComitteesService {
  private url = 'api';  // URL to web api
  
    constructor(private http :HttpClient, private error:ErrorService) { }
  
    /**
     * returns all comittees from database
     */
    getCommittees(): Observable<any[]> {
      return this.http.get<any[]>(this.url+"/committees")
        .pipe(
          catchError(this.error.handleError('getCommittees', []))
        );
    }
}
