import { DATA } from './../../../assets/data/modelo.data';
import { Component, OnInit } from '@angular/core';
import { Novedad } from '../../../data/data.model';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})
export class NovedadesComponent implements OnInit {

  novedades: Novedad[];

  constructor() { 
    this.novedades = DATA.novedades;
  }

  ngOnInit() {
  }

}
