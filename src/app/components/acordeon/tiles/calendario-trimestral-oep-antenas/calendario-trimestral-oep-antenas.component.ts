import { Component, OnInit, Input } from '@angular/core';
import { RegistroAcordeon, RegistroAcordeonCalendarioTrimestralOepAntena } from '../../../../../data/data.model';

@Component({
  selector: 'app-calendario-trimestral-oep-antenas',
  templateUrl: './calendario-trimestral-oep-antenas.component.html',
  styleUrls: ['./calendario-trimestral-oep-antenas.component.scss']
})
export class CalendarioTrimestralOepAntenasComponent implements OnInit {

  @Input() registros: any[];
  misRegistros: RegistroAcordeonCalendarioTrimestralOepAntena[];
  @Input() titulo: string;
  encabezado: string;

  @Input()
  id:number;
  @Input()
  bajada:string;


  constructor() { }

  ngOnInit() {
    if (this.registros instanceof Array && this.registros && this.registros.length > 0 && this.registros[0] instanceof RegistroAcordeonCalendarioTrimestralOepAntena) {
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
