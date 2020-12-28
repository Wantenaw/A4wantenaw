import { Component } from '@angular/core';

import { COUNTRY } from './interface';
import country from '../assets/data/A4canada.json';
import { DIVISION } from './interface';
import division from '../assets/data/A4canada.json';
import { PERSONAL } from './interface';
import personal from '../assets/data/A4canada.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A4wantenaw';

  // data pulled from JSON
  country: COUNTRY = country.country;
  division: DIVISION[] = division.division;
  personal: PERSONAL = personal.personal;
}
