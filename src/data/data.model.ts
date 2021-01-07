export class Inicio {

    urlCarousel: CarruselInicio[];
    bannerFijo: CarruselInicio;
    tramitesYPagos: CategoriaTramite[];
    informacionYHerramientas: InformacioyHerramitentas[];
    novedades: Novedad[];
    declaracionesJuradasYPagos: Tramite[];
    otrosTramites: Tramite[];

    constructor(urls: CarruselInicio[],
                bannerFijo: CarruselInicio,
                tramites: CategoriaTramite[],
                infos: InformacioyHerramitentas[],
                novedades: Novedad[],
                declaracionesJuradasYPagos: Tramite[],
                otrosTramites: Tramite[]) {

        this.urlCarousel = urls;
        this.tramitesYPagos = tramites;
        this.novedades = novedades;
        this.informacionYHerramientas = infos;
        this.declaracionesJuradasYPagos = declaracionesJuradasYPagos;
        this.otrosTramites = otrosTramites;
        this.bannerFijo = bannerFijo;
    }
}

export class CategoriaTramite {

    nombre: string;
    clases: string;
    tramites: Tramite[];

    constructor( nombre: string,
                 clases: string,
                 tramites: Tramite[]) {
        this.nombre = nombre;
        this.clases = clases;
        this.tramites = tramites;
    }
}

export class Tramite {

    icono: string;
    titulo: string;
    contenido: string;
    botonRedireccion: BotonRedireccion;
    link: string/*ruteo de angular*/;
    acordeones: Acordeon[];
    banners: CarruselInicio[];
    bannerFijo: CarruselInicio;

    constructor(icono: string,
                titulo: string,
                contenido: string,
                botonRedireccion: BotonRedireccion,
                acordeones: Acordeon[],
                link: string,
                banners: CarruselInicio[],
                bannerFijo: CarruselInicio) {

        this.icono = icono;
        this.titulo = titulo;
        this.contenido = contenido;
        this.botonRedireccion = botonRedireccion;
        this.acordeones = acordeones;
        this.link = link;
        this.banners = banners;
        this.bannerFijo = bannerFijo;
    }
}

export class Acordeon {
    tipo: TIPOS_ACORDEONES;
    registros: RegistroAcordeon[];

    constructor(tipo: TIPOS_ACORDEONES,
                registros: RegistroAcordeon[]) {
        this.tipo = tipo;
        this.registros = registros;
    }
}

export class RegistroAcordeon {
    nombre: string;

    constructor( nombre: string ) {
        this.nombre = nombre;
    }
}

export class AcordeonGuiasTramitesFormularios extends Acordeon {

    constructor( registros: RegistroAcordeonGuiasTramiteFormularios[] ) {
        super( TIPOS_ACORDEONES.GUIA_TRAMITE_FORMULARIO, registros );
    }
}

export class RegistroAcordeonGuiasTramiteFormularios extends RegistroAcordeon {

    urlGuiaTramite: string[];
    urlPreguntaFrecuente: string;
    urlFormulario: string[];
    consultaOnline: boolean;

    constructor(nombre: string,
                urlGuiaTramite: string[],
                urlPreguntaFrecuente: string,
                urlFormulario: string[],
                consultaOnline: boolean) {

        super( nombre );
        this.urlGuiaTramite = urlGuiaTramite;
        this.urlPreguntaFrecuente = urlPreguntaFrecuente;
        this.urlFormulario = urlFormulario;
        this.consultaOnline = consultaOnline;
    }
}

export class AcordeonGuiasTramitesMixtas extends Acordeon {

    texto: string;
    notas: RegistroAcordeonNotas[];

    constructor(registros: RegistroAcordeonGuiasTramiteFormularios[],
                texto: string,
                notas: RegistroAcordeonNotas[]) {
        super( TIPOS_ACORDEONES.GUIA_TRAMITE_MIXTAS, registros );
        this.texto = texto;
        this.notas = notas;
    }
}

export class AcordeonCalendario extends Acordeon {

    constructor( registros: RegistroAcordeonCalendario[] ) {
        super( TIPOS_ACORDEONES.CALENDARIO, registros );
    }
}

