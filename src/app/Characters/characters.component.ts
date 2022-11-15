import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  characters : any;


  title : string = 'Characters';
  errorMesage: string = '';


  constructor(private charactersService : CharactersService) { }

  ngOnInit(): void {
     this.charactersService.getCharacters().subscribe(
       characters => this.characters = characters
      
    );

       
    
  }

}
