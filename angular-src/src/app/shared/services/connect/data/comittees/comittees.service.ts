import { Injectable } from '@angular/core';
import { ErrorService } from 'app/shared/services/connect/error.service';
import { Observable }            from 'rxjs/Observable'; 
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { IComittee } from '../data.models';
import { MainProgressBarService } from 'app/shared/services/progressbars/main-progress-bar.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ComitteesService {
  private url = 'api';  // URL to web api
  
    constructor(private http :HttpClient,
       private error:ErrorService,
      private progressBar: MainProgressBarService) { }
  
    /**
     * returns all comittees from database
     */
    getCommittees(): Observable<IComittee[]> {
      this.progressBar.toggle(true);
      return this.http.get(this.url+"/committees") 
      .map(response => <IComittee[]> response ) 
      .do(data =>{
        this.progressBar.toggle(false);
        data;
      } )  
      .catch(this.error.handleError('getCommittees', [])); 

    }
}