export class RegistroAcordeonCalendario extends RegistroAcordeon {

    primerVencimiento: string;
    segundoVencimiento: string;

    constructor(cuota: string,
                primerVencimiento: string,
                segundoVencimiento: string) {

        super( cuota );
        this.primerVencimiento = primerVencimiento;
        this.segundoVencimiento = segundoVencimiento;
    }
}

export class RegistroAcordeonCalendarioABL extends RegistroAcordeon {

    primerVencimiento: string;
    segundoVencimiento: string;

    constructor(cuota: string,
                primerVencimiento: string,
                segundoVencimiento: string) {

        super( cuota );
        this.primerVencimiento = primerVencimiento;
        this.segundoVencimiento = segundoVencimiento;
    }
}

export class AcordeonCalendarioRSISH extends Acordeon {

    constructor( registros: RegistroAcordeonCalendarioRSISH[] ) {
        super( TIPOS_ACORDEONES.CALENDARIO_RSISH, registros );
    }
}

export class RegistroAcordeonCalendarioRSISH extends RegistroAcordeon {

    vencimiento: string;

    constructor(periodo: string,
                vencimiento: string) {

        super( periodo );
        this.vencimiento = vencimiento;
    }
}

export class AcordeonCalendarioMV extends Acordeon {

    constructor( registros: RegistroAcordeonCalendarioMV[] ) {
        super( TIPOS_ACORDEONES.CALENDARIO_MV, registros );
    }
}

export class RegistroAcordeonCalendarioMV extends RegistroAcordeon {

    fechaDeclaracion: string;
    vencimiento: string;

    constructor(periodo: string,
                fechaDeclaracion: string,
                vencimiento: string) {

        super( periodo );
        this.fechaDeclaracion = fechaDeclaracion;
        this.vencimiento = vencimiento;
    }
}

export class AcordeonCalendarioARBA extends Acordeon {

    constructor() {
        super( TIPOS_ACORDEONES.CALENDARIO_ARBA, [] );
    }
}

export class AcordeonCalendarioTrimestral extends Acordeon {

    constructor( registros: RegistroAcordeonCalendarioTrimestral[] ) {
        super( TIPOS_ACORDEONES.CALENDARIO_TRIMESTRAL, registros );
    }
}

export class AcordeonCalendarioTrimestralOepAntena extends Acordeon {

    constructor( registros: RegistroAcordeonCalendarioTrimestralOepAntena[] ) {
        super( TIPOS_ACORDEONES.CALENDARIO_TRIMESTRAL_OEP_ANTENAS, registros );
    }
}

export class RegistroAcordeonCalendarioTrimestral extends RegistroAcordeon {

    fechaDeclaracion: string;

    constructor(trimestre: string,
                fechaDeclaracion: string) {

        super( trimestre );
        this.fechaDeclaracion = fechaDeclaracion;
    }
}

export class RegistroAcordeonCalendarioTrimestralOepAntena extends RegistroAcordeon {

    fechaDeclaracion: string;

    constructor(trimestre: string,
                fechaDeclaracion: string) {

        super( trimestre );
        this.fechaDeclaracion = fechaDeclaracion;
    }
}

export class RegistroAcordeonCalendarioTrimestralVencimiento extends RegistroAcordeon {

  vencimiento: string;

  constructor(trimestre: string,
              vencimiento: string) {

      super( trimestre );
      this.vencimiento = vencimiento;
  }
}

export class RegistroAcordeonCalendarioCuatrimestralVencimiento extends RegistroAcordeon {

  vencimiento: string;

  constructor(cuatrimestre: string,
              vencimiento: string) {

    super( cuatrimestre );
    this.vencimiento = vencimiento;
  }
}

export class AcordeonCalendarioServiciosVarios extends Acordeon {

    fechaDeclaracion: string;

    constructor( fechaDeclaracion: string ) {
        super( TIPOS_ACORDEONES.CALENDARIO_SERVICIOS, [] );
        this.fechaDeclaracion = fechaDeclaracion;
    }
}

export class AcordeonCalendarioCementerio extends Acordeon {

