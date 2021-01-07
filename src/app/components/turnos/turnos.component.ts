import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent implements OnInit {

    options = ['Ingreso y actualizaciones de Cert. Parcelarios', 'Consultas Técnicas de Catastro','Certificados de Escribano','Derecho de Construcción',  'Publicidad Y Propaganda', 'Fiscalización Tributaria - Empresas', 'Fiscalización Tributaria - Unipersonales'];
  selected: string;

  constructor() { }

  ngOnInit() {}

  select( data: any ) {
    this.selected = data;
  }
}
