import { Component, OnInit, Input } from '@angular/core';
import { RegistroAcordeon, RegistroAcordeonCalendarioCementerio } from '../../../../../data/data.model';

@Component({
  selector: 'app-calendario-cementerio',
  templateUrl: './calendario-cementerio.component.html',
  styleUrls: ['./calendario-cementerio.component.scss']
})
export class CalendarioCementerioComponent implements OnInit {

  @Input() registros: any[];
  misRegistros: RegistroAcordeonCalendarioCementerio[];
  @Input() titulo: string;
  encabezado: string;
  @Input()
  id:number;
  @Input()
  bajada:string;

  constructor() { }

  ngOnInit() {
    if (this.registros instanceof Array && this.registros && this.registros.length > 0 && this.registros[0] instanceof RegistroAcordeonCalendarioCementerio) {
      this.misRegistros = this.registros;

      if (this.titulo)
        this.encabezado = this.titulo;
      else
        this.encabezado = 'Calendario Tributario'
    }
  }

  identificador(){
    return `calendarioCementerio-${ this.id?this.id:''}`;
  }
}
