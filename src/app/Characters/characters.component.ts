import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../Spinner/spinner.service';
import { Character } from './character';
import { CharactersService } from './characters.service';

@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
substr(arg0: number): any|string {
throw new Error('Method not implemented.');
}
  characters : Character[] = [];
  pagesCount : number = 0;
  title : string = 'Characters';
  errorMesage: string = '';
  p: number = 1;
  total: number = 0;


  constructor(public spinnerService : SpinnerService,public charactersService : CharactersService) { }

  pageChangeEvent(event: number){
    this.p = event;
    this.getCharacters();
}

getCharacters(){
  this.charactersService.getCharactersPage(this.p).subscribe({
    next: characters => {
      this.characters = characters.results;
      this.total = characters.count;
    },
    error: err => this.errorMesage = err
  });
}

  ngOnInit(): void {
    this.getCharacters();
        
       }

      }
    

  


