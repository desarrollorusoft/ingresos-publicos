export class Fila{

  medios:MedioPago[];
  constructor( medios:MedioPago[] ){

    this.medios = medios;

  }
}

export enum TIPO_MP {ICONO,URL};

export class MedioPago{

  tipo: TIPO_MP;
  url: String;
  clave:string;

  constructor( tipo:TIPO_MP, url: string, clave:string){
    this.tipo = tipo;
    this.url = url;
    this.clave = clave;
  }

}

export class Icono extends MedioPago{

  claseEspecial:boolean;

  constructor( url:string, claseEspecial: boolean, clave:string ){
    super( TIPO_MP.ICONO, url, clave );
    this.claseEspecial = claseEspecial;
  }
}


export class Link extends MedioPago{

  nombre: string;


  constructor( url:string , nombre: string, clave:string){
    super( TIPO_MP.URL, url , clave);
    this.nombre = nombre;
  }
}

export class MPTramite{
  pagoOnline: Fila[];
  pagoPresencial: Fila[];
  pagoTelefonico: Fila[];
  debitoAutomatico: Fila[];

  constructor( pagoOnline:Fila[], pagoPresencial:Fila[], pagoTelefonico:Fila[], debitoAutomatico:Fila[] ){

    this.pagoOnline = pagoOnline;
    this.pagoPresencial = pagoPresencial;
    this.pagoTelefonico = pagoTelefonico;
    this.debitoAutomatico = debitoAutomatico;
  }
}
