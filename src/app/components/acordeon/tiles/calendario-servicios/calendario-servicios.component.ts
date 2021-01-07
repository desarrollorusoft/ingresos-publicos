import { Component, OnInit, Input } from '@angular/core';
import { AcordeonCalendarioServiciosVarios, Acordeon } from '../../../../../data/data.model';

@Component({
  selector: 'app-calendario-servicios',
  templateUrl: './calendario-servicios.component.html',
  styleUrls: ['./calendario-servicios.component.scss']
})
export class CalendarioServiciosComponent implements OnInit {

  @Input() acordeon: Acordeon;
  miAcordeon: AcordeonCalendarioServiciosVarios;
  @Input() titulo: string;
  encabezado: string;
  @Input()
  bajada:string;


  constructor() { }

  ngOnInit() {
    if (this.acordeon instanceof AcordeonCalendarioServiciosVarios) {
      this.miAcordeon = this.acordeon;

      if (this.titulo)
        this.encabezado = this.titulo;
      else
        this.encabezado = 'Calendario Tributario';
    }
  }
}
