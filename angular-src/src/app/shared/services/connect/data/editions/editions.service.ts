import { Injectable } from '@angular/core';
import { ErrorService } from 'app/shared/services/connect/error.service';
import { Observable }            from 'rxjs/Observable'; 
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { IEdition, IParticipant, IClass } from '../data.models';
import { Http } from '@angular/http';
import { MainProgressBarService } from 'app/shared/services/progressbars/main-progress-bar.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EditionsService {
  private url = 'api';  // URL to web api

  constructor(private http :HttpClient,
     private error:ErrorService,
     private progressBar : MainProgressBarService
    ) { }

  /**
   * return all editions from database
   */
    getEditions (): Observable<any> {
      this.progressBar.toggle(true);
      return this.http.get<IEdition[]>(this.url+"/editions") 
      .map(response => <IEdition[]> response ) 
      .do(data =>{
        this.progressBar.toggle(false);
        data;
      } )  
      .catch(this.error.handleError('getEditions', [])); 

    }
    /**
     * return only names of editions from database
     */
    getEditionsNames (): Observable<any> {
      this.progressBar.toggle(true);
      return this.http.get<IEdition[]>(this.url+"/editions") 
      .map(response => <IEdition[]> response ) 
      .do(data =>{
        this.progressBar.toggle(false);
        data;
      } )  
      .catch(this.error.handleError('getEditions', [])); 

    }
    /**
     * return one edition from database
     * @param id -edition id
     */
    getEdition (id:number | String): Observable<any> {
      this.progressBar.toggle(true);
      return this.http.get<IEdition>(this.url+"/editions/"+id) 
      .map(response=> <IEdition>response)
      .do(data =>{
        this.progressBar.toggle(false);
        data;
      } )  
      .catch(this.error.handleError('getEditions', [])); 

    }
}

