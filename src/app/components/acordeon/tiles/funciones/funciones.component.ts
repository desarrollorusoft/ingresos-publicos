import { Component, OnInit, Input } from '@angular/core';
import { AcordeonFunciones, Acordeon } from '../../../../../data/data.model';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.scss']
})
export class FuncionesComponent implements OnInit {

  @Input() acordeon: Acordeon;
  miAcordeon: AcordeonFunciones;

  constructor() { }

  ngOnInit() {
    if (this.acordeon instanceof AcordeonFunciones)
      this.miAcordeon = this.acordeon;
  }
}