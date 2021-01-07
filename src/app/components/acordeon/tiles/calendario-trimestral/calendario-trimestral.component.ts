import { Component, OnInit, Input } from '@angular/core';
import { RegistroAcordeon, RegistroAcordeonCalendarioTrimestral } from '../../../../../data/data.model';

@Component({
  selector: 'app-calendario-trimestral',
  templateUrl: './calendario-trimestral.component.html',
  styleUrls: ['./calendario-trimestral.component.scss']
})
export class CalendarioTrimestralComponent implements OnInit {

  @Input() registros: any[];
  misRegistros: RegistroAcordeonCalendarioTrimestral[];
  @Input() titulo: string;
  encabezado: string;

  @Input()
  id:number;
  @Input()
  bajada:string;


  constructor() { }

  ngOnInit() {
    if (this.registros instanceof Array && this.registros && this.registros.length > 0 && this.registros[0] instanceof RegistroAcordeonCalendarioTrimestral) {
      this.misRegistros = this.registros;

      if (this.titulo)
        this.encabezado = this.titulo;
      else
        this.encabezado = 'Calendario Tributario'
    }
  }

  identificador(){
    return `calendarioMv-${ this.id?this.id:''}`;
  }
}
