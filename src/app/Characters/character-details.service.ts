import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsService {

  private url = 'https://swapi.py4e.com/api/people/';
  
  constructor(private http: HttpClient){

  }

  getCharacterDetails(id: string): Observable<Character> {
    return this.http.get<Character>(this.url+id+'/').pipe(
      tap(data => console.log('All', data)),
      catchError(this.handleError)
    );
}

private handleError(err: HttpErrorResponse){
  let errorMessage = '';
  if(err.error instanceof ErrorEvent){
      errorMessage = `'Error: ${err.status}, error message: ${err.message}`;
  }
  return throwError(()=>errorMessage);
}

}
