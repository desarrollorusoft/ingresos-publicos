import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { CategoriaPregunta } from '../../../../data/data.model';
import { DATA } from '../../../../assets/data/modelo.data';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.scss']
})
export class PreguntasFrecuentesComponent implements OnInit {

  categoriasPreguntas: CategoriaPregunta[] = DATA.preguntas;

  acordeones: Element[];

  constructor() { }


  ngOnInit() {}

  buscar( event:any ){
    if(!this.acordeones){
      this.acordeones =  Array.from(document.querySelectorAll('[rel="buscable"]'));
    }
    this.acordeones.forEach( acordeon => {
        acordeon.classList.remove('show');
        const tieneContenido=this.chequearYPintarTexto(acordeon, event.target.value );
        if(tieneContenido){
          acordeon.classList.add( 'show' );
        }

    });
  }

  private chequearYPintarTexto(objeto: Element, aBuscar:string ){
//FALTA PINTAR
  const contenibles = Array.from(objeto.querySelectorAll('[rel="contenido-buscable"]'));
    for( let i = 0; i<contenibles.length; i++){
      if( contenibles[i].innerHTML.indexOf( aBuscar ) >= 0  ){
        return true;
      }
    }

    return false;
  }

  // buscar( event:any ) {
  //   if (!this.acordeones) {
  //     this.acordeones =  Array.from(document.querySelectorAll('[rel="buscable"]'));
  //   }

  //   this.acordeones.forEach( acordeon => {
  //       acordeon.classList.remove('show');
  //       const tieneContenido = this.chequearYPintarTexto(acordeon, event.target.value );
  //       if (tieneContenido) {
  //         acordeon.classList.add( 'show' );
  //       }
  //   });
  // }

  // private chequearYPintarTexto(objeto: Element, aBuscar:string ) {
  //   let hay: boolean = false;
  //   this.limpiarBusquedasAnteriores(objeto);
  //   const contenibles = Array.from(objeto.querySelectorAll('[rel="contenido-buscable"]'));

  //   for ( let i = 0; i < contenibles.length; i++ ) {
  //     let sePinto = this.pintarElementos( contenibles[i], aBuscar );
  //     hay = hay || sePinto;
  //   }

  //   return hay;
  // }

  // private pintarElementos( elemento: Element, texto: string ) {
  //   let hay: boolean = false;

  //   hay = this.pintar(elemento, texto);
  //   if ( elemento.children.length > 0 ) {
  //     // for (let i = 0; i < elemento.children.length; i++) {
  //     //   if ( !elemento.children[i].className.includes('resaltado-busqueda') ) {
  //     //     const element = elemento.children[i];
  //     //     let sePinto = this.pintarElementos( element, texto );
  //     //     hay = hay || sePinto;
  //     //   }
  //     // }
  //   }

  //   return hay;
  // }

  // private pintar( elemento: Element, texto: string ) {
  //   if ( !texto )
  //     return false;

  //   let nuevo: string = '';
  //   let contenido: string = elemento.innerHTML;
  //   let posicion = contenido.toUpperCase().indexOf( texto.toUpperCase() );

  //   while ( posicion >= 0 ) {
  //     nuevo += contenido.substring( 0, posicion );
  //     nuevo += this.tag_inicio + contenido.substring( posicion, posicion + texto.length ) + this.tag_cierre;
  //     contenido = contenido.substring( posicion + texto.length );
  //     posicion = contenido.toUpperCase().indexOf( texto.toUpperCase() );
  //   }

  //   // Se le agrega lo que resta
  //   nuevo += contenido;

  //   // Solo se cambia el inner se se trabajo
  //   if ( nuevo ) {
  //     elemento.innerHTML = nuevo;
  //     return true;
  //   } else
  //     return false;
  // }

  // private limpiarBusquedasAnteriores( elemento: Element ) {
  //   let nuevo: string = '';
  //   let contenido: string = elemento.innerHTML;
  //   let posicion = contenido.indexOf( this.tag_inicio );

  //   while ( posicion >= 0 ) {
  //     nuevo += contenido.substring(0, posicion );
  //     nuevo += contenido.substring( posicion + this.tag_inicio.length, contenido.indexOf(this.tag_cierre) );
  //     contenido = contenido.substring( contenido.indexOf(this.tag_cierre) + this.tag_cierre.length );
  //     posicion = contenido.indexOf( this.tag_inicio );
  //   }

  //   // Se le agrega lo que resta
  //   nuevo += contenido;

  //   // Solo se cambia el inner se se trabajo
  //   if ( nuevo )
  //     elemento.innerHTML = nuevo;
  // }
}
