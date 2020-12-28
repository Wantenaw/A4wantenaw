import { Component, OnInit, Input } from '@angular/core';
import {COUNTRY} from '../interface';

@Component({
  selector: 'app-background-info',
  templateUrl: './background-info.component.html',
  styleUrls: ['./background-info.component.css']
})
export class BackgroundInfoComponent implements OnInit {

  @Input() country: COUNTRY;

  constructor() { }
  
  ngOnInit(): void {
  }
}
