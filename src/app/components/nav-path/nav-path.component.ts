import { Ruta } from './../../../data/sitemap.model';
import { RUTAS } from '../../../assets/data/sitemap.data';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-path',
  templateUrl: './nav-path.component.html',
  styleUrls: ['./nav-path.component.scss']
})
export class NavPathComponent implements OnInit {

  rutas:Ruta[] = [];

  constructor(private router:Router) {
    this.router.events.subscribe(evt =>{

      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      this.rutas = [new Ruta("Inicio","/inicio")]
      this.separarRutas( this.router.url );
    });
  }

  ngOnInit() {
  }

  separarRutas( url:string){
    url.split("/").forEach( url  => {
      const ruta = RUTAS[url];
      if( ruta ){
        this.rutas = this.rutas.concat( ruta );
      }
    });
  }

  meMuestro(){
    return this.rutas.length > 1;
  }

  esActivo( path:Ruta){
    return this.router.url === path.url;
  }

}
