import { Component, OnInit, Input } from '@angular/core';
import { RegistroAcordeon, RegistroAcordeonCalendarioRSISH } from '../../../../../data/data.model';

@Component({
  selector: 'app-calendario-rs-ish',
  templateUrl: './calendario-rs-ish.component.html',
  styleUrls: ['./calendario-rs-ish.component.scss']
})
export class CalendarioRsIshComponent implements OnInit {

  @Input() registros: any[];
  misRegistros: RegistroAcordeonCalendarioRSISH[];
  @Input() titulo: string;
  encabezado: string;
  @Input()
  id:number;
  @Input()
  bajada:string;


  constructor() { }

  ngOnInit() {
    if (this.registros instanceof Array && this.registros && this.registros.length > 0 && this.registros[0] instanceof RegistroAcordeonCalendarioRSISH) {
      this.misRegistros = this.registros;

      if (this.titulo)
        this.encabezado = this.titulo;
      else
        this.encabezado = 'Calendario Tributario'
    }
  }

  identificador(){
    return `calendarioRS-${ this.id?this.id:''}`;
  }
}
