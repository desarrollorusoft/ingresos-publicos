import { RegistroAcordeonCalendarioTrimestral } from './../../../../../data/data.model';
import { Component, OnInit, Input } from '@angular/core';
import { RegistroAcordeonCalendarioTrimestralVencimiento } from '../../../../../data/data.model';

@Component({
  selector: 'app-calendario-trimestral-vencimiento',
  templateUrl: './calendario-trimestral-vencimiento.component.html',
  styleUrls: ['./calendario-trimestral-vencimiento.component.scss']
})
export class CalendarioTrimestralVencimientoComponent implements OnInit {

  @Input() registros: any[];
  misRegistros: RegistroAcordeonCalendarioTrimestral[];
  @Input() titulo: string;
  encabezado: string;

  @Input()
  id: number;
  @Input()
  bajada: string;


  constructor() { }

  ngOnInit() {
    if (this.registros instanceof Array
        && this.registros
        && this.registros.length > 0
        && this.registros[0] instanceof RegistroAcordeonCalendarioTrimestralVencimiento) {
      this.misRegistros = this.registros;

      if (this.titulo) {
        this.encabezado = this.titulo;
      } else {
        this.encabezado = 'Calendario Tributario';
      }
    }
  }

  identificador(){
    return `calendarioMv-${ this.id ? this.id : ''}`;
  }

}
