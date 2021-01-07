import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'styleSeguro'
})
export class StyleSeguroPipe implements PipeTransform {

  constructor( private sanitization: DomSanitizer ){}

  transform(value: any, args?: any): any {
    return this.sanitization.bypassSecurityTrustStyle( value );
  }

}
