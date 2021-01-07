import {NAVEGABLES, URL_BASE_ARCHIVOS} from './../../../assets/data/modelo.data';
import { Component, OnInit } from '@angular/core';
import { Inicio, Novedad } from '../../../data/data.model';
import { DATA } from '../../../assets/data/modelo.data';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  inicio: Inicio;
  novedades: Novedad[] = [];
  redireccionABL: string;
  redireccionAuto: string;
  redireccionMoto: string;

  constructor(private ar: ActivatedRoute) {
    this.inicio = DATA.inicio;
    this.novedades = this.novedades.concat( this.inicio.novedades);
    this.redireccionABL = URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Adhesion_a_Boleta_Electronica.pdf';
    this.redireccionAuto = URL_BASE_ARCHIVOS + 'guia/AUTO/Guia_de_Tramite_Automotor_Motovehiculo_Adhesion_a_Boleta_Electronica.pdf';
    this.redireccionMoto = URL_BASE_ARCHIVOS + 'guia/MOTO/Guia_de_Tramite_Automotor_Motovehiculo_Adhesion_a_Boleta_Electronica.pdf';
  }

  ngOnInit() {


    $(document).ready( () => {

        let navegable = NAVEGABLES.find( el => window.location.href.indexOf(el) > 0);

        if( navegable ){
          $('html, body').animate({scrollTop:$(`#${navegable}`).offset().top - $("#navbar").height()},200)
        }


    } )

  }

   avanzar(){
    const novedad: Novedad = this.novedades[0];
    this.novedades = this.novedades.splice(1);
    this.novedades.push( novedad );
   }

   retroceder(){
     const novedad = this.novedades.pop();
     this.novedades.unshift(novedad);
   }

   order(i){
    return `order: ${i}`;
  }
}
