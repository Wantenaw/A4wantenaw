import { Component, OnInit, Input } from '@angular/core';
import { DIVISION } from '../interface';

@Component({
  selector: 'app-province-images',
  templateUrl: './province-images.component.html',
  styleUrls: ['./province-images.component.css']
})
export class ProvinceImagesComponent implements OnInit {

  @Input() division: DIVISION[];

  constructor() { }

  ngOnInit(): void {
  }

}
