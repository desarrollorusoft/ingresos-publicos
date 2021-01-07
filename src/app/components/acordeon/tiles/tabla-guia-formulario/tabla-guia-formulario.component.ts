import { Component, OnInit, Input } from '@angular/core';
import { RegistroAcordeonGuiasTramiteFormularios } from '../../../../../data/data.model';

@Component({
  selector: 'app-tabla-guia-formulario',
  templateUrl: './tabla-guia-formulario.component.html',
  styleUrls: ['./tabla-guia-formulario.component.scss']
})
export class TablaGuiaFormularioComponent implements OnInit {

  @Input() registros: RegistroAcordeonGuiasTramiteFormularios;
  @Input() noMuestroInfo: boolean = false;


  constructor() { }

  ngOnInit() { }
}
