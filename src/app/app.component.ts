import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav class='navbar navbar-expand navbar-dark bg-dark'>
  <a class='navbar-brand'>{{title}}</a>
  <ul class='nav nav-pills'>
    <li><a class='nav-link' routerLinkActive='active' routerLink='/planets'>Planets</a></li>
    <li><a class='nav-link' routerLinkActive='active' routerLink='/characters'>Characters</a></li>
  </ul>
</nav>
<div class='container'>
<router-outlet></router-outlet>
</div>`
  
})
export class AppComponent {
  title = 'Star-Wars-API';
}
