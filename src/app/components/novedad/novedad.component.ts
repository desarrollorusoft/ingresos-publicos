import { NOVEDADES } from './../../../assets/data/modelo.data';
import { Component, OnInit } from '@angular/core';
import { Novedad } from '../../../data/data.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novedad',
  templateUrl: './novedad.component.html',
  styleUrls: ['./novedad.component.scss']
})
export class NovedadComponent implements OnInit {
  
  novedad: Novedad;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params =>{
      this.buscarNovedad(params['codigo']);
   });
  }

  ngOnInit() {
  }

  private buscarNovedad( codigo: string ) {
    NOVEDADES.forEach(n => {
      if (n.id == codigo)
        this.novedad = n;
    });
  }
}
