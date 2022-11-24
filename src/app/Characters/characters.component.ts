import { Component, OnInit } from '@angular/core';
import { reduce, Subscription } from 'rxjs';
import { Character } from './character';
import { CharactersService } from './characters.service';
import { Results } from './results';

@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
substr(arg0: number): any|string {
throw new Error('Method not implemented.');
}
  characters : Character[] = [];
  results  : Results[] = [];
  pagesCount : number = 0;
  title : string = 'Characters';
  errorMesage: string = '';
  p: number = 1;
  total: number = 0;


  constructor(public charactersService : CharactersService) { }

  pageChangeEvent(event: number){
    this.p = event;
    this.charactersService.getAllPages();
}
  ngOnInit(): void {
     this.charactersService.getAllPages().subscribe(
       
      character => {  
        this.characters = character,
        console.log('Actual Result pages: ', JSON.stringify(character))
        }

        )}
     
        
       }
    

  


