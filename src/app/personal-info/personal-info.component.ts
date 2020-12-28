import { Component, OnInit, Input } from '@angular/core';
import { PERSONAL } from '../interface';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  @Input() personal: PERSONAL;

  constructor() { }

  ngOnInit(): void {
  }

}
