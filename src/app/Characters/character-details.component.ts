import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Film } from '../film';
import { Character } from './character';
import { CharacterDetailsService } from './character-details.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  pageTitle : string = 'Character Detail';
  errorMesage: string = '';
  character: Character= {} as Character;
  films: Film[] = [];
  constructor(private route: ActivatedRoute,
  private characterDetailsService: CharacterDetailsService,
  private router: Router) { }
 


  ngOnInit(): void {
    const id = (this.route.snapshot.paramMap.get('id'));

     this.characterDetailsService.getCharacterDetails(`${id}`).subscribe({
      next: character => {
        this.character = character,
        this.characterDetailsService.getFilms(character).subscribe(
          data => {this.films = data,
          console.log(this.films)}
        );
      }
      ,
      error: err => this.errorMesage = err
    }
   );

   
  }

  onBack(): void{
    this.router.navigate(['/characters']);
  }

}
