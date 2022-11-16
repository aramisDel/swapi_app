import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

  constructor(private route: ActivatedRoute,
  private characterDetailsService: CharacterDetailsService,
  private router: Router) { }
 


  ngOnInit(): void {
    const id = (this.route.snapshot.paramMap.get('id'));

     this.characterDetailsService.getCharacterDetails(`${id}`).subscribe(
      character =>  this.character = character
   );
   
  }

  onBack(): void{
    this.router.navigate(['/characters']);
  }

}
