import { MEDIOS_PAGO_V } from './../../../assets/data/medios-pago.data';
import { MPTramite, MedioPago, TIPO_MP } from './../../../data/medios-pago.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, NavigationEnd } from '../../../../node_modules/@angular/router';
import { Tramite } from '../../../data/data.model';
import { TRAMITES } from '../../../assets/data/modelo.data';
import * as $ from 'jquery';

@Component({
  selector: 'app-typ',
  templateUrl: './typ.component.html',
  styleUrls: ['./typ.component.scss']
})
export class TypComponent implements OnInit {

  tramite: Tramite;
  clave:string;
  mediosPago: MPTramite;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe( params =>{
      this.clave = params['codigo'];
      this.tramite = TRAMITES[this.clave];
      this.mediosPago = MEDIOS_PAGO_V[params['codigo']];

      $(document).ready( () => {
        if( params['mp']){
          const alto = ($('#pagos-habilitados').offset().top - $("#navbar").height());

          $("html,body").animate({scrollTop:alto}, 600);
        }
      })

    });
  }

  ngOnInit() {}

  esIcono(medio:MedioPago){
    return medio.tipo === TIPO_MP.ICONO;
  }

  esCementerio(){
    return this.clave === 'derechosCementerio';
  }
}
