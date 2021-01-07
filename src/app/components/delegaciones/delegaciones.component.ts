import { DATA } from '../../../assets/data/modelo.data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delegaciones',
  templateUrl: './delegaciones.component.html',
  styleUrls: ['./delegaciones.component.scss']
})
export class DelegacionesComponent implements OnInit {

  delegaciones = DATA.delegaciones;

  constructor() { }

  ngOnInit() {
  }

}