    constructor( registros: RegistroAcordeonCalendarioCementerio[] ) {
        super( TIPOS_ACORDEONES.CALENDARIO_CEMENTERIO, registros );
    }
}

export class RegistroAcordeonCalendarioCementerio extends RegistroAcordeon {

    vencimiento: string;

    constructor(cuota: string,
                vencimiento: string) {

        super( cuota );
        this.vencimiento = vencimiento;
    }
}

export class AcordeonNormativa extends Acordeon {

    constructor( registros: RegistroAcordeonNormativa[] ) {
        super( TIPOS_ACORDEONES.NORMATIVA, registros );
    }
}

export class AcordeonSin extends Acordeon {
    constructor(){
      super( TIPOS_ACORDEONES.NORMATIVA, []);
    }
}

export class RegistroAcordeonNormativa extends RegistroAcordeon {

    normativas: Normativa[];

    constructor(normativas: Normativa[]) {
        super('Normativa Tributaria');
        this.normativas = normativas;
    }
}

export class AcordeonNotas extends Acordeon {

    constructor( registros: RegistroAcordeonNotas[] ) {
        super( TIPOS_ACORDEONES.NOTAS, registros );
    }
}

export class RegistroAcordeonNotas extends RegistroAcordeon {

    url: string;

    constructor(nombre: string,
                url: string) {
        super(nombre);
        this.url = url;
    }
}

export class AcordeonNormativaARBA extends Acordeon {

    constructor() {
        super( TIPOS_ACORDEONES.NORMATIVA_ARBA, [] );
    }
}

export class AcordeonInstructivos extends Acordeon {

    constructor( registros: RegistroAcordeonInstructivos[] ) {
        super( TIPOS_ACORDEONES.INSTRUCTIVOS, registros );
    }
}

export class RegistroAcordeonInstructivos extends RegistroAcordeon {

    url: string;

    constructor(titulo: string,
                url: string) {

        super( titulo );
        this.url = url;
    }
}

export class AcordeonLinkInteres extends Acordeon {

    constructor( registros: RegistroAcordeonLinkInteres[] ) {
        super( TIPOS_ACORDEONES.LINK_INTERES, registros );
    }
}

export class RegistroAcordeonLinkInteres extends RegistroAcordeon {

    nombreUrlEspecifica: string;
    urlEspecifica: string;
    nombreUrlFuente: string;
    urlFuente: string;

    constructor(titulo: string,
                nombreUrlEspecifica: string,
                urlEspecifica: string,
                nombreUrlFuente: string,
                urlFuente: string) {

        super( titulo );
        this.nombreUrlEspecifica = nombreUrlEspecifica;
        this.urlEspecifica = urlEspecifica;
        this.nombreUrlFuente = nombreUrlFuente;
        this.urlFuente = urlFuente;
    }
}

export class AcordeonFunciones extends Acordeon {

    texto: string;

    constructor( texto: string ) {
        super( TIPOS_ACORDEONES.FUNCIONES, [] );
        this.texto = texto;
    }
}

export class InformacioyHerramitentas {

    clave: string;
    icono: string;
    titulo: string;
    link: string/*ruteo de angular*/;
    carousel: CarruselInicio[];

    constructor(clave: string,
                icono: string,
                titulo: string,
                link: string,
                carousel?: CarruselInicio[]) {
        this.clave = clave;
        this.icono = icono;
        this.titulo = titulo;
        this.link = link;
        this.carousel = carousel;
    }
}

export class Novedad {

    id: string;
    urlImagenPrincipal: string;
    urlImagenes: string[];
    encabezado: string;
    fecha: string;
    lugar: string;
    texto: string;
    lugarAbreviado: string;
    tituloMin: string;

    constructor(id: string,
                urlImagen: string,
                urlImagenes: string[],
                encabezado:string,
                fecha: string,
                lugar: string,
                texto: string,
                lugarAbreviado: string,
                tituloMin = encabezado) {
        this.id = id;
        this.urlImagenPrincipal = urlImagen;
        this.urlImagenes = urlImagenes;
        this.encabezado = encabezado;
        this.texto = texto;
        this.fecha = fecha;
        this.lugar = lugar;
        this.lugarAbreviado = lugarAbreviado;
        this.tituloMin = tituloMin
    }
}

