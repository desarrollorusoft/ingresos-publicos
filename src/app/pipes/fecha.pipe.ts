import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {


  MESES=["enero",
         "febrero",
         "marzo",
         "abril",
         "mayo",
         "junio",
         "julio",
         "agosto",
         "septiembre",
         "octubre",
         "noviembre",
         "diciembre"]

  transform(fecha: Date, args?: any): any {
    if( fecha ){
      const dia = fecha.getDay().toString().length > 1?fecha.getDay().toString(): `0${fecha.getDay().toString()}`;

      return `${dia} de ${this.MESES[fecha.getMonth()]} de ${fecha.getFullYear()}`;
    }
    return '';
  }

}
