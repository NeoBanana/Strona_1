import { Injectable } from '@angular/core';
import { SnackbarService }             from '../messages/snackbar.service';
import { Observable }            from 'rxjs/Observable';
import { of }             from 'rxjs/observable/of';
@Injectable()
export class ErrorService {

  constructor(  private messageService:SnackbarService) { }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption

      this.messageService.popup(`${operation} failed: ${error.message}`,2000);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
