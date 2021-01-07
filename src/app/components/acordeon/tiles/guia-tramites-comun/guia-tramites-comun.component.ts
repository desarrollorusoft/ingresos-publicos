import { Component, OnInit, Input } from '@angular/core';
import { Acordeon, AcordeonGuiasTramitesFormularios } from '../../../../../data/data.model';

@Component({
  selector: 'app-guia-tramites-comun',
  templateUrl: './guia-tramites-comun.component.html',
  styleUrls: ['./guia-tramites-comun.component.scss']
})
export class GuiaTramitesComunComponent implements OnInit {

  @Input() acordeon: Acordeon;
  miAcordeon: AcordeonGuiasTramitesFormularios;

  constructor() { }

  ngOnInit() {
    if (this.acordeon instanceof AcordeonGuiasTramitesFormularios)
      this.miAcordeon = this.acordeon;
  }
}