export class BotonRedireccion {

    titulo: string;
    encabezado: string;
    redirigeInterno: boolean;
    urlARedirigir: string; /*ya sea angular o externa*/

    constructor(titulo: string,
                encabezado: string,
                redirigeInterno: boolean,
                urlARedirigir: string) {

        this.titulo = titulo;
        this.redirigeInterno = redirigeInterno;
        this.urlARedirigir = urlARedirigir;
        this.encabezado = encabezado;
    }
}

export class Pagos{

    pagos: Pago[];

    constructor( pagos: Pago[] ) {
        this.pagos = pagos;
    }
}

export class Pago {

    tipoPago: string;
    urls: string[];

    constructor(tipoPago: string,
                urls: string[]) {

        this.tipoPago = tipoPago;
        this.urls = urls;
    }
}

export class Delegacion {

    titulo: string;
    ubicacion: string;
    localizacion: GeoLocalizacion; // Para despues
    telefono: string;
    mail: string;
    horario: string;

    constructor(titulo: string,
                ubicacion: string,
                telefono: string,
                mail: string,
                horario: string) {
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.telefono = telefono;
        this.mail = mail;
        this.horario = horario;
    }
}

export class GeoLocalizacion {

    latitud: string;
    longitud: string;

    constructor(latitud: string,
                longitud: string) {
        this.latitud = latitud;
        this.longitud = longitud;
    }
}

export class LinkInteres {
    titulo: string;
    descripcion: string;
    nombreUrl: string;
    url: string;

    constructor(titulo: string,
                descripcion: string,
                nombreUrl: string,
                url: string) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.nombreUrl = nombreUrl;
        this.url = url;
    }
}

export class MediosPago {
    titulo: string;
    tipos: string[];

    constructor(titulo: string,
                tipos: string[]) {
        this.titulo = titulo;
        this.tipos = tipos;
    }
}

export class ListaFormularios {

    titulo: string;
    lista: RegistroAcordeonGuiasTramiteFormularios[];

    constructor(titulo: string,
                lista: RegistroAcordeonGuiasTramiteFormularios[]) {
        this.titulo = titulo;
        this.lista = lista;
    }
}

export class ListaCalendarioComun {
    titulo: string;
    lista: RegistroAcordeonCalendario[];
    bajada: string;

    constructor(titulo: string,
                lista: RegistroAcordeonCalendario[],
                bajada: string) {
        this.titulo = titulo;
        this.lista = lista;
        this.bajada = bajada
    }
}

export class ListaCalendarioRSISH {
    titulo: string;
    lista: RegistroAcordeonCalendarioRSISH[];
    bajada: string;

    constructor(titulo: string,
                lista: RegistroAcordeonCalendarioRSISH[],
                bajada: string) {
        this.titulo = titulo;
        this.lista = lista;
        this.bajada = bajada
    }
}

export class ListaCalendarioMV {
    titulo: string;
    lista: RegistroAcordeonCalendarioMV[];
    bajada: string;

    constructor(titulo: string,
                lista: RegistroAcordeonCalendarioMV[],
                bajada:string) {
        this.titulo = titulo;
        this.lista = lista;
        this.bajada = bajada
    }
}

export class ListaCalendarioTrimestral {
    titulo: string;
    lista: RegistroAcordeonCalendarioTrimestral[];
    bajada: string;

    constructor(titulo: string,
                lista: RegistroAcordeonCalendarioTrimestral[],
                bajada: string) {
        this.titulo = titulo;
        this.lista = lista;
        this.bajada = bajada;
    }
}

export class ListaCalendarioTrimestralOepAntena {
    titulo: string;
    lista: RegistroAcordeonCalendarioTrimestralOepAntena[];
    bajada: string;

    constructor(titulo: string,
                lista: RegistroAcordeonCalendarioTrimestralOepAntena[],
                bajada: string) {
        this.titulo = titulo;
        this.lista = lista;
        this.bajada = bajada;
    }
}

