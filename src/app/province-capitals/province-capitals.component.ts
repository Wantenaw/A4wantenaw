import { Component, OnInit, Input } from '@angular/core';
import { DIVISION } from '../interface';

@Component({
  selector: 'app-province-capitals',
  templateUrl: './province-capitals.component.html',
  styleUrls: ['./province-capitals.component.css']
})
export class ProvinceCapitalsComponent implements OnInit {

  @Input() division: DIVISION[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
