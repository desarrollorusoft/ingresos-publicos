import { Icono, Link, Fila, MPTramite } from './../../data/medios-pago.model';

const PAGO_MIS_CUENTAS = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/pago-mis-cuentas.png",false,'PAGO_MIS_CUENTAS');
const INTERBANKING = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/interbanking.png",false,'INTERBANKING');
const LINK = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/link-pagos.png",true,'LINK');
const MERCADO_PAGO = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/mercadopago-h2.png",false,'MERCADO_PAGO');
const TARJETA = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/tarjeta-credito.svg",true,'TARJETA');
const ITAU = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/itau.png",true,'ITAU');
const SUPERVIELLE = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/banco-supervielle.png",false,'SUPERVIELLE');
const HSBC = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/banco-HSBC.png",false,'HSBC');
const BANCO_CIUDAD = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/banco-ciudad.png",false,'BANCO_CIUDAD');
const BANCO_PROVINCIA = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/banco-provincia.png",false,'BANCO_PROVINCIA');
const CREDICOP = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/banco-credicoop.png",true,'CREDICOP');
const PROVINCIA_PAGOS = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/provincia-pagos.png",false,'PROVINCIA_PAGOS');
const RAPIPAGO = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/rapipago.png",false,'RAPIPAGO');
const PAGO_FACIL = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/pago-facil.png",true,'PAGO_FACIL');
const RAPIPAGO_TELEFONO = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/rapipago-telefono.png",false,'RAPIPAGO_TELEFONO');

const SEDE_MUNICIPAL = new Link("/info/informacionUtil/pm","Sede Municipal",'SEDE_MUNICIPAL');
const DELEGACIONES_MUNICIPALES = new Link("/info/informacionUtil/dm","Delegaciones Municipales",'DELEGACIONES_MUNICIPALES');
const CAJEROS_LINK = new Link("","Cajeros Red Link",'CAJEROS_LINK');
const CAJEROS_BANELCO = new Link("","Cajeros Red Banelco",'CAJEROS_BANELCO');

const VISA = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/visa.png",true,'VISA');
const AMERICAN = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/americanExpress.png",true,'AMERICAN');
const MASTERCARD = new Icono("http://www.vicentelopez.gov.ar/static-iipp/p/IIPP/medios-pago/mastercard.png",true,'MASTERCARD');

const ABL = new MPTramite([
  new Fila([MERCADO_PAGO,PAGO_MIS_CUENTAS,INTERBANKING,LINK,TARJETA])
 ],
 [
  new Fila([SEDE_MUNICIPAL,DELEGACIONES_MUNICIPALES,CAJEROS_LINK,CAJEROS_BANELCO]),
  new Fila([PROVINCIA_PAGOS,PAGO_FACIL,RAPIPAGO]),
  new Fila([ITAU,SUPERVIELLE,HSBC,BANCO_CIUDAD,BANCO_PROVINCIA,CREDICOP])
 ],
 [
   new Fila([RAPIPAGO_TELEFONO])
  ],
  [
    new Fila([VISA,MASTERCARD,AMERICAN])
  ]
);

const AUTO = new MPTramite([
  new Fila([MERCADO_PAGO,PAGO_MIS_CUENTAS,INTERBANKING,LINK,TARJETA])
 ],
 [
  new Fila( [SEDE_MUNICIPAL,DELEGACIONES_MUNICIPALES,CAJEROS_BANELCO]),
  new Fila([PROVINCIA_PAGOS,PAGO_FACIL,RAPIPAGO]),
  new Fila([ITAU,SUPERVIELLE,HSBC,BANCO_CIUDAD,BANCO_PROVINCIA,CREDICOP])
],
 [],
 []
)

const RS = new MPTramite([
  new Fila([MERCADO_PAGO,PAGO_MIS_CUENTAS,INTERBANKING,LINK,TARJETA])
 ],
 [
  new Fila( [SEDE_MUNICIPAL,DELEGACIONES_MUNICIPALES]),
  new Fila([PROVINCIA_PAGOS,PAGO_FACIL,RAPIPAGO]),
  new Fila([ITAU,SUPERVIELLE,HSBC,BANCO_CIUDAD,BANCO_PROVINCIA,CREDICOP])
],
 [],
 [
  new Fila([VISA,MASTERCARD,AMERICAN])
]
)

const SH = new MPTramite([
  new Fila([PAGO_MIS_CUENTAS,INTERBANKING])
 ],
 [
  new Fila( [SEDE_MUNICIPAL,DELEGACIONES_MUNICIPALES]),
  new Fila([PROVINCIA_PAGOS,PAGO_FACIL,RAPIPAGO]),
  new Fila([ITAU,SUPERVIELLE,HSBC,BANCO_CIUDAD,BANCO_PROVINCIA,CREDICOP])
],
 [],
 []
)

const PYP = new MPTramite([
  new Fila([INTERBANKING])
 ],
 [
  new Fila( [SEDE_MUNICIPAL,DELEGACIONES_MUNICIPALES]),
  new Fila([PROVINCIA_PAGOS,PAGO_FACIL,RAPIPAGO]),
  new Fila([ITAU,SUPERVIELLE,HSBC,BANCO_CIUDAD,BANCO_PROVINCIA,CREDICOP])
],
 [],
 []
)

const MV = new MPTramite([
  new Fila([INTERBANKING])
 ],
 [
  new Fila( [SEDE_MUNICIPAL,DELEGACIONES_MUNICIPALES]),
  new Fila([PROVINCIA_PAGOS,PAGO_FACIL,RAPIPAGO]),
  new Fila([ITAU,SUPERVIELLE,HSBC,BANCO_CIUDAD,BANCO_PROVINCIA,CREDICOP])
],
 [],
 []
)

const PILETA = new MPTramite([],
 [
  new Fila( [SEDE_MUNICIPAL,DELEGACIONES_MUNICIPALES]),
  new Fila([PROVINCIA_PAGOS,PAGO_FACIL,RAPIPAGO]),
  new Fila([ITAU]),
],
 [],
 []
)

const CEMENTERIO = new MPTramite([
  new Fila([MERCADO_PAGO,PAGO_MIS_CUENTAS,INTERBANKING,LINK,TARJETA])
 ],
 [
  new Fila( [SEDE_MUNICIPAL,DELEGACIONES_MUNICIPALES]),
  new Fila([PROVINCIA_PAGOS,PAGO_FACIL,RAPIPAGO]),
  new Fila([ITAU,SUPERVIELLE,HSBC,BANCO_CIUDAD,BANCO_PROVINCIA,CREDICOP])
],
 [],
 []
)


export const MEDIOS_PAGO_V={

  abl: ABL,
  automotor: AUTO,
  motovehiculos: AUTO,
  regimenSimplificado: RS,
  inspeccionSegHig:SH,
  publicidad:PYP,
  oep:PYP,
  antenas:PYP,
  mantenimientoVial:MV,
  serviciosVarios:SH,
  derechosCementerio:CEMENTERIO,
  piletas:PILETA
}
