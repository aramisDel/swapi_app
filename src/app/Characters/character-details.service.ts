import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, combineLatest, concatMap, forkJoin, from, map, mergeMap, Observable, tap, throwError, toArray } from 'rxjs';
import { Film } from '../film';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsService {

  private url = 'https://swapi.py4e.com/api/people/';
  
  constructor(private http: HttpClient){
    this.gettingCharactersFilms$.subscribe(data => console.log('merge data', data)
      );
  }

  getCharacterDetails(id: string): Observable<Character> {
    return this.http.get<Character>(this.url+id+'/').pipe(
      
      tap(data => console.log('All', data)),
      catchError(this.handleError)
    );
    
}

getFilm(urlFilm : string)  : Observable<Film> {
  
  return this.http.get<Film>(urlFilm).pipe(
      
    //tap(data => console.log('All film', data)),
    catchError(this.handleError)
  );
}

getFilms(character: Character){
return forkJoin(character.films.map(
  filmUrls => {
    return this.getFilm(filmUrls).pipe(
      map(film =>{
        film.id = this.getUrlId(film.url);
        return film;
      }))
  }
)

)
  
}

private getUrlId(filmUrl: string): number{
  return parseInt(filmUrl.substring((this.url).length, filmUrl.length-1),10)

}



gettingCharactersFilms$  = this.http.get<Character>(this.url+'1/').pipe(
 
 mergeMap(data => from(data.films).pipe(

  concatMap((film:string) => this.getFilm(film)),

 )),
 );

private handleError(err: HttpErrorResponse){
  let errorMessage = '';
  if(err.error instanceof ErrorEvent){
      errorMessage = `'Error: ${err.status}, error message: ${err.message}`;
  }
  return throwError(()=>errorMessage);
}

}
