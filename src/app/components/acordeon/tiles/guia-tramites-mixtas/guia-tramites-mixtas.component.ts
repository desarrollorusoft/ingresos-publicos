import { Component, OnInit, Input } from '@angular/core';
import { Acordeon, AcordeonGuiasTramitesMixtas } from '../../../../../data/data.model';

@Component({
  selector: 'app-guia-tramites-mixtas',
  templateUrl: './guia-tramites-mixtas.component.html',
  styleUrls: ['./guia-tramites-mixtas.component.scss']
})
export class GuiaTramitesMixtasComponent implements OnInit {

  @Input() acordeon: Acordeon;
  miAcordeon: AcordeonGuiasTramitesMixtas;

  constructor() { }

  ngOnInit() {
    if (this.acordeon instanceof AcordeonGuiasTramitesMixtas) {
      this.miAcordeon = this.acordeon;
    }
  }
}
