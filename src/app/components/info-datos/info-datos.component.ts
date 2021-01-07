import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { INFORMACION_DATOS } from '../../../assets/data/modelo.data';
import { InformacioyHerramitentas } from '../../../data/data.model';

@Component({
  selector: 'app-info-datos',
  templateUrl: './info-datos.component.html',
  styleUrls: ['./info-datos.component.scss']
})
export class InfoDatosComponent implements OnInit {

  data: InformacioyHerramitentas;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      this.data = INFORMACION_DATOS[params['codigo']];
    });
  }

  ngOnInit() { }

  public obtenerTitulo() {
      return this.data ? this.data.titulo : 'Información y Datos Útiles';
  }
}
