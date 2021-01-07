import { Component, OnInit, Input } from '@angular/core';
import { RegistroAcordeonCalendarioABL } from '../../../../../data/data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario-abl',
  templateUrl: './calendario-abl.component.html',
  styleUrls: ['./calendario-abl.component.scss']
})
export class CalendarioAblComponent implements OnInit {

  @Input() registros: any[];
  misRegistros: RegistroAcordeonCalendarioABL[];
  @Input() titulo: string;
  encabezado: string;
  @Input()
  id:number;
  @Input()
  bajada:string;

  constructor(private _router: Router) { }

  ngOnInit() {
    if (this.registros instanceof Array && this.registros && this.registros.length > 0 && this.registros[0] instanceof RegistroAcordeonCalendarioABL) {
      this.misRegistros = this.registros;

      if (this.titulo)
        this.encabezado = this.titulo;
      else
        this.encabezado = 'Calendario Tributario'
    }
  }

  identificador() {
    return `calendarioComun-${ this.id?this.id:''}`;
  }

  esCalendarioTributario(){
    return this._router.isActive('/info/calendarioTributario',true);
  }
}