export class ListaCalendarioTrimestralConVencimiento{
    titulo: string;
    lista: RegistroAcordeonCalendarioTrimestralVencimiento[];
    bajada: string;

    constructor(titulo: string,
                lista: RegistroAcordeonCalendarioTrimestralVencimiento[],
                bajada: string) {
        this.titulo = titulo;
        this.lista = lista;
        this.bajada = bajada;
    }
}

export class ListaCalendarioCuatrimestralConVencimiento{
  titulo: string;
  lista: RegistroAcordeonCalendarioCuatrimestralVencimiento[];
  bajada: string;

  constructor(titulo: string,
              lista: RegistroAcordeonCalendarioCuatrimestralVencimiento[],
              bajada: string) {
    this.titulo = titulo;
    this.lista = lista;
    this.bajada = bajada;
  }
}

export class ListaCalendarioCementerio {
    titulo: string;
    lista: RegistroAcordeonCalendarioCementerio[];
    bajada: string;

    constructor(titulo: string,
                lista: RegistroAcordeonCalendarioCementerio[],
                bajada: string) {
        this.titulo = titulo;
        this.lista = lista;
        this.bajada = bajada;
      }
}

export class CategoriaPregunta {

    id: string;
    titulo: string;
    lista: Pregunta[];

    constructor(id: string,
                titulo: string,
                lista: Pregunta[]) {
        this.id = id;
        this.titulo = titulo;
        this.lista = lista;
    }
}

export class Pregunta {

    id: string;
    encabezado: string;
    detalle: string;

    constructor(id: string,
                encabezado: string,
                detalle: string) {
        this.id = id;
        this.encabezado = encabezado;
        this.detalle = detalle;
    }
}

export class Empleado {

    nombre: string;
    rol: string;
    area: string;
    img: string;
    xoffset: string;
    yoffset: string;

    constructor(nombre: string,
                rol: string,
                area: string,
                img: string,
                xoffset: string,
                yoffset: string) {
        this.nombre = nombre;
        this.rol = rol;
        this.area = area;
        this.img = img;
        this.xoffset = xoffset;
        this.yoffset = yoffset;
    }
}

export class CategoriaNormativa {
    titulo: string;
    normativas: Normativa[];
    contenidoExtra: string;

    constructor(titulo: string,
                normativas: Normativa[],
                contenidoExtra: string) {
        this.titulo = titulo;
        this.normativas = normativas;
        this.contenidoExtra = contenidoExtra;
    }
}

export class IndiceNormativa {
    titulo: String;
    ubicacion: String;

    constructor(titulo: String,
                ubicacion: String) {
        this.titulo = titulo;
        this.ubicacion = ubicacion;
    }
}

export class Normativa {
    titulo: string;
    url: string;
    documentos: LinkDocumentos[];

    constructor(titulo:string,
                url: string,
                documentos: LinkDocumentos[]) {
        this.titulo = titulo;
        this.url = url;
        this.documentos = documentos;
    }
}

export class LinkDocumentos {

    titulo: string;
    link: string;

    constructor(titulo: string,
                link: string) {
        this.titulo = titulo;
        this.link = link;
    }

}

export class CarruselInicio {
  url: string;
  redireccion: string;
  toggle: string;

  constructor(url: string, redireccion: string, toggle?: string) {
    this.url = url;
    this.redireccion = redireccion;
    this.toggle = toggle;
  }
}

export enum TIPOS_ACORDEONES {
    GUIA_TRAMITE_FORMULARIO,
    GUIA_TRAMITE_MIXTAS,
    CALENDARIO,
    CALENDARIO_RSISH,
    CALENDARIO_MV,
    CALENDARIO_ARBA,
    CALENDARIO_TRIMESTRAL,
    CALENDARIO_TRIMESTRAL_OEP_ANTENAS,
    CALENDARIO_SERVICIOS,
    CALENDARIO_CEMENTERIO,
    NORMATIVA,
    NORMATIVA_ARBA,
    INSTRUCTIVOS,
    LINK_INTERES,
    FUNCIONES,
    NOTAS
}
