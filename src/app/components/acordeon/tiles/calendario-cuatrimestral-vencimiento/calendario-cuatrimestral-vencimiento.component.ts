import { Component, OnInit, Input } from '@angular/core';
import { RegistroAcordeonCalendarioCuatrimestralVencimiento } from '../../../../../data/data.model';

@Component({
  selector: 'app-calendario-cuatrimestral-vencimiento',
  templateUrl: './calendario-cuatrimestral-vencimiento.component.html',
  styleUrls: ['./calendario-cuatrimestral-vencimiento.component.scss']
})
export class CalendarioCuatrimestralVencimientoComponent implements OnInit {

  @Input() registros: any[];
  misRegistros: RegistroAcordeonCalendarioCuatrimestralVencimiento[];
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
      && this.registros[0] instanceof RegistroAcordeonCalendarioCuatrimestralVencimiento) {
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
