import { Component, OnInit } from '@angular/core';
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

  constructor(private planetsService: PlanetsService) { }

  performFilter(filterBy : string): Planet[] {
    filterBy = filterBy.toLocaleLowerCase();     
    return this.planets.filter((planet: Planet) =>
        planet.name.toLocaleLowerCase().includes(filterBy))
  }

  ngOnInit(): void {
    this.planetsService.results$.subscribe({
      next: planets => {
        this.planets = planets.results;
        this.filteredPlanets = this.planets;
      },
      error: err => this.errorMesage = err
    });

  }

}
