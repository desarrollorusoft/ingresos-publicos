import { Component, OnInit, Input } from '@angular/core';
import { RegistroAcordeonCalendario } from '../../../../../data/data.model';

@Component({
  selector: 'app-calendario-comun',
  templateUrl: './calendario-comun.component.html',
  styleUrls: ['./calendario-comun.component.scss']
})
export class CalendarioComunComponent implements OnInit {

  @Input() registros: any[];
  misRegistros: RegistroAcordeonCalendario[];
  @Input() titulo: string;
  encabezado: string;
  @Input()
  id:number;
  @Input()
  bajada:string;

  constructor() { }

  ngOnInit() {
      if (this.registros instanceof Array && this.registros && this.registros.length > 0 && this.registros[0] instanceof RegistroAcordeonCalendario) {
      this.misRegistros = this.registros;

      if (this.titulo)
        this.encabezado = this.titulo;
      else
        this.encabezado = 'Calendario Tributario'
    }
  }

  identificador(){
    return `calendarioComun-${ this.id?this.id:''}`;
  }
}
