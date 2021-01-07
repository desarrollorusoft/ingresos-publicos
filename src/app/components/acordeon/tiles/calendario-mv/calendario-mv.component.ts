import { Component, OnInit, Input } from '@angular/core';
import { RegistroAcordeon, RegistroAcordeonCalendarioMV } from '../../../../../data/data.model';

@Component({
  selector: 'app-calendario-mv',
  templateUrl: './calendario-mv.component.html',
  styleUrls: ['./calendario-mv.component.scss']
})
export class CalendarioMvComponent implements OnInit {

  @Input() registros: any[];
  misRegistros: RegistroAcordeonCalendarioMV[];
  @Input() titulo: string;
  encabezado: string;
  @Input()
  id:number;
  @Input()
  bajada:string;


  constructor() { }

  ngOnInit() {
    if (this.registros instanceof Array && this.registros && this.registros.length > 0 && this.registros[0] instanceof RegistroAcordeonCalendarioMV) {
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
