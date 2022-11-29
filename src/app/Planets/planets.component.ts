import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../Spinner/spinner.service';
import { Planet } from './planet';
import { PlanetsService } from './planets.service';



@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  pageTitle: string = 'Planets';
  errorMesage: string = '';
  p: number = 1;
  total: number = 0;

  private _listFilter: string = '';

  get listFilter(): string{
    return this._listFilter;
    }
    

    set listFilter(value: string){
      this._listFilter = value;
      this.filteredPlanets = this.performFilter(value);
  }

  filteredPlanets: Planet[] = [];
  planets: Planet[] = [];

  constructor(public spinnerService : SpinnerService,private planetsService: PlanetsService) { }

  performFilter(filterBy : string): Planet[] {
    filterBy = filterBy.toLocaleLowerCase();     
    return this.planets.filter((planet: Planet) =>
        planet.name.toLocaleLowerCase().includes(filterBy))
  }

  pageChangeEvent(event: number){
    this.p = event;
    this.getPlanets();
}

getPlanets(){
  this.planetsService.getAllPlanets().subscribe({
    next: planets => {
      this.planets = planets;
      this.filteredPlanets = this.planets;

    },
    error: err => this.errorMesage = err
  });
}
  ngOnInit(): void {
   this.getPlanets();
  }

}
