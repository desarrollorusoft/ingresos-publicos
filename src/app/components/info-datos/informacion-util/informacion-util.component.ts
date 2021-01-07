import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DATOS_ATENCION, DATA } from '../../../../assets/data/modelo.data';
import { Delegacion, LinkInteres, MediosPago } from '../../../../data/data.model';

import * as $ from 'jquery';


@Component({
  selector: 'app-informacion-util',
  templateUrl: './informacion-util.component.html',
  styleUrls: ['./informacion-util.component.scss']
})
export class InformacionUtilComponent implements OnInit {

  datosAtencion: any[] = DATOS_ATENCION;
  delegaciones: Delegacion[] = DATA.delegaciones;
  links: LinkInteres[] = DATA.infoLinks;
  medios: MediosPago[] = DATA.mediosPagos;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe( params =>{
      const muestro = params["muestro"];

      let elemento :any;
      $(document).ready( () => {
        if( muestro === 'pm'){
          elemento = $("#btn-pm");
          document.getElementById("btn-pm").attributes["aria-expanded"] = true ;
          document.getElementById("horariosAtencionCollapse").classList.add('show');
        }
        else if (muestro === 'dm'){
          elemento = $("#delegacionesMunicipales");
          document.getElementById("btn-dm").attributes["aria-expanded"] = true ;
          document.getElementById("delegacionesMunicipalesCollapse").classList.add('show');
        }

        if( elemento ){
          $("html,body").animate({scrollTop:elemento.offset().top - $("#navbar").height()}, 600);
        }
      });
    });
  }


  ngOnInit() {
  }
}

