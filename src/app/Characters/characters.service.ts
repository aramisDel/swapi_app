import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Character } from './character';
import { catchError, concatMap, delay, EMPTY, expand, from, map, mergeMap, Observable, reduce, switchMap, tap, throwError } from 'rxjs';
import { Film } from '../film';
import { Results } from './results';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  
  private url = 'https://swapi.py4e.com/api/people/';
  
  constructor(private http: HttpClient){
  
  }


  results$ = this.http.get<Results>(this.url)
  .pipe(
    tap(data => console.log('Results : ', JSON.stringify(data))),
    catchError(this.handleError),
    
  );



  public getAllPages(): Observable<Character[]> {

    
    return  this.http.get<Results>(this.url).pipe(
      expand(response => response.next ? this.http.get<Results>(response.next) : EMPTY),
      
      reduce((accData, data) => accData.concat(data.results), [] as Character[]),
      tap(data => console.log('Result pages: ', JSON.stringify(data))))

               
  }

  private charactersUrl(characters: Character[]): Character[] {
    return characters.map(character => {
      return character;
    });
  }

   getUrlId(characterUrl: string): number{
    return parseInt(characterUrl.substring((this.url).length, characterUrl.length-1),10)
  
  }

  getCharacters(urlId:string){
    this.http.get<Results>(this.url)
  .pipe(
    tap(data => console.log('Results : ', JSON.stringify(data))),
    catchError(this.handleError),
    
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