import { Component, OnInit } from '@angular/core';
import { ListaFormularios } from '../../../../data/data.model';
import { DATA } from '../../../../assets/data/modelo.data';

@Component({
  selector: 'app-guias-tramite',
  templateUrl: './guias-tramite.component.html',
  styleUrls: ['./guias-tramite.component.scss']
})
export class GuiasTramiteComponent implements OnInit {

  guiasTramite: ListaFormularios[] = DATA.guiasTramite;
  unaGuia: ListaFormularios;

  constructor() { }

  ngOnInit() {
    this.unaGuia = this.guiasTramite[0];  
  }

}
