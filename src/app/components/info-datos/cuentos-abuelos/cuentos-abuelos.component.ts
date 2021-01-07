import { Component, OnInit } from '@angular/core';
import { DATA } from '../../../../assets/data/modelo.data';

@Component({
  selector: 'app-cuentos-abuelos',
  templateUrl: './cuentos-abuelos.component.html',
  styleUrls: ['./cuentos-abuelos.component.scss']
})
export class CuentosAbuelosComponent implements OnInit {

  cuentos: any = DATA.cuentos;

  constructor() { }

  ngOnInit() {
  }

}
