import {
  LinkDocumentos,
  CategoriaNormativa,
  RegistroAcordeonCalendarioABL,
  RegistroAcordeonNotas,
  CarruselInicio,
  AcordeonSin,
  RegistroAcordeonCalendarioTrimestralVencimiento,
  RegistroAcordeonCalendarioCuatrimestralVencimiento, ListaCalendarioCuatrimestralConVencimiento, IndiceNormativa, AcordeonCalendarioTrimestralOepAntena, RegistroAcordeonCalendarioTrimestralOepAntena , ListaCalendarioTrimestralOepAntena
} from './../../data/data.model';
import { Inicio, CategoriaTramite, Tramite, BotonRedireccion, InformacioyHerramitentas, Novedad, AcordeonGuiasTramitesFormularios, RegistroAcordeonGuiasTramiteFormularios, RegistroAcordeonCalendario, RegistroAcordeonNormativa, RegistroAcordeonInstructivos, RegistroAcordeonLinkInteres, AcordeonCalendario, AcordeonNormativa, AcordeonInstructivos, RegistroAcordeonCalendarioRSISH, AcordeonCalendarioRSISH, RegistroAcordeonCalendarioMV, AcordeonCalendarioMV, AcordeonCalendarioARBA, AcordeonNormativaARBA, AcordeonLinkInteres, RegistroAcordeonCalendarioTrimestral, AcordeonCalendarioTrimestral, AcordeonCalendarioServiciosVarios, AcordeonFunciones, RegistroAcordeonCalendarioCementerio, AcordeonCalendarioCementerio, AcordeonGuiasTramitesMixtas, Delegacion, LinkInteres, MediosPago, ListaFormularios, CategoriaPregunta, Pregunta, ListaCalendarioComun, ListaCalendarioRSISH, ListaCalendarioMV, ListaCalendarioTrimestral, ListaCalendarioCementerio, Empleado, Normativa, ListaCalendarioTrimestralConVencimiento } from '../../data/data.model';

export const URL_BASE_ARCHIVOS = 'https://www.vicentelopez.gov.ar/static-iipp/p/IIPP/';

export const BOTONES_APPS = {
    botonSAT:       new BotonRedireccion('Ingresar', 'Consultas y Pagos', false /* redirige interno */, 'https://www.vicentelopez.gov.ar/SAT/pages/pub/login.xhtml'),
    botonCF:        new BotonRedireccion('Ingresar', 'Declaraciones Juradas y Pagos', false /* redirige interno */, 'https://www.vicentelopez.gov.ar/cvl/'),
    botonRS:        new BotonRedireccion('Ingresar', 'Consultas, Declaraciones Juradas', false /* redirige interno */, 'https://www.vicentelopez.gov.ar/SAT/pages/pub/login_rs.xhtml'),
    botonConsultas: new BotonRedireccion('Contactanos', 'Consultas y Reclamos', false /* redirige interno */, 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
    botonPiletas:   new BotonRedireccion('Ingresar', '', false, 'https://www.vicentelopez.gov.ar/SAT/pages/pub/login.xhtml')
};

export const NORMATIVAS = {
    // EJERCICIO 2018

    of35765: new Normativa( 'Ordenanza Fiscal Nº 35765 Promulgada por Decreto 5438 Del 21/12/2017',
                            'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-12-28-10-52-12legOrdenanza%2035765%20Ordenanza%20Fiscal%202018.pdf',
                            [
                                new LinkDocumentos('Texto Ordenado Ordenanza Fiscal 2018', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2018-03-27-13-48-53Decreto%201058.18%20Texto%20Ordenado%20Ordenanza%20Fiscal%202018.pdf')
                            ]),
    of35766: new Normativa( 'Ordenanza Impositiva Nº 35766 Promulgada Por Decreto 5439 DEL 21/12/2017',
                            'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-12-28-10-56-07legOrdenanza%2035766%20Ordenanza%20Impositiva%202018.pdf',
                            [
                                new LinkDocumentos('Texto Ordenado Ordenanza Impositiva 2018', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2018-03-27-13-49-00Decreto%201185.18%20Texto%20Ordenado%20Ordenanza%20Impositiva%202018.pdf')
                            ]),
    // EJERCICIO 2017
    of35169: new Normativa( 'Ordenanza Fiscal 35169',
                            '',
                            [
                                new LinkDocumentos('Promulgada por Decreto 5785 de 30-12-2016', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-02-20-08-33-20Ordenanza%2035169%20Ordenanza%20Fiscal%202017%20Modifica%20Ordenanza%2026387%20e.7054.16.pdf')
                            ]),
    of35170: new Normativa( 'Ordenanza Impositiva 35170',
                            '',
                            [
                                new LinkDocumentos('Promulgada por Decreto 5786 del 30-12-2016', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-01-11-16-05-03Ordenanza%2035170%20Ordenanza%20Impositiva%202017%20modifica%20ordenanza%2034397%20e.7055.16.pdf'),
                                new LinkDocumentos('Decreto 2682/17 Texto Ordenado Impositiva 2017', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-07-04-12-32-59Decreto%202682.17%20Texto%20Ordenado%20Impositiva%202017.pdf')
                            ]),
    td96017: new Normativa( 'Texto Ordenado- Decreto 960/17',
                            'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-03-14-10-18-11Decreto%20960.17%20Texto%20Ordenado%20Ordenanza%20Fiscal%202017.pdf',
                            [
                                new LinkDocumentos('Decreto nº 1062 Rectificatorio del Anexo I Ter del T.O. Ord. Fiscal', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-03-29-14-18-38Decreto%20Rectificatorio%20TO%202017.pdf')
                            ]),
    // EJERCICIO 2016
    of34396: new Normativa( 'Ordenanza Fiscal 34396',
                            '',
                            [
                                new LinkDocumentos('Promulgada por Decreto 5580 del 15-12-2015', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-12-18-09-21-48Ordenanza%2034396%20Ordenanza%20Fiscal%202016.pdf')
                            ]),
    of34397: new Normativa( 'Ordenanza Impositiva 34397',
                            '',
                            [
                                new LinkDocumentos('Promulgada por Decreto 5581 del 15-12-2015', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2016-01-06-15-08-31Ordenanza%2034397%20Ordenanza%20Impositiva%202016.pdf')
                            ]),
    td22716: new Normativa( 'Texto Ordenado - Decreto 227/16',
                            'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2016-02-01-09-47-47Decreto%20227.16%20Texto%20Ordenado%20Ordenanza%20Fiscal%202016%20(1).pdf',
                            []),
    // EJERCICIO 2015
    of33688: new Normativa( 'Ordenanza Fiscal 33688',
                            '',
                            [
                                new LinkDocumentos('Promulgada por Decreto 5452 del 31/12/2014', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Ordenanza33688rot.pdf')
                            ]),
    of33689: new Normativa( 'Ordenanza Impositiva 33689',
                            '',
                            [
                                new LinkDocumentos('Promulgada por Decreto 5472 del 31/12/2014', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Ord33689.pdf')
                            ]),
    of34118: new Normativa( '',
                            '',
                            [
                                new LinkDocumentos('Ordenanza 34118/15', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-30-08-38-33Ordenanza%2034118%20Modifica%20COU%20Antenas%20y%20Estructuras%20DEROGA%20Ordenanza%2013397%20e.3987.15.pdf')
                            ]),
    td38315: new Normativa( 'Texto Ordenado - Decreto 383/15',
                            'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto%20383.15%20Texto%20Ordenado%20Ordenanza%20Fiscal%202015.pdf',
                            []),
    // EJERCICIO 2014
    of32959: new Normativa( 'Ordenanza Fiscal 32959',
                            '',
                            [
                                new LinkDocumentos('Promulgada por Decreto 5138 del 20/12/13', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-08-14-17-27Ordenanza%2032959%20Modifica%20Ordenanza%20Fiscal%202014.pdf')
                            ]),
    of32961: new Normativa( 'Ordenanza Impositiva 32961',
                            '',
                            [
                                new LinkDocumentos('Promulgada por Decreto 5176 del 20/12/13', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/FILE33f8ca51144e999194716896e7ea5efb.pdf')
                            ]),
    td01314: new Normativa( 'Texto Ordenado - Decreto 13/14',
                            'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-07-30-14-50-48EJE%202014TORDDTO13.pdf',
                            []),
    // EJERCICIO 2013
    of32257: new Normativa( 'Ordenanza Fiscal 32257',
                            '',
                            [
                                new LinkDocumentos('Promulgada por Decreto 65 del 11/01/13', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-08-14-36-10Ordenanza%2032257.pdf')
                            ]),
    of32258: new Normativa( 'Ordenanza Impositiva 32258',
                            '',
                            [
                                new LinkDocumentos('Promulgada por Decreto 66 del 11/01/13', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-07-30-11-59-19Boletin%20Munipal%20515%20(3).pdf')
                            ]),
                            
    td42413: new Normativa( 'Texto Ordenado - Decreto 424/13',
                            'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-07-29-14-46-57EJE2013TORDDecr424.pdf',
                            []),
                            
    res478_20: new Normativa('Resoluci&oacute;n 478/20 R&eacute;gimen Simplificado',
                                URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resolucion_478.20_Regimen_Simplificado.pdf',
                            []),
                            
    res548_20: new Normativa('Resoluci&oacute;n 548/20 R&eacute;gimen Simplificado anticipos 2 al 6',
                                URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resolucion_548_2020_Regimen_Simplificado_Bonificacion_anticipos_2_al_6_de_2020.pdf',
                            []),

    res620_20: new Normativa('Resoluci&oacute;n 620/20 Bonificación R&eacute;gimen Simplificado ',
                                URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.620_Bonif._RS_2antic.7_a_12.pdf',
                            []),
                            
    dto1625_20: new Normativa('Decreto 1625/20 Nuevo Vto. TISH, PyP, OPE, TVial',
                              URL_BASE_ARCHIVOS + '/normativas/2020/Decreto_1625.20_Nuevos_Vencimientos_TISH_PyP_OEP_TVial.pdf',
                            []),

    dto1812_20: new Normativa('Decreto 1812/20 Nuevo Vto DDJJ PyP, OEP',
                              URL_BASE_ARCHIVOS + '/normativas/2020/Dto.1812-20_Nvo.Vto_DDJJ_pyp_oep.pdf',
                            []),
    
    res547_20:  new Normativa('Resoluci&oacute;n 547/20 Bonificaci&oacute;n PyP 2&ordm; trimestre',
                            URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resolucion_547_2020_Bonificacion_PyP_2do_trimestre.pdf',
                            []),

    res482_20:  new Normativa('Resoluci&oacute;n 482/20 Bonificaci&oacute;n Clubes',
                            URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.482-20_Bonificacion_Clubes.pdf',
                            []),

    res483_20:  new Normativa('Resoluci&oacute;n 483/20 Bonificaci&oacute;n eximidos del 50 y 30',
                            URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.483-20_Bonif._eximidos_del_50_y30_.pdf',
                            []),

    dto2025_20: new Normativa('Decreto 2025/20 Nuevo Vto. ABL - Cuotas 7 y 8',
                              URL_BASE_ARCHIVOS + '/normativas/2020/Dto.2025-20_Nvo.Vto.ABL_7y8.pdf',
                            []),

    dto2026_20: new Normativa('Decreto 2026/20 Reducción 10% semestre ABL',
                              URL_BASE_ARCHIVOS + '/normativas/2020/Dto.2026-20_Reduccion_10__semestre_ABL.pdf',
                            []),

    // OTRAS DISPOSICIONES NORMATIVAS
    ordenanzas: new Normativa( 'Ordenanzas',
                            '',
                            [
                                new LinkDocumentos('Ordenanza 36467/19 Incorporación Automotores', URL_BASE_ARCHIVOS + '/normativas/otras_disposiciones/Ord.36467_Dto_213-19.pdf'),
                                new LinkDocumentos('Ordenanza 35987/18 Incorporación Automotores', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2018-06-25-10-12-392018-06-22 (1).pdf'),
								new LinkDocumentos('Ordenanza 35839 Adhesion Ley 14984 Regimen Responsabilidad Fiscal /2017', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2018-01-16-12-55-50Ordenanza 35839 Adhesion Ley 14984 Regimen Responsabilidad Fiscal.pdf'),
								new LinkDocumentos('Ordenanza 35518/17 Exime pago tributos comercios centro comercial Munro Plan de obras e.5280.17', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-10-05-08-12-23Ordenanza 35518 Exime pago tributos comercios centro comercial Munro Plan de obras e.5280.17.pdf'),
								new LinkDocumentos('Ordenanza 35000/16 Adhesión Régimen Nacional Sinceramiento Fiscal Ley Nac 27260 Ley Prov. 14840', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2016-11-10-10-08-33Ordenanza 35000 Adhesion Ley Nacional 27260 Ley Provincial 14840 Regimen Nacional Sinceramiento Fiscal e.5660.16.pdf'),
								new LinkDocumentos('Ordenanza 34118/2015 - Modifica COU Antenas y Estructuras, Deroga Ord. 13397 y sus modificactorias', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-30-08-38-33Ordenanza 34118 Modifica COU Antenas y Estructuras DEROGA Ordenanza 13397 e.3987.15.pdf'),
								new LinkDocumentos('Ordenanza 33368/2014 - Ordenamiento y Beneficios para Patentes de Rodados (Automotores Municipalizados - Motovehículos)', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-04-12-14-22Ordenanza 33368-r 4.pdf'),
								new LinkDocumentos('Ordenanza 33361/2014 - Reducción Anual en Tributos para Entidades Sociales y Deportivas', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-04-12-15-47Ordenanza 33361(2).pdf'),
								new LinkDocumentos('Ordenanza 32165/2012 - Régimen de Regularización de Deudas - Homologación del Decreto 4213/12 Art. 15 - Incisos b) - Acápites a) y b)', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Ordenanza_32165_Beneficios_Regularizacion_Deudas_Homologa_Articulo_15_Decreto_4213-12.pdf'),
								new LinkDocumentos('Ordenanza 31834/2012 Incorpora el uso de Obrador al Código de Ordenamiento Urbano', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2016-04-25-09-24-19644-legOrdenanza 31834 Incorpora Uso Obrador al Codigo de Ordenamiento Urbano.pdf'),
								new LinkDocumentos('Ordenanza 31772/2012 - Adhesión a la Ley Provincial 13863 - Fondo Municipal de Inclusión Social', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Ordenanza_31772_Adhesion_Ley_Provincial_13863_Fondo_Municipal_de_Inclusion_Social.pdf'),
								new LinkDocumentos('Ordenanza 31771/2012 - Adhesión a la Ley Provincial 13850 - Fondo para el Fortalecimiento de Recursos Municipales', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Ordenanza31771.pdf'),
								new LinkDocumentos('Ordenanza 31492/2012 - Modificaciones al Código de Publicidad (Ordenanza 22816)', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Ordenanza_31492_Codigo_de_Publicidad_Modifica_Varios_Articulos_Ordenanza_22816.pdf')
                            ]),
decretos2020: new Normativa( 'DECRETOS 2020',
                            '',
                            [
                                new LinkDocumentos('Decreto 3006/20 Comercios Gastronómicos', URL_BASE_ARCHIVOS + '/normativas/otras_disposiciones/DECTO-30062020_Comercios_Gastronomicos.pdf'),
                                new LinkDocumentos('Decreto 2862/20 Nuevos Vtos 3º Trimestre PyP OEP', URL_BASE_ARCHIVOS + '/normativas/2020/DECTO-28622020.pdf'),
                                new LinkDocumentos('Decreto 2091/20 Nuevos Vtos 2º Trimestre PyP OEP', URL_BASE_ARCHIVOS + '/normativas/2020/Dto.2091-20_Nuevos_Vtos.2_Trim.PyP.pdf'),
                                new LinkDocumentos('Decreto 2026/20 Reducción 10% semestre ABL', URL_BASE_ARCHIVOS + '/normativas/2020/Dto.2026-20_Reduccion_10__semestre_ABL.pdf'),
                                new LinkDocumentos('Decreto 2025/20 Nuevo Vto. ABL - Cuotas 7 y 8', URL_BASE_ARCHIVOS + '/normativas/2020/Dto.2025-20_Nvo.Vto.ABL_7y8.pdf'),
                                new LinkDocumentos('Decreto 1812/20 Nuevo Vto DDJJ PyP, OEP', URL_BASE_ARCHIVOS + '/normativas/2020/Dto.1812-20_Nvo.Vto_DDJJ_pyp_oep.pdf'),
                                new LinkDocumentos('Decreto 1625/20 Nuevo Vto. TISH, PyP, OPE, TVial', URL_BASE_ARCHIVOS + '/normativas/2020/Decreto_1625.20_Nuevos_Vencimientos_TISH_PyP_OEP_TVial.pdf'),
                                new LinkDocumentos('Decreto 1374/20 Nuevo Vto. TISH,SEL,RS', URL_BASE_ARCHIVOS + '/normativas/2020/Dto.1374_20_Nuevo_Vto._TISH.SEL.RS.pdf'),
                                new LinkDocumentos('Decreto 439/20 Deroga Dto 5441/17', URL_BASE_ARCHIVOS + '/normativas/2020/Dto.439-20_deroga_dto.5441-17.pdf'),
                            ]),

decretos2019: new Normativa( 'DECRETOS 2019',
                            '',
                            [
                                new LinkDocumentos('Decreto 957/19 Nuevo Vencimiento ALCVPy SV y CPC', URL_BASE_ARCHIVOS + '/normativas/2019/Decreto_957-19_Nuevo_vto.ABL.pdf'),
                                new LinkDocumentos('Nuevo Vencimiento 2&ordm; y 3&ordm; trimestres&nbsp;Publicidad y Propaganda', URL_BASE_ARCHIVOS + '/normativas/2019/Dto.2195-19_nuevos_vtos_pyp.pdf'),
                            ]),
decretos2018: new Normativa( 'DECRETOS 2018',
                            '',
                            [
                                new LinkDocumentos('Decreto 2335/18 Tabla Tarifaria Motovehículos', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2018-06-19-12-07-01Dto 2335-18 tabla tarif motos 18.pdf'),
								new LinkDocumentos('Decreto 2151/18 Bonificación Régimen Simplificado', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2018-06-07-08-29-41Dto. 2151-18 bonificac.reg.simplific (1).pdf'),
								new LinkDocumentos('Decreto 1647/18 Modif. Vto Patente Automotor', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2018-04-27-08-16-06Decreto 1647-18 - Modif. Vto Patente Automotor.pdf'),
								new LinkDocumentos('Decreto 804/2018 Nuevo Vencimiento Seguridad e Higiene', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2018-02-21-14-24-01Dto. 804-18 nuevo vto.seg e hig.pdf'),
								new LinkDocumentos('Decreto 1173/2018 Eximición Clubes', URL_BASE_ARCHIVOS + '/normativas/otras_disposiciones/Decreto_1173.2018_Eximicion_Ejercicio_Fiscal_2018_E.683.18.pdf')
                            ]),
decretos2017: new Normativa( 'DECRETOS 2017',
                            '',
                            [
                                new LinkDocumentos('Decreto 5441/17 Bonificación Tasa de Mantenimiento Vial Municipal', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-12-27-15-40-28TasaVialDecretoN5441.pdf'),
								new LinkDocumentos('Decreto 4807/2017 Prorroga Vto ALCVP y SV cuota 11', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-11-27-08-29-58Decreto 4807 prorroga Vto cuota ALCVPySV Nov 2017.pdf'),
								new LinkDocumentos('Decreto 1691/17 Eximición de Clubes', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-05-03-09-42-14decr. 1691-17 eximic. clubes.pdf')

                            ]),
decretos2016: new Normativa( 'DECRETOS 2016',
                            '',
                            [
                                new LinkDocumentos('Decreto 2946/16 Autoriza Planes de Pago en Cuotas', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2016-08-18-15-52-02Decreto 2946.16 DEROGA Decreto 2058.13 y Decreto 3081.15  Autoriza Planes de Pago en cuotas.pdf')
                            ]),
decretos2015: new Normativa( 'DECRETOS 2015',
                            '',
                            [
                                new LinkDocumentos('Decreto 5870/15 Calendario Impositivo para el Ejercicio 2016', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-12-30-13-40-15Decreto 5870.15.pdf'),
								new LinkDocumentos('Decreto 5839/15 Bonificación en la Tasa de Mantenimiento Vial Municipal', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2016-07-15-14-11-56Decreto 5839.15 Otorga Bonificacion Tasa Mantenimiento Vial 2016.pdf'),
								new LinkDocumentos('Decreto 3970/15 Bonificación en el Canon por Publicidad y Propaganda', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2016-07-15-14-10-05Decreto 3970.15 Bonificacion CAnon Publicidad y Propaganda.pdf'),
								new LinkDocumentos('Decreto 3959/15 Implementación del Certificado de Cumplimiento de Obligaciones Tributarias', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2016-07-15-14-07-40Decreto 3959.15 Implementar Certificado de CUmplimiento de Obligaciones Tributarias.pdf'),
								new LinkDocumentos('Decreto 3081/15 Rectifica Decreto 2058/13. Otorgamiento Planes de Pago en Cuotas', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-08-03-13-03-30Decreto%203081.15%20Rectifica%20Decreto%202058.13%20Otorgamiento%20Planes%20de%20Pago%20en%20Cuotas.pdf'),
								new LinkDocumentos('Decreto 3080/15 Intereses Resarcitorios Ordenanza Fiscal 26387', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-08-03-13-00-45Decreto%203080.15%20Rectifica%20Decreto%203392.14%20Intereses%20Resarcitorios%20Ordenanza%20Fiscal.pdf'),
								new LinkDocumentos('Decreto 3079/15 Rectifica Decreto 3094.12 Descuento Total y al Contado de Deuda', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-08-03-12-57-03Decreto%203079.15%20Rectifica%20Decreto%203094.12%20Descuento%20Pago%20Total%20y%20al%20Contado%20de%20Deuda.pdf'),
								new LinkDocumentos('Decreto 1841/15 Nuevos Vencimientos para Presentación DDJJ Anual y Pagos: Canon para Publicidad y Propaganda; Ocupación o Uso de Espacios Públicos; Tributos y Derechos de Servicios Varios', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-07-12-16-22Decreto 1841_15.pdf'),
								new LinkDocumentos('Decreto 884/15 Bonificación en los Intereses Resarcitorios por la Tasa de Mantenimiento Vial Municipal', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-07-12-23-02Decreto 884_15.pdf'),
								new LinkDocumentos('Decreto 883/15 Bonificación en la Tasa de Mantenimiento Vial Municipal', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-07-12-27-42Decreto 883_15.pdf'),
								new LinkDocumentos('Decreto 682/15 Bonificación en Tributo de Contribución a la Protección Ciudadana año 2015', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-07-12-29-27Decreto 682_15.pdf'),
								new LinkDocumentos('Decreto 565/15 Bonificación en el Canon por Publicidad y Propaganda', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-07-12-34-57Decreto 565_15.pdf')
                            ]),
decretos2014: new Normativa( 'DECRETOS 2014',
                            '',
                            [
                                new LinkDocumentos('Decreto 5435/14 Calendario Impositivo para el Ejercicio 2015', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-09-11-52-59Decreto 5435_2014.pdf'),
								new LinkDocumentos('Decreto 5371/14 Derogase Decreto 5152/14', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-09-11-50-04Decreto 5371_2014.pdf'),
								new LinkDocumentos('Decreto 5152/14 Bonificación en la Tasa de Mantenimiento Vial Municipal', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-09-11-46-20Decreto 5152_2014.pdf'),
								new LinkDocumentos('Decreto 3392/14 Fijación Intereses Resarcitorios de Varios Tributos', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-09-11-42-53Decreto 3392_2014.pdf'),
								new LinkDocumentos('Decreto 3391/14 Graduación de la Sanción de Multas por falta de presentación de Planos de Obra', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-09-11-41-20Decreto 3391_2014.pdf'),
								new LinkDocumentos('Decreto 3347/14 Condonación de Deudas por Patentes de Rodados Municipalizados', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-09-11-35-26Decreto 3347_2014.pdf'),
								new LinkDocumentos('Decreto 3346/14 Eximisiones en Pago de Patente de Rodados', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-09-11-30-35Decreto 3346_2014.pdf'),
								new LinkDocumentos('Decreto 3180/14 Descuentos y Bonificaciones en Patente de Rodados Municipalizados', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-09-11-21-07Decreto 3180_2014.pdf'),
								new LinkDocumentos('Decreto 1440/14 Plan de Pago Tributo por Servicios Especiales de Limpieza e Higiene', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-09-11-19-03Decreto 1440_2014.pdf'),
								new LinkDocumentos('Decreto 1358/14 Prorroga de Vencimientos Fijados en el Decreto 14/14', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-09-11-11-25Decreto 1358_2014.pdf'),
								new LinkDocumentos('Decreto 1035/14 Bonificación en la Tasa de Mantenimiento Vial Municipal', URL_BASE_ARCHIVOS + '/normativas/otras_disposiciones/Decreto_1035.2014_Otorga_Beneficio_Tasa_Mantenimiento_Vial_Municipal.pdf'),
								new LinkDocumentos('Decreto 520/14 Prorroga Presentación de DDJJ y Pago Tributo por Inspección de Seguridad e Higiene y Tributo por Servicios Especiales de Limpieza e Higiene</', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-09-11-26-47Decreto 520_2014.pdf'),
								new LinkDocumentos('Decreto 14/14–Calendario de Vencimientos – Ejercicio 2014 - Pago y/o Presentación de DDJJ', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-09-10-43-10Decreto 14_2014.pdf')
                            ]),
decretos2013: new Normativa( 'DECRETOS 2013',
                            '',
                            [
                                new LinkDocumentos('Decreto 5485/13 Bonificación por Tributo por Alumbrado, Limpieza, Conservación de la Vía Pública y Servicios Varios para distintas Categorías y Zona', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-07-10-10-23Decreto 5485_2013 (2).pdf'),
								new LinkDocumentos('Decreto 5177/13 Bonificación en la Tasa de Mantenimiento Vial Municipal', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-04-15-07-06Decreto 5177_2013.pdf'),
								new LinkDocumentos('Decreto 5055/13 Calendario de Vencimientos de Pagos 2014 para el Tributo por Alumbrado, Limpieza, Conservación de la Vía Pública y Servicios Varios', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-08-15-25-56Decreto 5055_2013 (2).pdf'),
								new LinkDocumentos('Decreto 3935/13 Rectifica Decreto 3241/13 Planes de Pago en Cuotas para las MiPymes', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-07-13-32-53Decreto 3935_2013 (2).pdf'),
								new LinkDocumentos('Decreto 3241/13 – Planes de Facilidades para Micro, Pequeñas y Medianas Empresas (MIPy MEs)', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_3241-13_Planes_de_Pagos_Tributos_Municipales.pdf'),
								new LinkDocumentos('Decreto 2058/13 Derogase Decreto 4865/06 y Decreto 1430/12 y se Otorgan Planes de Facilidad de Pago en Cuotas', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-07-14-07-29Decreto 2058_2013 (2).pdf'),
								new LinkDocumentos('Decreto 1473/13 Derogación de Decreto 1094/08 por Fraccionamiento del Pago en Canon de Publicidad y Propaganda y otros', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-04-15-31-21Decreto 1473_2013 (2).pdf'),
								new LinkDocumentos('Decreto 1209/13 Prórroga en Vencimientos para Cánones de Publicidad y Propaganda y Ocupación de Espacios Públicos', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-04-15-41-26Decreto 1209_2013 (2).pdf'),
								new LinkDocumentos('Decreto 939/13 – Bonificaciones en el Canon por Publicidad y Propaganda - Modificatoria del Art. 1º del Decreto 75/13', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_939-13-Bonificacion_General_Canon_Publicidad_y_Propaganda_Modifica_Decreto_75-13.pdf'),
								new LinkDocumentos('Decreto 292/13 – Rectificativa de Art. 1º del Decreto 75/13', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_292-13.pdf'),
								new LinkDocumentos('Decreto 75/13 –Calendario de Vencimientos – Ejercicio 2013 - Pago y/o Presentación de DDJJ', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_75-13_Calendario_Vencimientos_de_Pagos_y_Presentacion_Declaraciones_Juradas_Tributos_Ejercicio_2013.pdf'),
								new LinkDocumentos('Decreto 74/13 – Bonificación en la Tasa de Mantenimiento Vial Municipal', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_74-13_Bonificacion_Tasa_Mantenimiento_Vial_Municipal.pdf')
                            ]),
decretos2012: new Normativa( 'DECRETOS 2012',
                            '',
                            [
                                new LinkDocumentos('Decreto 4213/12 – Regularización de Deudas del Tributo por ALCVP y SV y Tributo de Contribución a la Protección Ciudadana', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_4213-13_Designacion_Lp-26647_Benitez_Olmedo_Elisa.pdf'),
								new LinkDocumentos('Decreto 3758/12 – Planes de Pago para el Tributo por el Uso de Indicadores Urbanísticos - Trámites presentados antes del 12/04', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_3758-12_Plan_de_Pago_Tributos_por_el_Uso_de_Indicadores_Urbanisticos_de_Zonas_Particulares.pdf'),
								new LinkDocumentos('Decreto 3258/12 – Exenciones al Tributo de Contribución a la Protección Ciudadana', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_3258-12_Exencion_Tributo_Contribucion_Proteccion_Ciudadana.pdf'),
								new LinkDocumentos('Decreto 3094/12 – Beneficio por Pago Total y Contado – Descuento del 50% de los recargos y 100% de las Multas por Omisión Art. 55 de la Ordenanza Fiscal vigente', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_3094-12_Beneficios_por_Pago_al_Contado.pdf'),
								new LinkDocumentos('Decreto 2961/12 – Vencimientos del Tributo por Derechos a los Espectáculos Públicos para Contribuyente Habitual u Ocasional del Tributo', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_2961-12_Tributo_por_Derechos_a_Espectaculos_Publicos.pdf'),
								new LinkDocumentos('Decreto 2959/12 – Liquidación Mensual y Bimestral del Tributo por Inspección de Seguridad e Higiene', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_2959-12_Tributo_por_Inspeccion_de_Seguridad_e_Higiene_Gravamen.pdf'),
								new LinkDocumentos('Decreto 2958/12 – Tributo de Servicios Especiales de Limpieza e Higiene Emisión, liquidación y vencimientos conjuntamente con el Tributo por Inspección de Seguridad e Higiene', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_2958-12_Tributo_Servicios_Especiales_de_Limpieza_e_Higiene.pdf'),
								new LinkDocumentos('Decreto 2957/12 – Tributo de Contribución a la Protección Ciudadana Emisión, liquidación y vencimientos conjuntamente con el Tributo por ALCVP y SV', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_2957-12_Tributo_Contribucion_a_la_Proteccion_Ciudadana.pdf'),
								new LinkDocumentos('Decreto 1430/12 – Planes de Pago en Cuotas Reemplaza Art. 12 del Decreto 4865/06', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto_1430-12_Plan_Pago_en_Cuotas_Reemplaza_art-12_y_terminos_del_Decreto_4865-06.pdf'),
								new LinkDocumentos('Decreto 1189/12 – Caducidad de la Habilitación Municipal por Deudas de Seguridad e Higiene', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-08-19-12-44-27Decreto 1189-12 Caducidad de la Habilitación Municipal por Deuda de Seguridad e Higiene.pdf'),
								new LinkDocumentos('Decreto 338/12 – Fijación de Interés Resarcitorio Ordenanza Fiscal 26387 - Art. 55, Inc. d) y modificatorias', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-08-19-12-43-33Decreto 338-12 Fijación de interés resarcitorio Ord Fiscal 26387 Art 55 Inc d) y modificatorias.pdf'),
								new LinkDocumentos('Decreto 115/12 – Descuento del 10% en ALCVP Y SV Modificatoria de Decretos 992/02 - 1481/03', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Decreto115.pdf')
                            ]),
resoluciones: new Normativa( 'RESOLUCIONES',
                            '',
                            [
                                new LinkDocumentos('Resolución 735/20 Bonificación PyP-OEP 3º Trimestre', URL_BASE_ARCHIVOS + 'normativas/resoluciones/Reso.735-20_Bonif_PyP-OEP_3Trim.pdf'),
                                new LinkDocumentos('Resolución 727/20 Bonificación ABL', URL_BASE_ARCHIVOS + 'normativas/resoluciones/Reso.727-20_Bonif.ABL_9y10.pdf'),
                                new LinkDocumentos('Resolución 620/20 Bonificación Régimen Simplificado', URL_BASE_ARCHIVOS + 'normativas/resoluciones/Reso.620_Bonif._RS_2antic.7_a_12.pdf'),
                                new LinkDocumentos('Resolución 619/20 Bonificación ABL 2º Semestre', URL_BASE_ARCHIVOS + 'normativas/resoluciones/Reso.619_Bonif.ABL_7-8_y_2semestre.pdf'),
                                new LinkDocumentos('Resolución 609/20 Bonificación Derechos de Oficina 2º Semestre', URL_BASE_ARCHIVOS + 'normativas/resoluciones/Reso.609_Bonif.Der.Of.2semestre.pdf'),
                                new LinkDocumentos('Resoluci&oacute;n 588/20 Bonificación Automotores - Motovehículos', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.588-20_Bonif.Autom+10_extra.pdf'),
                                new LinkDocumentos('Resoluci&oacute;n 582/20 Modifica fecha de Resoluci&oacute;n 452/20', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.582-20_Modifica_fecha_Reso.452-20.pdf'),   
                                new LinkDocumentos('Resoluci&oacute;n 581/20 Prorroga fecha de Resoluci&oacute;n 451/20', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.581-20_Prorroga_fecha_de_Reso_451-20.pdf'),
                                new LinkDocumentos('Resoluci&oacute;n 548/20 R&eacute;gimen Simplificado anticipos 2 al 6', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resolucion_548_2020_Regimen_Simplificado_Bonificacion_anticipos_2_al_6_de_2020.pdf'),   
                                new LinkDocumentos('Resoluci&oacute;n 547/20 Bonificaci&oacute;n PyP 2&ordm; trimestre', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resolucion_547_2020_Bonificacion_PyP_2do_trimestre.pdf'),
                                new LinkDocumentos('Resoluci&oacute;n 502/20 Bonificaci&oacute;n en cuotas 5 y 6', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.502-20_Bonif.5-6_ABL.pdf'),
                                new LinkDocumentos('Resoluci&oacute;n 483/20 Bonificaci&oacute;n eximidos del 50 y 30', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.483-20_Bonif._eximidos_del_50_y30_.pdf'),   
                                new LinkDocumentos('Resoluci&oacute;n 482/20 Bonificaci&oacute;n Clubes', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.482-20_Bonificacion_Clubes.pdf'),
                                new LinkDocumentos('Resoluci&oacute;n 478/20 R&eacute;gimen Simplificado', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resolucion_478.20_Regimen_Simplificado.pdf'),
                                new LinkDocumentos('Resoluci&oacute;n 452/20 Modifica Resolución 62.20 Condiciones de Pago para Cancelación de Deudas hasta el 30/06/20', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resolucion_452.20_Modifica_Resolucion_62.20_Condiciones_de_Pago_para_Cancelacion_de_Deudas_hasta_el_30.06.20.pdf'),
                                new LinkDocumentos('Resoluci&oacute;n 451/20 Suspende hasta 30/06/20 la Entrega de Cheques de Pago Diferido para la Formalización de Planes de Pago en Cuotas segun Res. 1452.16', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resolucion_451.20_Suspende_hasta_30.06.20_la_Entrega_de_Cheques_de_Pago_Diferido_Para_la_Formalización_de_Planes_de_Pago_en_Cuotas_segun_Res._1452.16.pdf'),
                                new LinkDocumentos('Resoluci&oacute;n 449/20 Ampliación Plazo de Descuento PPC', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.449-Amplia_Plazo_Dto.PPC.2946.pdf'),
                                new LinkDocumentos('Resoluci&oacute;n 448/20 Bonificación PyP', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso_448_-_Bonif.PyP.pdf'),
                                new LinkDocumentos('Resoluci&oacute;n 62/20 Beneficio Fiscal', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resol.62_2020_Beneficio_Fiscal.pdf'),
                                new LinkDocumentos('Resoluci&oacute;n 36/2020 - Bonificaci&oacute;n durante el primer semestre del 2020 de los Derechos Oficina Libros de habilitaciones y de quejas', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.36-20_bonif.dchos_ofi.libro_habilitac_y_quejas.pdf'),
                                new LinkDocumentos('Resolución 1303/19 Bonificación segundo semestre Régimen Simplificado', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resolucion_1303_19_Reg_Simplif.pdf'),
                                new LinkDocumentos('Resolución 1210/19 Bonificación Derechos de Oficina', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resolucion_Bonificacion_Derechos_Oficina.pdf'),
                                new LinkDocumentos('Resolución 362/19 Beneficio Fiscal-Plan de Facilidades 2019', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resolucion_Beneficio_Fiscal_2019.pdf'),
                                new LinkDocumentos('Resolución 1115/17 modif. art. 4º inc a)b) Plan de Pago en Cuotas', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-05-09-09-33-41Resol. 1115-17 modif. art. 4º inc a)b) ppc.pdf'),
								new LinkDocumentos('Resolución 1101/17 Rectifica Art. 7º Ordenanza Impositiva 35170', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-04-28-11-27-35RESOLUCION 1101-17 (1).pdf'),
								new LinkDocumentos('Resolución 1452/16 Anticipos y Chequeras Planes de Pago en Cuotas', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2016-08-18-15-55-23Resolucion 1452.16 Anticipos y Chequeres planes de Pago en cuotas.pdf'),
								new LinkDocumentos('Resolución 1727/15 Disminución de Intereses Resarcitorios, Rectifica Resolución 2801/14', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-08-03-13-05-40Resolucion%201727.15.pdf'),
								new LinkDocumentos('Resolución 3174/14 Aplicación de Multas por Omisión del 20% en Tributos Varios', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-15-12-38-06Resolucion 3174.14.pdf'),
								new LinkDocumentos('Resolución 2808/14 Aplicación de Multas por Omisión del 20% en Deudas de Patentes de Rodados', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-09-15-12-42-52Resolucion 2808.14.pdf'),
								new LinkDocumentos('Resolución 2801/14 Reglamentario de los Planes de Pago en Cuotas por Tributos Varios, Derogación de Resolución 866/13 y Resolución 1523/13', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resolucion_2801.14.pdf'),
								new LinkDocumentos('Resolución 1524/13 – Fijación de fechas para efectuar Intimaciones', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Resolucion_1524-13_Fechas_Intimaciones_Contribuyentes.pdf'),
								new LinkDocumentos('Resolución 1523/13 - Normativa referente a Planes de Pago en Cuotas - Derogación de Resolución 1073/13', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-07-16-12-32-59Resolucion_1523_13DEROGAResolucion1073.pdf'),
								new LinkDocumentos('Resolución 1073/13 – Planes de Pago en Cuotas para Factibilidad Ambiental, Indicadores Urbanísticos, Estudio y Registro de Planos y Registro de Emplazamiento de Estructuras Anticipo del 20% y 12 Cheques de pago diferido, mensuales y consecutivos', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Resolucion_1073-13_Planes_de_Pago_en_Cuotas_Tributos.pdf'),
								new LinkDocumentos('Resolución 866/13 –Planes de Pago en Cuotas – Mínimo por cuota no inferior a $ 100', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2015-08-19-12-45-07Resolucion_866-13 Planes de Pago en Cuotas Mínimo por cuota no inferior a $100.-.pdf'),
								new LinkDocumentos('Resolución 1022/12 – Interés Resarcitorio para Planes de Facilidades de Pago (2% Mensual) - Vigencia 1º de Junio de 2012', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/Resolucion1022.pdf'),
								new LinkDocumentos('Resolución 3007/12 – Reglamentaria del Decreto 3758/12', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/RES-3007-12%20Reglamentaria%20del%20Decreto%203758-12.pdf'),
                            ]),
    //AGENTES DE INFORMACION
    decretosAI: new Normativa( 'DECRETOS "AGENTES DE INFORMACIÓN"',
                                'url',
                                [
                                    new LinkDocumentos('Decreto Nº 1465/17 Modificación Calendario Régimen de Información', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2017-04-18-11-14-33Decreto%201465%20-%20Modificaci%C3%B3n%20Calendario%20R%C3%A9gimen%20de%20Informaci%C3%B3n.jpg'),
                                    new LinkDocumentos('Decreto 801/16 Faculta al Secretario de Ingresos Públicos a designar Agentes de Información', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2016-06-30-09-51-56Decreto%20801.16%20Faculta%20Secretario%20Ingresos%20Publicos%20a%20designar%20Agentes%20Informacion.pdf'),
                                    new LinkDocumentos('Decreto 2611/16 Calendario de Vencimientos del Régimen de Información', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2016-06-30-09-52-52Dto%202611-16.pdf')
                                ]),

    resolucionAI: new Normativa('RESOLUCIÓN "AGENTES DE INFORMACIÓN"',
                                'url',
                                [
                                    new LinkDocumentos('Resolución 917/16 Régimen Información para las Empresas Prestadoras de Servicios Públicos y/o Privados', 'https://www.vicentelopez.gov.ar/informacion_fiscal/files/2016-06-30-09-54-41Resolucion%20917.16%20REgimen%20INformacion%20Empresas%20Prestadoras%20Servicios%20Publicos.pdf')
                                ]),

    of35770: new Normativa('Ordenanza Fiscal N&deg; 35770 - Incorpora planilla general de usos COU para alquileres temporarios de oficinas y espacios de trabajo colaborativo',
                            URL_BASE_ARCHIVOS + '/normativas/COWORKING/Ordenanza-35770.pdf',
                            []),

    of36250: new Normativa('Ordenanza Fiscal N&deg; 36250 - Amplía y Modifica la Ordenanza N&deg; 35770',
                            URL_BASE_ARCHIVOS + '/normativas/COWORKING/Ordenanza-36250.pdf',
                            []),

    of36355: new Normativa('Ordenanza Fiscal N&deg; 36355 - Promulgada por Decreto 5248 del 28/12/2018',
                            URL_BASE_ARCHIVOS + '/normativas/2019/Ordenanza_36355_Fiscal_2019 E.5560.18_HCD.1078.18.pdf',
                            []),

    of36356: new Normativa('Ordenanza Impositiva N&deg; 36356 - Promulgada por Decreto 5249 del 28/12/2018',
                            URL_BASE_ARCHIVOS + '/normativas/2019/Ordenanza_36356_Impositiva_2019_E.5563.18_HCD.1079.18.pdf',
                            []),

    dt500218: new Normativa('Calendario Tributario 2019, Decreto Nº 5002/18',
                            URL_BASE_ARCHIVOS + '/normativas/2019/Decreto_5002.18_Establece_Ejercicio_2019_Calendario_Vencimiento_de_Pagos.pdf',
                            []),

    dt43319: new Normativa('Calendario de Vencimientos 2019 (modificatoria)',
                            URL_BASE_ARCHIVOS + '/normativas/2019/Dto.433-19_(Modif.Calend.Imp.5002-18).pdf',
                            []),

    to34397: new Normativa('Texto Ordenado Ordenanza Impositiva 2019, Decreto 1123/19',
                            URL_BASE_ARCHIVOS + '/normativas/2019/Decreto_1123.19_Texto_Ordenado_Ordenanza_Impositiva_34397.pdf',
                            []),

    dt531317: new Normativa('Calendario Tributario 2018, Decreto Nº 5313/17',
                            URL_BASE_ARCHIVOS + '/normativas/2018/Decreto_5313.17_Calendario_Fiscal_Vencimiento_de_Pagos_Ejercicio_2018.pdf',
                            []),

    dt164718: new Normativa('Modificaci&oacute;n Calendario Tributario 2018 incorpora 2do Vto. Patentes, Decreto Nº 1647/18',
                            URL_BASE_ARCHIVOS + '/normativas/2018/Decreto_1647.18_Modifica_Decreto_5313.17_Tributo_Patentes_de_Rodado_y_Motovehiculos.pdf',
                            []),

    IR_A_NORMATIVAS: new Normativa('Ir a Normativas',
                                    '/ingresos-publicos/info/normativaTributaria',
                                    []),

    to48972: new Normativa('Texto Ordenado Ordenanza Fiscal 2019, Decreto 767/19',
                            URL_BASE_ARCHIVOS + '/normativas/2019/Decreto_767.19_Texto_Ordenando_Ordenanza_Fiscal_2019.pdf',
                            []),

    res1303: new Normativa('Resolución 1303/19 Bonificación segundo semestre Régimen Simplificado',
                            URL_BASE_ARCHIVOS + '/normativas/resoluciones/Resolucion_1303_19_Reg_Simplif.pdf',
                            []),

  ord36821: new Normativa('Ordenanza Fiscal Nº 36821 promulgada por Decreto Nº 5501 del 13/12/2019',
    URL_BASE_ARCHIVOS + '/normativas/2020/Ordenanza_36821_Fiscal_2020_E.4998.19 HCD.806.19.pdf',
    []),

  ord36822: new Normativa('Ordenanza Impositiva Nº36822 promulgada por Decreto Nº 5502 del 13/12/2019',
                        URL_BASE_ARCHIVOS + '/normativas/2020/Ordenanza_36822_Impositiva_2020_E.5000.19 HCD.807.19.pdf',
                        []),

    dt5580: new Normativa('Calendario de Vencimientos 2020 (rectificativo)',
                            URL_BASE_ARCHIVOS + '/normativas/2020/dto.rectif.calendario_fiscal_2020.pdf',
                            []),

    dt3686: new Normativa('Calendario de Vencimientos 2021 ',
                            URL_BASE_ARCHIVOS + '/normativas/2021/Calendario_Impositivo2021_DECTO-36862020.pdf',
                            []),
                            
    ord36905: new Normativa('Ordenanza 36905 - Modifica Ordenanza 34397 Impositiva 2020',
                            URL_BASE_ARCHIVOS + '/normativas/2020/Ordenanza_36905_Modifica_Ordenanza_34397_Impositiva_2020_HCD.167.20_PREPARATORIA.pdf',
                            []),

    
    ord36906: new Normativa('Ordenanza 36906 - Modifica Ordenanza 34397 Impositiva 2020',
                            URL_BASE_ARCHIVOS + '/normativas/2020/Ordenanza_36906_Modifica_Ordenanza_34397_Impositiva_2020_E.1484.20_HCD.154.20_PREPARATORIA.pdf',
                            []),

    ord36925: new Normativa('Ordenanza 36925 - Modifica Ordenanza 34397 Impositiva 2020 - Entidades Financieras',
                            URL_BASE_ARCHIVOS + '/normativas/2020/Ord._36925_Modif_Orde._34397_Imp._2020_HCD.167.20_Entidades_Financ.pdf',
                            []),

    ord36926: new Normativa('Ordenanza 36926 - Modifica Ordenanza 34397 Impositiva 2020 - Grandes Superficies',
                            URL_BASE_ARCHIVOS + '/normativas/2020/Ord._36926_Modif._Ord.a_34397_Imp._2020_E.1484.20_HCD.154.20_Grandes_Superficies.pdf',
                            []),

    ord36926fe: new Normativa('Ordenanza 36926 Fe de Erratas Modifica Ordenanza 34397 Impositiva 2020 - Grandes Superficies',
                            URL_BASE_ARCHIVOS + '/normativas/2020/Ordenanza_36926_Fe_de_Erratas_Modifica_Ordenanza_34397_Impositiva_2020_E.1484.20_HCD.154.20.pdf',
                            []),

    ord36943: new Normativa('Ordenanza 36943 Modifica OI Incorpora modelo Autom. 2009',
                            URL_BASE_ARCHIVOS + '/normativas/2020/Ordenanza_36943_Modifica_OI_-_Incorpora_modelo_Autom.2009.pdf',
                            []),
}

export const CATEGORIA_NORMATIVAS = {
    ejercicio2021: new CategoriaNormativa(  'Ejercicio 2021',
                                            [ NORMATIVAS.dt3686 ],
                                            ''),

    ejercicio2020: new CategoriaNormativa(  'Ejercicio 2020',
                                            [ NORMATIVAS.ord36821, NORMATIVAS.ord36822, NORMATIVAS.dt5580, NORMATIVAS.ord36905, NORMATIVAS.ord36906, NORMATIVAS.ord36925, NORMATIVAS.ord36926, NORMATIVAS.ord36926fe, NORMATIVAS.ord36943 ],
                                            ''),

    ejercicio2019: new CategoriaNormativa(  'Ejercicio 2019',
                                            [ NORMATIVAS.to48972, NORMATIVAS.to34397, NORMATIVAS.of36355, NORMATIVAS.of36356, NORMATIVAS.dt500218, NORMATIVAS.dt43319 ],
                                            ''),

    ejercicio2018: new CategoriaNormativa(  'Ejercicio 2018',
                                            [ NORMATIVAS.of35765, NORMATIVAS.of35766, NORMATIVAS.dt531317, NORMATIVAS.dt164718 ],
                                            '<p>Fuente:  SECRETARIA DE GOBIERNO Y ASUNTOS INTERJURISDICCIONALES; Dirección General Administrativa y de Legislación; Subdirección Digesto Municipal</p>'),

    ejercicio2017: new CategoriaNormativa(  'Ejercicio 2017',
                                            [ NORMATIVAS.of35169, NORMATIVAS.of35170, NORMATIVAS.td96017 ],
                                            ''),

    ejercicio2016: new CategoriaNormativa(  'Ejercicio 2016',
                                            [ NORMATIVAS.of34396, NORMATIVAS.of34397, NORMATIVAS.td22716 ],
                                            ''),

    ejercicio2015: new CategoriaNormativa(  'Ejercicio 2015',
                                            [ NORMATIVAS.of33688, NORMATIVAS.of33689, NORMATIVAS.td38315 ],
                                            ''),

    ejercicio2014: new CategoriaNormativa(  'Ejercicio 2014',
                                            [ NORMATIVAS.of32959, NORMATIVAS.of32961, NORMATIVAS.td01314 ],
                                            ''),

    ejercicio2013: new CategoriaNormativa(  'Ejercicio 2013',
                                            [ NORMATIVAS.of32257, NORMATIVAS.of32258, NORMATIVAS.td42413 ],
                                            ''),

    disposicionesNormativas: new CategoriaNormativa('Otras Disposiciones Normativas',
                                                    [
                                                        NORMATIVAS.ordenanzas,
                                                        NORMATIVAS.decretos2020,
                                                        NORMATIVAS.decretos2019,
                                                        NORMATIVAS.decretos2018,
                                                        NORMATIVAS.decretos2017,
                                                        NORMATIVAS.decretos2016,
                                                        NORMATIVAS.decretos2015,
                                                        NORMATIVAS.decretos2014,
                                                        NORMATIVAS.decretos2013,
                                                        NORMATIVAS.decretos2012,
                                                        NORMATIVAS.resoluciones
                                                    ],
                                                    ''),

   agentesInformacion: new CategoriaNormativa(  'Agentes de Información',
                                                [
                                                    NORMATIVAS.decretosAI,
                                                    NORMATIVAS.resolucionAI
                                                ],
                                                ''),

    coworking: new CategoriaNormativa('Coworking',
                                      [
                                        NORMATIVAS.of35770,
                                        NORMATIVAS.of36250
                                      ],
                                      '')
};

export const PREGUNTAS = {
    // MEDIOS Y LUGARES DE PAGO
    opcionMVLonline:        new Pregunta('opcionMVLonline', '&iquest;Que sucede si no encuentro en mi agenda de pagos online la boleta de ALCVP y SV?', '<p><span class="fontstyle0">Utiliz&aacute; el SAT (Sistema de Autogesti&oacute;n Tributaria), y gener&aacute; la transacci&oacute;n desde nuestra plataforma. Pod&eacute;s abonar boletas vigentes<br />y vencidas.</span> </p>'),
    errorPago:              new Pregunta('errorPago', '&iquest;C&oacute;mo encontrar mi ticket de pago online en el Homebanking?', '<p><span class="fontstyle0">Esta opci&oacute;n est&aacute; destinada al pago de boletas generadas espec&iacute;ficamente desde el SAT (Sistema de Autogesti&oacute;n Tributaria). En el<br />caso de acceder al Homebanking y que no est&eacute; precargado el ticket generado, selecciona &ldquo;Impuestos Municipales&rdquo;, y a<br />continuaci&oacute;n:<br />&bull; Para Pago Mis Cuentas: &ldquo;MUNICIPIO DE VICENTE L&Oacute;PEZ ONLINE&rdquo;<br />&bull; Para Link Pagos: &ldquo;Mun.Vte.Lopez-Pagos Online&rdquo;<br />Luego ingres&aacute; el C&oacute;digo de Pago electr&oacute;nico que recibiste por correo electr&oacute;nico, al generar la transacci&oacute;n desde el SAT.</span> </p>'),
    demoraAcreditaciones:   new Pregunta('demoraAcreditaciones', 'Demora en acreditaciones de tus pagos', '<p>Los &uacute;nicos pagos que se ven en el SAT autom&aacute;ticamente son los realizados en la Sede Municipal o Delegaciones Municipales.&nbsp;Las entidades recaudadoras nos env&iacute;an la informaci&oacute;n aproximadamente con 15 d&iacute;as de posterioridad de realizado el pago, por esto, puede ser que tu pago a&uacute;n no est&eacute; ingresado en el sistema.</p>'),
    // SAT
    sat:                    new Pregunta('sat', '&iquest;Qu&eacute; es el SAT (Sistema de Autogesti&oacute;n Tributaria)?', '<p>Se trata de una plataforma en la cual pod&eacute;s verificar tu/s cuenta municipales, imprimir boletas y realizar pagos online, tanto de cuotas vigentes como vencidas. Si sos titular o un tercero debidamente autorizado, ingres&aacute; a SAT y cre&aacute; tu usuario. Solo necesitas tu CUIT, un correo electr&oacute;nico y el N&deg; de tu cuenta municipal (ALCVP / Automotores / Motoveh&iacute;culos / Cementerio).</p>'),
    registroSat:            new Pregunta('registroSat', `<a href="${ URL_BASE_ARCHIVOS + '/instructivo/SAT/Instructivo_Registracion_a_SAT.pdf' }" target="_blank">&iquest;C&oacute;mo registrarse en el SAT por primera vez?</a><br><br>`, ''),
    alcvpysvycpc:           new Pregunta('alcvpysvycpc', '&iquest;Qu&eacute; significa ALCVP y SV, y d&oacute;nde puedo encontrar el N&deg; de cuenta del mismo?', '<p>ALCVP y SV es la tasa por Alumbrado, Limpieza, Conservaci&oacute;n de la V&iacute;a P&uacute;blica y Servicios Varios (ex ABL).<br />La boleta se env&iacute;a bimestralmente a todos los domicilios y comercios del partido. Vas a poder identificarla como la boleta de color verde.<br />El N&deg; de cuenta est&aacute; en tu boleta f&iacute;sica, compuesto por 6 n&uacute;meros.</p>'),
    ablDC:                  new Pregunta('ablDC', '&iquest;Qu&eacute; significa D.C. y d&oacute;nde puedo encontrarlo?', '<p>D.C. significa D&Iacute;GITO CONTROL. Pod&eacute;s encontrarlo en la parte superior de tu boleta de ALCVP y SV (Alumbrado, Limpieza,<br />Conservaci&oacute;n de la V&iacute;a P&uacute;blica y Servicios Varios - ex ABL), compuesto por dos n&uacute;meros.</p>'),
    consultaDeuda:          new Pregunta('consultaDeuda', '&iquest;C&oacute;mo consulto mi deuda?', '<p>1) Ingres&aacute; a SAT con tu CUIT / CUIL y contrase&ntilde;a<br />2) En la p&aacute;gina principal, visualizar&aacute;s la secci&oacute;n MIS CUENTAS, donde podr&aacute;s encontrar tu/s cuenta/s asociadas. Seleccion&aacute; la cuenta de la cual quer&eacute;s consultar la deuda.<br />3) En la parte superior, seleccion&aacute; la pesta&ntilde;a ESTADO DE CUENTA. All&iacute; podr&aacute;s visualizar tu estado de deuda y cuotas a vencer.</p>'),
    deudaLegales:           new Pregunta('deudaLegales', '&iquest;Qu&eacute; ocurre si poseo deuda en Legales?', '<p>Si la deuda est&aacute; en Legales, tu cuenta comprende per&iacute;odos al cobro por v&iacute;a judicial. Te lo notificaremos desde el SAT, con una mensaje en la pantalla, en tu ESTADO DE CUENTA.</p><p>Para poder consultar la misma, dirigite a la oficina de Apremios (Sede Municipal: Av. Maipu 2609, PB, Olivos)</p>'),
    generarBoleta:          new Pregunta('generarBoleta', '&iquest;C&oacute;mo genero mi boleta de pago?', '<p>1) Ingres&aacute; a SAT con tu CUIT / CUIL y contrase&ntilde;a<br />2) En la p&aacute;gina principal, visualizar&aacute;s la secci&oacute;n MIS CUENTAS, donde podr&aacute;s encontrar tu/s cuenta/s asociadas. Seleccion&aacute; la cuenta de la cual quer&eacute;s generar la boleta de pago.<br />3) En la parte superior, seleccion&aacute; la pesta&ntilde;a ESTADO DE CUENTA. All&iacute; podr&aacute;s visualizar tu estado de deuda, cuotas vencidas y a vencer, y medios de pago.<br />4) Seleccion&aacute; el/los per&iacute;odos que desees pagar.<br />5) En MEDIOS DE PAGO, seleccion&aacute; el &iacute;cono de la impresora para GENERAR RECIBO.<br />6) Seleccion&aacute; una fecha para generar el recibo correspondiente. Ten&eacute; en cuenta que al momento de seleccionar una fecha posterior, se calcular&aacute;n los intereses a la fecha seleccionada.<br />7) Seleccion&aacute; el bot&oacute;n ACEPTAR.<br />8) A continuaci&oacute;n, la boleta de pago se descargar&aacute; en formato PDF autom&aacute;ticamente.<br />9) Imprimila y abon&aacute; en los lugares habilitados a tal fin.</p>'),
    popupPago:              new Pregunta('popupPago', '&iquest;No te abren las pantallas de pago?', '<p>Los elementos emergentes pueden estar siendo bloqueados por un POPUP BLOCKER en tu navegador. Para desactivarlo (Navegador Chrome):<br>1) Abr&iacute; tu navegador<br>2) En la parte superior derecha, hac&eacute; click en &quot;M&Aacute;S&quot; (3 puntos verticales, esquina superior derecha)<br>3) Abajo de la lista, click en &quot;CONFIGURACI&Oacute;N&quot;<br>4) En la parte inferior, click en &quot;CONFIGURACI&Oacute;N AVANZADA&quot;<br>5) En la secci&oacute;n &quot;PRIVACIDAD Y SEGURIDAD&quot;, click en &quot;CONFIGURACI&Oacute;N DE SITIOS WEB&quot;<br>6) Click en &quot;VENTANAS EMERGENTES Y REDIRECCIONES&quot; <br>7) Activar la opci&oacute;n &quot;PERMITIDO</p>'),
    recuperarContrasena:    new Pregunta('recuperarContrasena', '&iquest;Te olvidaste la contrase&ntilde;a de SAT?', '<p>1) En el ingreso de SAT, seleccion&aacute; &iquest;OLVID&Oacute; SU CONTRASE&Ntilde;A?<br />2) Para la recuperaci&oacute;n de contrase&ntilde;a, ingres&aacute; tu correo electr&oacute;nico, seleccion&aacute; tributo e ingres&aacute; el N&deg; de cuenta municipal. Seleccion&aacute; el bot&oacute;n RECUPERAR CLAVE y aguard&aacute; unos segundos.<br />3) A continuaci&oacute;n, se enviar&aacute; un mensaje al correo electr&oacute;nico ingresado, con el asunto CAMBIO CLAVE. Revis&aacute; tu carpeta de Bandeja de Entrada. Si no lo hallas all&iacute;, revis&aacute; en la carpeta de Correo no deseado o Spam<br />4) Una vez que identifiques el mensaje, se te asignar&aacute; una nueva clave para el sistema. (Ejemplo: HyM1Fy)<br />5) Ingres&aacute; nuevamente a SAT<br />6) Ingres&aacute; con tu CUIT y tu nueva contrase&ntilde;a<br />7) Para cambiarla nuevamente, dirigite a la solapa lateral izquierda PERFIL. All&iacute; visualizar&aacute;s la secci&oacute;n de CAMBIO DE CONTRASE&Ntilde;A<br />8) Ingres&aacute; tu clave actual, y la nueva que desees.<br />9) No olvides guardar los cambios</p>'),
    asociarCuenta:          new Pregunta('asociarCuenta', '&iquest;C&oacute;mo asocio una cuenta / dominio a SAT?', '<p>Pod&eacute;s administrar las cuentas / dominios que desees, con tu mismo CUIT, correo electr&oacute;nico y contrase&ntilde;a, as&iacute; como tambi&eacute;n desvincular las que ya no utilizas.<br /><br />1) Ingres&aacute; a SAT con tu CUIT / CUIL y contrase&ntilde;a<br />2) En el men&uacute; principal, visualiz&aacute; la secci&oacute;n ASOCIAR CUENTA.<br />3) Seleccion&aacute; el tributo, ingres&aacute; el N&deg; de cuenta / dominio municipal (ALCVP, Automotor, Motoveh&iacute;culo, Cementerio). En el caso de ALCVP, ingres&aacute; tu D&Iacute;GITO VERIFICADOR (DV), compuesto de 2 d&iacute;gitos.<br />4) Seleccion&aacute; el bot&oacute;n BUSCAR (lupa)<br />5) Escrib&iacute; el ALIAS, es decir, el apodo de la cuenta que quer&eacute;s asociar<br />6) A continuaci&oacute;n, se mostrar&aacute; la cuenta hallada con los datos correspondientes. Si quer&eacute;s asociarla, seleccion&aacute; VINCULAR o LIMPIAR para descartar la b&uacute;squeda.<br />7) Listo, poder ver tu/s cuenta/s asociadas en la p&aacute;gina principal, en la secci&oacute;n MIS CUENTAS</p>'),
    cuentasAsociadas:       new Pregunta('cuentasAsociadas', '&iquest;C&oacute;mo visualizo las cuentas asociadas?', '<p>1) Ingres&aacute; a SAT con tu CUIT / CUIL y contrase&ntilde;a<br />2) En el men&uacute; principal, en la secci&oacute;n &ldquo;Mis Cuentas&rdquo; podr&aacute;s visualizar todas tus cuentas asociadas</p>'),
    desasociarCuenta:       new Pregunta('desasociarCuenta', '&iquest;C&oacute;mo desvinculo una cuenta / dominio?', '<p>1) Ingres&aacute; a SAT con tu CUIT / CUIL y contrase&ntilde;a<br />2) En el men&uacute; principal, en la secci&oacute;n &ldquo;Mis Cuentas&rdquo; podr&aacute;s visualizar todas tus cuentas asociadas<br />3) Cada cuenta asociada posee una cruz en su extremo superior derecho. Seleccion&aacute; la cruz para desvincularla. (Record&aacute; que la cuenta / dominio, NO se elimina, simplemente se desvincula de tu usuario)</p>'),
    satMobile:              new Pregunta('satMobile', '', ''),
    // PPC
    asociarPPC:              new Pregunta('asociarPPC', `<a href="${ URL_BASE_ARCHIVOS + '/instructivo/SAT/Instructivo_Asociar_Plan_de_Pago_en_SAT.pdf' }" target="_blank">&iquest;C&oacute;mo asocio mi Plan de Pago en cuotas en el SAT?</a>`, ''),
    // BENEFICIO DE PAGO CONTADO
    beneficioDeudaContado:  new Pregunta('beneficioDeudaContado', '&iquest;Cu&aacute;l es el Beneficio por Pago contado de Deuda?', '<p>Para cancelar la totalidad de tu deuda, la Municipalidad te otorga el beneficio de pago contado, descont&aacute;ndote la totalidad de la multa y el 50% de los recargos (Art. 55&deg; Inc. F de la O.F. vigente). Quedan exentos de este beneficio aquellas deudas cuyo descuento supera los $40.000, pesos cuarenta mil (Decreto 3079/15).</p>'),
    // CLAVE FISCAL
    olvidoClaveCF:          new Pregunta('olvidoClaveCF', '&iquest;Te olvidaste la contrase&ntilde;a de Clave Fiscal?', '<p>1) En el ingreso a Clave Fiscal, seleccion&aacute; &iquest;OLVID&Oacute; SU CLAVE?<br />2) Para la recuperaci&oacute;n de contrase&ntilde;a, ingres&aacute; tu CUIT y correo electr&oacute;nico.<br />3) A continuaci&oacute;n, se enviar&aacute; un mensaje al correo electr&oacute;nico ingresado. Revis&aacute; tu carpeta de Bandeja de Entrada. Si no lo hallas all&iacute;, revis&aacute; en la carpeta de Correo no deseado o Spam<br />4) Una vez que identifiques el mensaje, se te asignar&aacute; una nueva clave para el sistema.<br />5) Ingres&aacute; nuevamente a Clave Fiscal <br />6) Ingres&aacute; con tu CUIT y tu nueva contrase&ntilde;a</p>'),
    // ABL
    ablPagoDoble:           new Pregunta('ablPagoDoble', 'Pagu&eacute; dos o m&aacute;s veces mi boleta (ALCVP y SV)', '<p><strong>a) Para acreditaci&oacute;n a futuras cuotas</strong><br />Gener&aacute; una consulta en CONTACTANOS con la categor&iacute;a PAGO DOBLE/M&Uacute;LTIPLE, adjuntando los tickets de pago duplicados y datos de la cuenta.<br /><strong>b) Para Devoluci&oacute;n</strong><br />Deber&aacute;s iniciar el EXPEDIENTE DE ACREDITACI&Oacute;N en Mesa General de Entradas (MGE) en la Sede Municipal (Av Maip&uacute; 2609, PB, Olivos - Horario de 8:00 a 16:00 hs.)</p>'),
    ablPMC:                 new Pregunta('ablPMC', 'C&oacute;mo pagar desde Pago Mis Cuentas (Banelco) &ndash; para Cuotas vigentes', '<p>1) Ingres&aacute; a Pago mis Cuentas<br />2) Seleccion&aacute; el bot&oacute;n superior derecho INGRES&Aacute;<br />3) Seleccion&aacute; tu banco, ingres&aacute; tu DNI y la contrase&ntilde;a de tu banco<br />4) En la categor&iacute;a RUBRO, seleccion&aacute; IMPUESTOS MUNICIPALES<br />5) En la categor&iacute;a EMPRESA, seleccion&aacute; MUNICIPIO VICENTE L&Oacute;PEZ<br />6) Seleccion&aacute; la acci&oacute;n PAGAR<br />7) Ingres&aacute; el c&oacute;digo Banelco, compuesto de 02+N&deg; de cuenta de ALCVP</p>'),
    ablLinkPagos:           new Pregunta('ablLinkPagos', 'C&oacute;mo pago desde mi homebanking (Link Pagos) &ndash; para Cuotas vigentes', '<p>1) Ingres&aacute; al homebanking de tu banco<br />2) Seleccion&aacute; AGREGAR SERVICIO<br />3) En la categor&iacute;a RUBRO, seleccion&aacute; IMPUESTOS MUNICIPALES<br />4) En la categor&iacute;a EMPRESA, seleccion&aacute; MUNICIPALIDAD DE VICENTE L&Oacute;PEZ<br />5) Ingres&aacute; el c&oacute;digo de Link Pagos, compuesto por 072+N&deg; de cuenta de ALCVP + D&iacute;gito Control</p>'),
    ablCambioTitularidad:   new Pregunta('ablCambioTitularidad', 'Cambio de Titularidad', '<p><span class="fontstyle0">Cambio de Titularidad de la boleta de la tasa de ALCVP y SV. Se realiza en el d&iacute;a y en forma presencial.<br />Requisitos:<br />1) Escritura completa (original) con sello inscrito en el Registro de la Propiedad Inmueble (sello rectangular de inscripci&oacute;n en donde<br />se lee la matr&iacute;cula y fecha de inscripci&oacute;n)<br />2) CUIT/CUIL titular/es<br />3) Documento de Identidad de titular/es<br />4 Boleta de la tasa de Alumbrado, Limpieza, Conservaci&oacute;n de la V&iacute;a P&uacute;blica y Servicios Varios (ALCVP y SV)<br />5) Tel&eacute;fono de contacto<br />6) Correo electr&oacute;nico<br />Modalidad Presencial (en el d&iacute;a): Presentate en la Ventanilla &Uacute;nica de Atenci&oacute;n Tributaria o en la Delegaci&oacute;n Municipal m&aacute;s cercana<br />a tu domicilio con los requisitos<br />Aclaraci&oacute;n: En el caso de ir a una delegaci&oacute;n, tendr&aacute;s que dejar fotocopias de la documentaci&oacute;n. La original se constata y las copias<br />se env&iacute;an por correo interno a Atenci&oacute;n Tributaria. Cuando llegue la Constancia de cambio de Titularidad a la Delegaci&oacute;n, la podr&aacute;s<br />retirar.</span> </p>'),
    // AUTOMOTORES
    autosMunicipalizados:   new Pregunta('autosMunicipalizados', '&iquest;Cu&aacute;les son los veh&iacute;culos municipalizados?', '<p>Modelos 1977 a 2009 inclusive</p>'),
    autosVencimientos:      new Pregunta('autosVencimientos', '&iquest;Cu&aacute;ndo operan los vencimientos?', '<p>Operan en tres cuotas: Julio, Septiembre y Diciembre.<br />Tambi&eacute;n se puede realizar el pago Anual, la boleta se emite en Julio.</p>'),
    autosExcentos:          new Pregunta('autosExcentos', '&iquest;Qu&eacute; veh&iacute;culos est&aacute;n exentos?', '<p>Por Ley Impositiva de la Provincia, los modelos 1977 a 1989 inclusive, no tributan y est&aacute;n municipalizados.<br />Por Ord. Municipal No 33368/14, los modelos 1990 a 1993 inclusive, no tributan y est&aacute;n municipalizados.</p>'),
    autosTributan:          new Pregunta('autosTributan', '&iquest;Qu&eacute; veh&iacute;culos municipalizados tributan?', '<p>De los modelos municipalizados (1977 a 2009), tributan los modelos 1994 a 2009.</p>'),
    autosDeudaIngreso:      new Pregunta('autoDeudaIngreso', '¿Qu&eacute; ocurre si un veh&iacute;culo posee deuda al momento de municipalizarse?', '<p>La misma pasa al Municipio para su posterior cobro.<br />En el caso en que el veh&iacute;culo posea una moratoria y se encuentre al d&iacute;a, &eacute;sta NO pasa.<br />En caso de que esta no estuviese al d&iacute;a al momento de presentarse a realizar alg&uacute;n tr&aacute;mite, si corresponde, se realizar&aacute; el rec&aacute;lculo de la deuda.</p>'),
    autosSAT:               new Pregunta('autosSAT', '&iquest;Qu&eacute; veh&iacute;culos puedo visualizar en el SAT?', '<p>Pod&eacute;s visualizar la deuda de dominios que se encuentren activos.<br />No as&iacute;, aquellos que se encuentren designados con Baja Definitiva, Baja Latente, Denuncia Impositiva o Exentos por Discapacidad.</p>'),
    autosPagoDoble:         new Pregunta('autosPagoDoble', 'Pagu&eacute; dos o m&aacute;s veces mi boleta de Automotor', '<p><strong>a) Para acreditaci&oacute;n a futuras cuotas</strong><br />Gener&aacute; una consulta en CONTACTANOS con la categor&iacute;a PAGO DOBLE/M&Uacute;LTIPLE, adjuntando los tickets de pago duplicados y datos de la cuenta.<br /><strong>b) Para Devoluci&oacute;n</strong><br />Deber&aacute;s iniciar el EXPEDIENTE DE ACREDITACI&Oacute;N en Mesa General de Entradas (MGE) en la Sede Municipal (Av Maip&uacute; 2609, PB, Olivos - Horario de 8:00 a 16:00 hs.)</p>'),
    // MOTOS
    motoCambioDomicilio:    new Pregunta('motoCambioDomicilio', 'Pagu&eacute; dos o m&aacute;s veces mi boleta de Motoveh&iacute;culo', '<p>a) Para acreditaci&oacute;n a futuras cuotas<br/>Gener&aacute; una consulta en CONTACTANOS con la categor&iacute;a PAGO DOBLE/M&Uacute;LTIPLE, adjuntando los tickets de pago duplicados y datos de la cuenta.<br/>b) Para Devoluci&oacute;n<br/>Deber&aacute;s iniciar el EXPEDIENTE DE ACREDITACI&Oacute;N en Mesa General de Entradas (MGE) en la Sede Municipal (Av Maip&uacute; 2609, PB, Olivos - Horario de 8:00 a 16:00 hs.)</p>'),
    // REGIMEN SIMPLIFICADO
    rsBoleta:               new Pregunta('rsBoleta', '&iquest;C&oacute;mo genero mi boleta de pago?', '<p>1) Ingres&aacute; a R&eacute;gimen Simplificado con tu CUIT y contrase&ntilde;a<br />2) En la p&aacute;gina principal, visualizar&aacute;s la secci&oacute;n MIS CUENTAS, donde podr&aacute;s encontrar tu/s cuenta/s asociadas. Seleccion&aacute; la cuenta de la cual quer&eacute;s generar la boleta de pago.<br />3) En la parte superior, seleccion&aacute; la pesta&ntilde;a ESTADO DE CUENTA. All&iacute; podr&aacute;s visualizar tu estado de deuda, cuotas vencidas y a vencer, y medios de pago.<br />4) Seleccion&aacute; el/los per&iacute;odos que desees pagar.<br />5) En MEDIOS DE PAGO, seleccion&aacute; el &iacute;cono de la impresora para GENERAR RECIBO.<br />6) Seleccion&aacute; una fecha para generar el recibo correspondiente. (Ten&eacute; en cuenta que al momento de seleccionar una fecha posterior, se clcular&aacute;n los intereses a la fecha seleccionada).<br />7) Seleccion&aacute; el bot&oacute;n ACEPTAR.<br />8) A continuaci&oacute;n, la boleta de pago se descargar&aacute; en formato PDF autom&aacute;ticamente.<br />9) Imprimila y abon&aacute; en los lugares habilitados a tal fin.</p>'),
    // SEGURIDAD E HIGIENE
    pagarDDJJSeH:           new Pregunta('pagarDDJJSeH', '&iquest;C&oacute;mo abono mi DDJJ mensual de Inspecci&oacute;n por Seguridad e Higiene?', '<p><strong>a) Pago Online:</strong><br />&bull; Pago Mis Cuentas<br />&bull; Interbanking<br /><strong>b) Pago Presencial:</strong><br />Gener&aacute; la boleta de pago, descargala y abonala en:<br />&bull; Sede Municipal<br />&bull; Delegaciones Municipales<br /><br /><strong>Bancos Habilitados:</strong><br />&bull; Ita&uacute;<br />&bull; HSBC<br />&bull; Supervielle<br />&bull; Banco Ciudad<br />&bull; Provincia<br />&bull; Credicoop</p>'),
    // CATASTRO
    catastroCambioTit:      new Pregunta('catastroCambioTit', 'Cambio de Titularidad', '<p><span class="fontstyle0">Cambio de Titularidad de la boleta de la tasa de ALCVP y SV. Se realiza en el d&iacute;a y en forma presencial.<br />Requisitos:<br />1) Escritura completa (original) con sello inscrito en el Registro de la Propiedad Inmueble (sello rectangular de inscripci&oacute;n en donde<br />se lee la matr&iacute;cula y fecha de inscripci&oacute;n)<br />2) CUIT/CUIL titular/es<br />3) Documento de Identidad de titular/es<br />4 Boleta de la tasa de Alumbrado, Limpieza, Conservaci&oacute;n de la V&iacute;a P&uacute;blica y Servicios Varios (ALCVP y SV)<br />5) Tel&eacute;fono de contacto<br />6) Correo electr&oacute;nico<br />Modalidad Presencial (en el d&iacute;a): Presentate en la Ventanilla &Uacute;nica de Atenci&oacute;n Tributaria o en la Delegaci&oacute;n Municipal m&aacute;s cercana<br />a tu domicilio con los requisitos<br />Aclaraci&oacute;n: En el caso de ir a una delegaci&oacute;n, tendr&aacute;s que dejar fotocopias de la documentaci&oacute;n. La original se constata y las copias<br />se env&iacute;an por correo interno a Atenci&oacute;n Tributaria. Cuando llegue la Constancia de cambio de Titularidad a la Delegaci&oacute;n, la podr&aacute;s<br />retirar.</span> </p>'),
    // CEMENTERIO
    cementerioSAT:          new Pregunta('cementerioSAT', '&iquest;Qu&eacute; cuenta de Cementerio puedo pagar por el SAT?', '<p>A trav&eacute;s de SAT pod&eacute;s realizar consultas y pagos correspondientes a cuentas de b&oacute;vedas, sepulcros y sepulturas arrendadas mediante t&iacute;tulo de propiedad. Para gestiones relacionadas con la renovaci&oacute;n de la tasa de Derechos de Conservaci&oacute;n de nichos y sepulturas no arrendadas, dirigite a la Direcci&oacute;n de Cementerio (Pelliza 3100, Olivos). M&aacute;s informaci&oacute;n, llamando al 4790-9269</p>'),
    // PILETAS
    piletaBoleta:           new Pregunta('piletaBoleta', '&iquest;Problemas para descargar tu boleta de Pileta?', '<p>Si al querer descargarla, te aparece un mensaje de error (el documento es incorrecto o no existe en el Sistema), significa que no est&aacute;s empadronado en el Sistema Municipal, por lo que deber&aacute;s consultar en el Club.</p>'),
    // PUBLICIDAD Y PROPAGANDA
    pypCanon:               new Pregunta('pypCanon', '&iquest;Qu&eacute; comprende el canon de publicidad y propaganda?', '<p>Es el hecho de realizar publicidad o propaganda en la v&iacute;a p&uacute;blica con fines comerciales.<br />En la secci&oacute;n &ldquo;Normativa Tributaria&rdquo; encontrar&aacute;s las Ordenanzas Fiscal e Impositiva vigente, all&iacute; visualizar&aacute;s las especificaciones en publicidad y propaganda.</p>'),
    pypCartelria:           new Pregunta('pypCartelria', '&iquest;Qu&eacute; tipo de carteler&iacute;a existe?', '<p>Existen 2 tipos: letreros y avisos. Los letreros son los carteles que llevan el nombre propio del local o la actividad que realiza y&nbsp;los avisos anuncian a un tercero, a una marca registrada.</p>'),
    pypAnuncios:            new Pregunta('pypAnuncios', '&iquest;C&oacute;mo se clasifican los anuncios?', '<p>Se clasifican por tipo, caracter&iacute;sticas, emplazamiento o estructura portante.</p>'),
    pypCalculos:            new Pregunta('pypCalculos', '&iquest;C&oacute;mo se calcula el canon de publicidad y propaganda?', '<p>Seg&uacute;n las unidades que establezca la Ordenanza Impositiva, se abona por cada tipo o clase y zona de la publicidad. Los&nbsp;contribuyentes declaran su carteler&iacute;a en forma anual, excepto las empresas de publicidad o inmobiliarias que tambi&eacute;n tienen liquidaciones trimestrales.</p>'),
    pypDeclaracion:         new Pregunta('pypDeclaracion', '&iquest;Cu&aacute;ndo declaro mi publicidad?', '<p>&bull; Si la actividad se liquida por el r&eacute;gimen general, la declaraci&oacute;n de publicidad y propaganda se realiza en forma anual y en general su vencimiento es en el mes de junio. En la secci&oacute;n &ldquo;Calendario Tributario&rdquo; se publica el vencimiento anual de PyP. El sistema para declarar se habilita aproximadamente 30 d&iacute;as antes del vencimiento.<br/>&bull; Si el comercio est&aacute; comprendido en R&eacute;gimen Simplificado, en la declaraci&oacute;n jurada que se realiza al comenzar el a&ntilde;o o al iniciar la actividad existe una secci&oacute;n de publicidad donde se informa la carteler&iacute;a y su detalle. El vencimiento es el que se publica en &ldquo;Calendario Tributario&rdquo; para RS. Este canon est&aacute; incluido en el importe de las cuotas fijas y mensuales que tiene el r&eacute;gimen.<br/>&bull; Si la actividad es de Publicidad (anunciante) o inmobiliaria es necesario inscribirse en el Registro de Anunciantes y solicitar la trimestraci&oacute;n. En la secci&oacute;n &ldquo;Calendario Tributario&rdquo; se publican los vencimientos trimestrales. El sistema se habilitar&aacute; para declarar 7 d&iacute;as antes de cada vencimiento trimestral.</p>'),  
    // OCUPACION DE ESPACIO PUBLICO
    oepQueEs:               new Pregunta('oepQueEs', '&iquest;Qu&eacute; comprende el canon por ocupaci&oacute;n o uso de espacios p&uacute;blicos?', '<p>Es la ocupaci&oacute;n del espacio por particulares o empresas de servicios p&uacute;blicos tipo a&eacute;reo, subsuelo con s&oacute;tanos, v&iacute;a p&uacute;blica,&nbsp;instalaci&oacute;n de toldos, marquesinas, m&aacute;quinas de construcci&oacute;n, cables, c&aacute;maras y dem&aacute;s elementos detallados en la ordenanza fiscal vigente. En la secci&oacute;n &ldquo;Normativa Tributaria&rdquo; se publican las Ordenanzas Fiscal e Impositiva vigentes y all&iacute; se encuentran las especificaciones en Ocupaci&oacute;n o Uso de Espacios P&uacute;blicos.</p>'),
    oepPermiso:             new Pregunta('oepPermiso', '&iquest;D&oacute;nde tramito el permiso para ocupaci&oacute;n de espacios p&uacute;blicos?', '<p>Est&aacute; prohibido ocupar la v&iacute;a p&uacute;blica y/o acera excepto en los casos en los que est&aacute; espec&iacute;ficamente permitido mediante ordenanzas especiales.<br />Para hacer uso de espacios p&uacute;blicos hay que dirigirse a la Secretar&iacute;a de Fiscalizaci&oacute;n y Control de la Municipalidad que es el &aacute;rea&nbsp;que otorga habilitaciones y permisos:&nbsp;</p><p><a href="https://www.vicentelopez.gov.ar/secretaria-de-fiscalizacion-y-control-habilitaciones-y-ambiente" target="_blank">https://www.vicentelopez.gov.ar/secretaria-de-fiscalizacion-y-control-habilitaciones-y-ambiente</a></p>'),
    oepDeclaracion:         new Pregunta('oepDeclaracion', '&iquest;Cu&aacute;ndo declaro mi ocupaci&oacute;n del espacio p&uacute;blico?', '<p>&bull; Si la actividad se liquida por el r&eacute;gimen general, la declaraci&oacute;n de OEP se realiza en forma anual y en general su vencimiento es en el mes de junio. En la secci&oacute;n &ldquo;Calendario Tributario&rdquo; se publica el vencimiento anual de OEP. El sistema para declarar se habilita aproximadamente 30 d&iacute;as antes del vencimiento.</br>&bull; Si el comercio est&aacute; comprendido en R&eacute;gimen Simplificado, en la declaraci&oacute;n jurada que se realiza al comenzar el a&ntilde;o o al&nbsp;iniciar la actividad existe una secci&oacute;n de ocupaci&oacute;n o uso de espacios p&uacute;blicos donde se informa el detalle. El vencimiento es el&nbsp;que se publica en &ldquo;Calendario Tributario&rdquo; para RS. Este canon est&aacute; incluido en el importe de las cuotas fijas y mensuales que tiene el r&eacute;gimen.</p>'),
    // ANTENAS
    antenasDeclaracion:     new Pregunta('antenasDeclaracion', '&iquest;Cu&aacute;ndo declaro el tributo de verificaci&oacute;n de estructuras y/o soportes de antenas y equipos complementarios?', '<p>En la secci&oacute;n &ldquo;Calendario Tributario&rdquo; se publican los vencimientos trimestrales. El sistema se habilitar&aacute; para declarar&nbsp;aproximadamente 10 d&iacute;as antes de cada vencimiento trimestral.</p>'),    
};

export const CATEGORIA_PREGUNTAS = {
    mediosLugarPago: new CategoriaPregunta('mediosLugarPago', 'Medios y Lugares de Pago', [
        PREGUNTAS.opcionMVLonline,
        PREGUNTAS.errorPago,
    ]),
    sat: new CategoriaPregunta('sat', 'SAT - Sistema de Autogesti&oacute;n Tributaria', [
        PREGUNTAS.sat,
        PREGUNTAS.registroSat,
        PREGUNTAS.alcvpysvycpc,
        PREGUNTAS.ablDC,
        PREGUNTAS.consultaDeuda,
        PREGUNTAS.deudaLegales,
        PREGUNTAS.generarBoleta,
        PREGUNTAS.popupPago,
        PREGUNTAS.recuperarContrasena,
        PREGUNTAS.asociarCuenta,
        PREGUNTAS.cuentasAsociadas,
        PREGUNTAS.desasociarCuenta,
        PREGUNTAS.satMobile
    ]),
    ppc: new CategoriaPregunta('planesPagoCuotas', 'Planes de Pago en Cuotas', [
        PREGUNTAS.asociarPPC
    ]),
    beneficioDeudaContado: new CategoriaPregunta('beneficioDeudaContado', 'Beneficios por Pago Contado de Deuda', [
        PREGUNTAS.beneficioDeudaContado
    ]),
    cf: new CategoriaPregunta('cf', 'Clave Fiscal (Comercio e Industria)', [
        PREGUNTAS.olvidoClaveCF
    ]),
    abl: new CategoriaPregunta('abl', 'Alumbrado, Limpieza, Conservaci&oacute;n de la V&iacute;a P&uacute;blica y Servicios Varios', [
        PREGUNTAS.ablPagoDoble,
        PREGUNTAS.ablPMC,
        PREGUNTAS.ablLinkPagos
    ]),
    auto: new CategoriaPregunta('auto', 'Automotores Municipalizados', [
        PREGUNTAS.autosMunicipalizados,
        PREGUNTAS.autosVencimientos,
        PREGUNTAS.autosExcentos,
        PREGUNTAS.autosTributan,
        PREGUNTAS.autosDeudaIngreso,
        PREGUNTAS.autosSAT,
        PREGUNTAS.autosPagoDoble
    ]),
    moto: new CategoriaPregunta('moto', 'Motoveh&iacute;culos', [
        PREGUNTAS.motoCambioDomicilio
    ]),
    barco: new CategoriaPregunta('barco', 'Embarcaciones', []),
    rs: new CategoriaPregunta('rs', 'R&eacute;gimen Simplificado', [
        PREGUNTAS.rsBoleta
    ]),
    seh: new CategoriaPregunta('seh', 'Seguridad e Higiene', [
        PREGUNTAS.pagarDDJJSeH
    ]),
    pyp: new CategoriaPregunta('pyp', 'Publicidad y Propaganda', [
        PREGUNTAS.pypCanon,
        PREGUNTAS.pypCartelria,
        PREGUNTAS.pypAnuncios,
        PREGUNTAS.pypCalculos,
        PREGUNTAS.pypDeclaracion,
    ]),
    oep: new CategoriaPregunta('oep', 'Ocupaci&oacute;n o Uso de Espacios P&uacute;blicos', [
        PREGUNTAS.oepQueEs,
        PREGUNTAS.oepPermiso,
        PREGUNTAS.oepDeclaracion,
    ]),
    mv: new CategoriaPregunta('mv', 'Mantenimiento Vial Municipal', []),
    antenas: new CategoriaPregunta('antenas', 'Antenas', [
        PREGUNTAS.antenasDeclaracion
    ]),
    iibb: new CategoriaPregunta('iibb', 'Ingresos Brutos', []),
    svm: new CategoriaPregunta('svm', 'Servicios Varios', []),
    catastro: new CategoriaPregunta('catastro', 'Catastro', []),
    cementerio: new CategoriaPregunta('cementerio', 'Derechos de Cementerio', [
        PREGUNTAS.cementerioSAT
    ]),
    piletas: new CategoriaPregunta('pelitas', 'Revisaci&oacute;n M&eacute;dica de Pileta', [
        PREGUNTAS.piletaBoleta
    ])
};

export const GUIAS_TRAMITE = {
    abl: new ListaFormularios('Alumbrado, Limpieza, Conservaci&oacute;n de la V&iacute;a P&uacute;blica y Servicios Varios', [
        new RegistroAcordeonGuiasTramiteFormularios('Cambio de Titularidad', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Cambio_de_Titularidad.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ABL/Formulario_ALCVP_y_SV_Cambio_de_Titularidad.pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Cambio de Domicilio Postal', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Cambio_de_Domicilio_Postal.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ABL/Formulario_ALCVP_y_SV_Cambio_Domicilio_Postal.pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Cambio de Categor&iacute;a y Valuaci&oacute;n', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Cambio_de_Categoria_y_Valuacion.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ABL/Formulario_ALCVP_y_SV_Cambio_de_Categoria_y_Valuacion.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Consulta de Deuda', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Informe_de_Deuda.pdf'], 'url_pregunta_frecuente', [], true),
        new RegistroAcordeonGuiasTramiteFormularios('Alta D&eacute;bito Autom&aacute;tico', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Adhesion_Baja_Debito_Automatico.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ABL/Formulario_ALCVP_y_SV_Alta_Debito_Automatico.pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Baja D&eacute;bito Autom&aacute;tico', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Adhesion_Baja_Debito_Automatico.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ABL/Formulario_ALCVP_y_SV_Baja_Debito_Automatico.pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Baja D&eacute;bito Autom&aacute;tico en Cuenta Banco Provincia', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVPySV_baja_debito_automatico_en_cuenta_banco_provincia.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ABL/Formulario_ALCVP_y_SV_Baja_Debito_Automatico_en_Cuenta_Banco_Provincia.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Acreditaci&oacute;n por Pago M&uacute;ltiple', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Acreditacion_por_Pago_Multiple.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ABL/Formulario_ALCVP_y_SV_Acreditacion_por_Pago_Multiple.pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Eximiciones - Primera Vez', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Eximicion_Por_Primera_Vez.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ABL/Formulario_ALCVP_y_SV_Eximicion_Por_Primera_Vez.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Eximiciones - Renovación', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Eximicion_Renovacion.pdf'], 'url_pregunta_frecuente', [], false),
        new RegistroAcordeonGuiasTramiteFormularios('Plan de Pago en Cuotas', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Plan_de_Pago_en_Cuotas.pdf'], 'url_pregunta_frecuente', [], false),
        new RegistroAcordeonGuiasTramiteFormularios('Liquidaci&oacute;n de Derechos de Construcci&oacute;n', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia de Tramite_Liquidacion_de_Derechos_de_Construccion.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ABL/Formulario_ALCVP_y_SV_Liquidacion_de_Derechos_de_Construccion.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Adhesión a Boleta Electrónica', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Adhesion_a_Boleta_Electronica.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ABL/Formulario_ALCVP_y_SV_Adhesion_a_Boleta_Electronica.pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Traspaso de Cuenta', [URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVPySV_Traspaso_de_Cuenta.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ABL/Formulario_ALCVP_y_SV_Traspaso_de_Cuenta.pdf'], false),
    ]),
    auto: new ListaFormularios('Automotores Municipalizados', [
      new RegistroAcordeonGuiasTramiteFormularios('Acreditaci&oacute;n por Pago M&uacute;ltiple', [URL_BASE_ARCHIVOS + 'guia/AUTO/Guia_de_Tramite_Auto_Acreditacion_por_Pago_Multiple.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/AUTO/Formulario_Auto_Acreditacion_por_Pago_Multiple.pdf'], true),
      new RegistroAcordeonGuiasTramiteFormularios('Adhesi&oacute;n a Boleta Electr&oacute;nica', [URL_BASE_ARCHIVOS + 'guia/AUTO/Guia_de_Tramite_Auto_Adhesion_a_Boleta_Electronica.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/AUTO/Formulario_Auto_Adhesion_a_Boleta_Electronica.pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Alta Impositiva / Modificaci&oacute;n', [URL_BASE_ARCHIVOS + 'guia/AUTO/Guia_de_Tramite_Auto_Alta_Impositiva.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/AUTO/Formulario_Auto_Alta_Impositiva.pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Baja Impositiva', [URL_BASE_ARCHIVOS + 'guia/AUTO/Guia_de_Tramite_Auto_Baja_Impositiva.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/AUTO/Formulario_Auto_Baja_Impositiva.pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Beneficio Licencia de Conducir Jubilados', [URL_BASE_ARCHIVOS + 'guia/AUTO/Guia_de_Tramite_Auto_Beneficio_Licencia_de_Conducir_Jubilados.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/AUTO/Formulario_Auto_Informe_de_Licencia_de_Conducir.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Cambio de Domicilio Postal', [URL_BASE_ARCHIVOS + 'guia/AUTO/Guia_de_Tramite_Auto_Cambio_de_Domicilio_Postal.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/AUTO/Formulario_Auto_Cambio_de_Domicilio_Postal.pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Denuncia Impositiva', [URL_BASE_ARCHIVOS + 'guia/AUTO/Guia_de_Tramite_Auto_Denuncia_Impositiva.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/AUTO/Formulario_Auto_Denuncia_Impositiva_de_Venta_(Art.229_Codigo_Fiscal)_MVL_045.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Exenci&oacute;n por Discapacidad', [URL_BASE_ARCHIVOS + 'guia/AUTO/Guia_de_Tramite_Auto_Excención_por_Discapacidad.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/AUTO/Formulario_Auto_DDJJ_Solicitud-Excencion_MVL-999.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Informe de Deuda', [URL_BASE_ARCHIVOS + 'guia/AUTO/Guia_de_Tramite_Auto_Informe_de_Deuda.pdf'], 'url_pregunta_frecuente', [], true),
        new RegistroAcordeonGuiasTramiteFormularios('Libre Deuda', [URL_BASE_ARCHIVOS + 'guia/AUTO/Guia_de_Tramite_Auto_Libre_Deuda.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/AUTO/Formulario_Auto_Libre_Deuda(R-541).pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Plan de Pago en Cuotas', [URL_BASE_ARCHIVOS + 'guia/AUTO/Guia_de_Tramite_Auto_Plan_de_Pago_en_Cuotas.pdf'], 'url_pregunta_frecuente', [], false)
    ]),
    moto: new ListaFormularios('Motoveh&iacute;culos', [
      new RegistroAcordeonGuiasTramiteFormularios('Acreditaci&oacute;n por Pago M&uacute;ltiple', [URL_BASE_ARCHIVOS + 'guia/MOTO/Guia de Tramite_Acreditacion_por_Pago_Multiple.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/MOTO/Formulario_Acreditacion_por_Pago_Multiple.pdf'], true),
      new RegistroAcordeonGuiasTramiteFormularios('Adhesi&oacute;n a Boleta Electr&oacute;nica', [URL_BASE_ARCHIVOS + 'guia/MOTO/Guia_de_Tramite_Moto_Adhesion_a_Boleta_Electronica.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/MOTO/Formulario_Moto_Adhesion_a_Boleta_Electronica.pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Alta Impositiva / Modificaci&oacute;n', [URL_BASE_ARCHIVOS + 'guia/MOTO/Guia_de_Tramite_Moto_Alta_Impositiva.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/MOTO/Formulario_Moto_Alta_Impositiva.pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Baja Impositiva', [URL_BASE_ARCHIVOS + 'guia/MOTO/Guia_de_Tramite_Moto_Baja_Impositiva.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/MOTO/Formulario_Moto_Baja_Impositiva.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Denuncia Impositiva', [URL_BASE_ARCHIVOS + 'guia/MOTO/Guia_de_Tramite_Moto_Denuncia_Impositiva.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/MOTO/Formulario_Moto_Denuncia_Impositiva_de_Venta.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Libre Deuda', [URL_BASE_ARCHIVOS + 'guia/MOTO/Guia_de_Tramite_Moto_Libre_Deuda.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/MOTO/Formulario_Moto_Libre_Deuda.pdf'], true)
    ]),
    barco: new ListaFormularios('Embarcaciones', [
        new RegistroAcordeonGuiasTramiteFormularios('Alta de Motor', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Alta_de_Motor.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Alta por Cambio de Radicaci&oacute;n', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Alta_por_Cambio_de_Radicacion.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Alta por Primera Inscripci&oacute;n', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Alta_por_Primera_Inscripcion.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Altas de Oficio / Denuncia de Transferencia', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Altas_de_Oficio-Denuncia_de_Transferencia.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Baja de Motor', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Baja_de_Motor.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Baja por Cambio de Radicaci&oacute;n', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Baja_por_Cambio_de_Radicacion.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Baja Total', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Baja_Total.pdf'], 'url_pregunta_frecuente', [], false),
        new RegistroAcordeonGuiasTramiteFormularios('Cambio de Arboladura', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Cambio_de_Arboladura.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Cambio de Datos de la Embarcaci&oacute;n', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Cambio_de_Datos_de_la_Embarcacion.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Cambio de Domicilio de Amarre', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Cambio_de_Domicilio_de_Amarre.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Cambio de Domicilio Fiscal', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Cambio_de_Domicilio_Fiscal.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Cambio de Domicilio Postal', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Cambio_de_Domicilio_Postal.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Denuncia de Transferencia', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Denuncia_de_Transferencia.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Modificaci&oacute;n de Fecha de Amarre', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Modificacion_de_Fecha_de_Amarre.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Modificaci&oacute;n de Motores', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Modificacion_de_Motores.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Modificaci&oacute;n de Valuaci&oacute;n', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Modificacion_de_Valuacion.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Transferencia', [URL_BASE_ARCHIVOS + 'guia/EMBARCACION/Guia_de_Tramite_Transferencia.pdf'], 'url_pregunta_frecuente', ['http://www.arba.gov.ar/archivos/GestorFormularios/Contribuyentes/r650v3.pdf'], false),
    ]),
    rs: new ListaFormularios('R&eacute;gimen Simplificado', [
        new RegistroAcordeonGuiasTramiteFormularios('Alta de D&eacute;bito Autom&aacute;tico con Tarjeta de Cr&eacute;dito', [URL_BASE_ARCHIVOS + 'guia/RS/Guia_de_Tramite_RS_Alta-Baja_Debito_Automatico.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/RS/Formulario_RS_Alta_Debito_Automatico.pdf'], true),
        new RegistroAcordeonGuiasTramiteFormularios('Baja de D&eacute;bito Autom&aacute;tico con Tarjeta de Cr&eacute;dito', [URL_BASE_ARCHIVOS + 'guia/RS/Guia_de_Tramite_RS_Alta-Baja_Debito_Automatico.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/RS/Formulario_RS_Baja_Debito_Automatico.pdf'], true)
    ]),
    ish: new ListaFormularios('Inspecci&oacute;n de Seguridad e Higiene y Servicios Especiales de Limpieza e Higiene', [
        new RegistroAcordeonGuiasTramiteFormularios('Constancia de Habilitaci&oacute;n Municipal', [URL_BASE_ARCHIVOS + 'guia/ISH/Guia_de_Tramite_Comercio_Constancia_de_Habilitacion_Municipal.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ISH/Formulario_Comercio_Constancia_de_Habilitacion_Municipal.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Retiro de Certificado de Habilitaci&oacute;n', [], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ISH/Formulario_Comercio_Estado_de_Situación_Tributaria-Retiro_de_Certificado_de_Habilitacion.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Anexo Rubro o Superficie-Baja Parcial-Cambio Rubro', [], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ISH/Formulario_Comercio_Estado_de_Situacion_Tributaria_Anexo_Rubro_Superficie-Baja_Parcial_Cambio_Rubro.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Baja comercial solicitada por el Titular del Inmueble', [], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ISH/Formulario_Comercio_Estado_de_Situación_Tributaria-Baja_comercial_solicitada_por_el_titular_del_inmueble.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Baja comercial solicitada por el Titular de la Habilitaci&oacute;n', [], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ISH/Baja_Comercial_Titular_de_la_Habilitacion_tramite_en_pandemia.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Transferencia o Baja comercial por Sociedades', [], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ISH/Baja_Comercial_por_Sociedades_tramite_en_pandemia.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Cert. de Nom. Catastral - Hab. de Obrador', [], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ISH/Formulario_Comercio_Certificado_de_Nomenclatura_Catastral-Habilitación_de_Obrador.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Cert. de Nom. Catastral - Hab. a presentar en el HCD', [], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ISH/Formulario_Comercio_Certificado_de_Nomenclatura_Catastral-Habilitaciones_a_presentar_en_el_HCD.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Cert. de Nom. Catastral para Habilitaci&oacute;n', [], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/ISH/Formulario_Comercio_Certificado_de_Nomenclatura_Catastral_para_Habilitacion.pdf'], false),
    ]),
    iibb: new ListaFormularios('Ingresos Brutos', [
        new RegistroAcordeonGuiasTramiteFormularios('Alta', [URL_BASE_ARCHIVOS + 'guia/IIBB/Guia_de_Tramite_IIBB_Alta.pdf'], 'url_pregunta_frecuente', [], false),
        new RegistroAcordeonGuiasTramiteFormularios('Baja', [URL_BASE_ARCHIVOS + 'guia/IIBB/Guia_de_Tramite_IIBB_Baja.pdf'], 'url_pregunta_frecuente', [], false),
        new RegistroAcordeonGuiasTramiteFormularios('Actualizaci&oacute;n General de Datos (Reempadronamiento)', [URL_BASE_ARCHIVOS + 'guia/IIBB/Guia_de_Tramite_IIBB_Actualizacion_General_de_Datos.pdf'], 'url_pregunta_frecuente', [], false),
        new RegistroAcordeonGuiasTramiteFormularios('Cambio de Domicilio Fiscal y Actividad Principal', [URL_BASE_ARCHIVOS + 'guia/IIBB/Guia_de_Tramite_IIBB_Cambio_de_Domicilio_Fiscal_y_Actividad_Principal.pdf'], 'url_pregunta_frecuente', [], false),
        new RegistroAcordeonGuiasTramiteFormularios('Modificación de Fecha de Inicio', [], 'url_pregunta_frecuente', [`${URL_BASE_ARCHIVOS}/formulario/IIBB/IIBB_Modificacion_Fecha_de_Inicio.pdf`], false)
    ]),
    catastro: new ListaFormularios('Catastro', [
        new RegistroAcordeonGuiasTramiteFormularios('Registro Plano de PH', [URL_BASE_ARCHIVOS + 'guia/CATASTRO/Guia_de_Tramite_Catastro_Registro_Plano_de_PH.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/CATASTRO/Formulario_Catastro_Registro_Plano_de_PH-Registro_Plano_de_Mensura-Croquis_de_Nivel-Visado_de_Mensura.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Registro Plano de Mensura', [URL_BASE_ARCHIVOS + 'guia/CATASTRO/Guia_de_Tramite_Catastro_Registro_de_Plano_de_Mensura.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/CATASTRO/Formulario_Catastro_Registro_Plano_de_PH-Registro_Plano_de_Mensura-Croquis_de_Nivel-Visado_de_Mensura.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Croquis de Nivel', [URL_BASE_ARCHIVOS + 'guia/CATASTRO/Guia_de_Tramite_Catastro_Croquis_de_Nivel.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/CATASTRO/Formulario_Catastro_Registro_Plano_de_PH-Registro_Plano_de_Mensura-Croquis_de_Nivel-Visado_de_Mensura.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Visado de Mensura', [URL_BASE_ARCHIVOS + 'guia/CATASTRO/Guia_de_Tramite_Catastro_Visado_de_Mensura.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/CATASTRO/Formulario_Catastro_Registro_Plano_de_PH-Registro_Plano_de_Mensura-Croquis_de_Nivel-Visado_de_Mensura.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Cert. de Nom. Catastral - Hab. de Obrador', [], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/CATASTRO/Formulario_Comercio_Certificado_de_Nomenclatura_Catastral-Habilitación_de_Obrador.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Cert. de Nom. Catastral - Hab. a presentar en el HCD', [], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/CATASTRO/Formulario_Comercio_Certificado_de_Nomenclatura_Catastral-Habilitaciones_a_presentar_en_el_HCD.pdf'], false),
        new RegistroAcordeonGuiasTramiteFormularios('Cert. de Nom. Catastral para Habilitacion', [], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/CATASTRO/Formulario_Comercio_Certificado_de_Nomenclatura_Catastral_para_Habilitacion.pdf'], false),

        new RegistroAcordeonGuiasTramiteFormularios('Liquidaci&oacute;n de Derechos de Construcci&oacute;n', [URL_BASE_ARCHIVOS + 'guia/CATASTRO/Guia_de_Tramite_Liquidacion_de_Derechos_de_Construccion.pdf'], 'url_pregunta_frecuente', [URL_BASE_ARCHIVOS + 'formulario/CATASTRO/Formulario_Liquidacion_de_Derechos_de_Construccion.pdf'], false)
    ]),
    cementerio: new ListaFormularios('Derechos de Cementerio', [
        new RegistroAcordeonGuiasTramiteFormularios('Derechos de Cementerio', [], 'url_pregunta_frecuente', [], false)
    ]),
    piletas: new ListaFormularios('Revisaci&oacute;n Medica para Pileta', [
        new RegistroAcordeonGuiasTramiteFormularios('Boleta para Revisaci&oacute;n M&eacute;dica de Pileta', [], 'url_pregunta_frecuente', [], false)
    ])
};

export const CALENDARIOS_ABL = {
    abl: new ListaCalendarioComun('Alumbrado, Limpieza, Conservaci&oacute;n de la V&iacute;a P&uacute;blica y Servicios Varios<br>y Contribuci&oacute;n a la Protecci&oacute;n Ciudadana (ALCVP y SV y CPC)',
     [
        new RegistroAcordeonCalendarioABL('01 - Enero', '20 / 01 / 2021 ', '27 / 01 / 2021'),
        new RegistroAcordeonCalendarioABL('02 - Febrero', '18 / 02 / 2021', '25 / 02 / 2021'),
        new RegistroAcordeonCalendarioABL('03 - Marzo', '18 / 03 / 2021', '25 / 03 / 2021'),
        new RegistroAcordeonCalendarioABL('04 - Abril', '14 / 04 / 2021', '21 / 04 / 2021'),
        new RegistroAcordeonCalendarioABL('05 - Mayo', '12 / 05 / 2021', '19 / 05 / 2021'),
        new RegistroAcordeonCalendarioABL('06 - Junio', '11 / 06 / 2021', '18 / 06 / 2021'),

        new RegistroAcordeonCalendarioABL('07 - Julio', '14 / 07 / 2021', '21 / 07 / 2021'),
        new RegistroAcordeonCalendarioABL('08 - Agosto', '12 / 08 / 2021', '19 / 08 / 2021'),

        new RegistroAcordeonCalendarioABL('09 - Septiembre', '15 / 09 / 2021', '22 / 09 / 2021'),
        new RegistroAcordeonCalendarioABL('10 - Octubre', '13 / 10 / 2021', '20 / 10 / 2021'),
        new RegistroAcordeonCalendarioABL('11 - Noviembre', '11 / 11 / 2021', '18 / 11 / 2021'),
        new RegistroAcordeonCalendarioABL('12 - Diciembre', '15 / 12 / 2021', '22 / 12 / 2021')


    ], `Tributo por Alumbrado, Limpieza, Conservaci&oacute;n de la V&iacute;a P&uacute;blica y Servicios Varios, <br>
       y Tributo de Contribuci&oacute;n a la Protecci&oacute;n Ciudadana`)
};

export const CALENDARIOS_COMUNES = {
    auto: new ListaCalendarioComun('Automotores Municipalizados', [
        new RegistroAcordeonCalendario('01 o Pago Anual (Cuota 01, 02 y 03)', '06 / 07 / 2021', '13 / 07 / 2021'),
        new RegistroAcordeonCalendario('02 o Saldo Anual (Cuota 02 y 03)', '06 / 07 / 2021', '13 / 07 / 2021'),
        new RegistroAcordeonCalendario('03', '07 / 12 / 2021', '14 / 12 / 2021'),

    ], `Patente de Automotores Municipalizados`),
    moto: new ListaCalendarioComun('Patentes de Rodados Motoveh&iacute;culos', [
        new RegistroAcordeonCalendario('01 o Pago Anual (Cuota 01 y 02)', '06 / 07 / 2021', '13 / 07 / 2021'),
        new RegistroAcordeonCalendario('02', '07 / 12 / 2021', '14 / 12 / 2021')
    ], `Patentes de Rodados Moto Veh&iacute;culos Ordenanza Fiscal Art. 239º y 241`)
};

export const CALENDARIOS_RS_ISH = {
    rs: new ListaCalendarioRSISH('R&eacute;gimen Simplificado', [
        new RegistroAcordeonCalendarioRSISH('<b>Anticipos</b>', '<b>Vencimiento Mensual</b>'),
        new RegistroAcordeonCalendarioRSISH('<b>Presentaci&oacute;n Declaraci&oacute;n Jurada Anual  2020 </b>', '<b>28 / 01 / 2021</b>'),
        new RegistroAcordeonCalendarioRSISH('1°', '19 / 02 / 2021'),
        new RegistroAcordeonCalendarioRSISH('2°', '19 / 03 / 2021'),
        new RegistroAcordeonCalendarioRSISH('3°', '20 / 04 / 2021'),
        new RegistroAcordeonCalendarioRSISH('4°', '20 / 05 / 2021'),
        new RegistroAcordeonCalendarioRSISH('5°', '22 / 06 / 2021'),
        new RegistroAcordeonCalendarioRSISH('6°', '20 / 07 / 2021'),
        new RegistroAcordeonCalendarioRSISH('7°', '18 / 08 / 2021'),
        new RegistroAcordeonCalendarioRSISH('8°', '21 / 09 / 2021'),
        new RegistroAcordeonCalendarioRSISH('9°', '21 / 10 / 2021'),
        new RegistroAcordeonCalendarioRSISH('10°', '19 / 11 / 2021'),
        new RegistroAcordeonCalendarioRSISH('11°', '21 / 12 / 2021'),
        new RegistroAcordeonCalendarioRSISH('12°', '20 / 01 / 2022'),
    ], ``),
    ish: new ListaCalendarioRSISH('Inspección de Seguridad e Higiene y Servicios Especiales de Limpieza e Higiene', [
        new RegistroAcordeonCalendarioRSISH('<b>Ingresos Brutos Devengados en el mes de:</b>', '<b>Vencimiento Mensual</b>'),
        new RegistroAcordeonCalendarioRSISH('<b>Presentaci&oacute;n Declaraci&oacute;n Jurada Anual SeH 2020 (Régimen General)</b>', '<b>28 / 01 / 2021</b>'),
        new RegistroAcordeonCalendarioRSISH('Enero 2021', '19 / 02 / 2021'),
        new RegistroAcordeonCalendarioRSISH('Febrero 2021', '19 / 03 / 2021'),
        new RegistroAcordeonCalendarioRSISH('Marzo 2021', '20 / 04 / 2021'),
        new RegistroAcordeonCalendarioRSISH('Abril 2021', '20 / 05 / 2021'),
        new RegistroAcordeonCalendarioRSISH('Mayo 2021', '22 / 06 / 2021'),
        new RegistroAcordeonCalendarioRSISH('Junio 2021', '20 / 07 / 2021'),
        new RegistroAcordeonCalendarioRSISH('Julio 2021', '18 / 08 / 2021'),
        new RegistroAcordeonCalendarioRSISH('Agosto 2021', '21 / 09 / 2021'),
        new RegistroAcordeonCalendarioRSISH('Septiembre 2021', '21 / 10 / 2021'),
        new RegistroAcordeonCalendarioRSISH('Octubre 2021', '19 / 11 / 2021'),
        new RegistroAcordeonCalendarioRSISH('Noviembre 2021', '21 / 12 / 2021'),
        new RegistroAcordeonCalendarioRSISH('Diciembre 2021', '20 / 01 / 2022'),

    ], `Tributo por Inspecci&oacute;n de Seguridad e Higiene y <br>
        Tributo por Servicios Especiales de Limpieza e Higiene - Hecho Imponible Habitual`)
};

export const CALENDARIOS_MV = {
    mv: new ListaCalendarioMV('Tasa de Mantenimiento Vial Municipal', [
        new RegistroAcordeonCalendarioMV('<i>Diciembre (2020)</i>', '<i>07 / 01 / 2021</i>', '<i>08 / 01 / 2021</i>'),
        new RegistroAcordeonCalendarioMV('Enero', '08 / 02 / 2021', '09 / 02 / 2021'),
        new RegistroAcordeonCalendarioMV('Febrero', '08 / 03 / 2021', '09 / 03 / 2021'),
        new RegistroAcordeonCalendarioMV('Marzo', '07 / 04 / 2021', '08 / 04 / 2021'),
        new RegistroAcordeonCalendarioMV('Abril', '06 / 05 / 2021', '07 / 05 / 2021'),
        new RegistroAcordeonCalendarioMV('Mayo', '08 / 06 / 2021', '09 / 06 / 2021'),
        new RegistroAcordeonCalendarioMV('Junio', '07 / 07 / 2021', '08 / 07 / 2021'),
        new RegistroAcordeonCalendarioMV('Julio', '05 / 08 / 2021', '06 / 08 / 2021'),
        new RegistroAcordeonCalendarioMV('Agosto', '07 / 09 / 2021', '08 / 09 / 2021'),
        new RegistroAcordeonCalendarioMV('Septiembre', '06 / 10 / 2021', '07 / 10 / 2021'),
        new RegistroAcordeonCalendarioMV('Octubre', '08 / 11 / 2021', '09 / 11 / 2021'),
        new RegistroAcordeonCalendarioMV('Noviembre', '06 / 12 / 2021', '07 / 12 / 2021'),
        new RegistroAcordeonCalendarioMV('Diciembre', '06 / 01 / 2022', '07 / 01 / 2022'),

    ], `Tasa de Mantenimiento Vial Municipal`)
};

export const CALENDARIOS_TRIM_VENC = {
  puestosflores: new ListaCalendarioTrimestralConVencimiento('Puestos de Flores', [
                  new RegistroAcordeonCalendarioTrimestralVencimiento('1&deg;', '18 / 01 / 2021'),
                  new RegistroAcordeonCalendarioTrimestralVencimiento('2&deg;', '16 / 04 / 2021'),
                  new RegistroAcordeonCalendarioTrimestralVencimiento('3&deg;', '19 / 07 / 2021'),
                  new RegistroAcordeonCalendarioTrimestralVencimiento('4&deg;', '14 / 10 / 2021'),
                  ], 'Puesto de Flores - Pago Trimestral'),
  agentesinfo: new ListaCalendarioCuatrimestralConVencimiento('Agentes de Informaci&oacute;n', [
                  new RegistroAcordeonCalendarioCuatrimestralVencimiento('<i>3&deg; (2020)</i>', '<i>24 / 01 / 2021</i>'),

                  new RegistroAcordeonCalendarioCuatrimestralVencimiento('1&deg;', '26 / 05 / 2021'),
                  new RegistroAcordeonCalendarioCuatrimestralVencimiento('2&deg;', '24 / 09 / 2021'),
                  new RegistroAcordeonCalendarioCuatrimestralVencimiento('3&deg;', '25 / 01 / 2022'),

                  ], 'R&eacute;gimen de Informaci&oacute;n para Empresas Licenciatarias<br>y/o Prestadores de Servicios P&uacute;blicos y/o Privados'),

};

export const CALENDARIOS_TRIMESTRAL = {
    antenas: new ListaCalendarioTrimestralOepAntena('Emplazamiento y/o Verificaci&oacute;n de Antenas', [
        new RegistroAcordeonCalendarioTrimestralOepAntena('1º', '15 / 04 / 2021'),
        new RegistroAcordeonCalendarioTrimestralOepAntena('2º', '15 / 07 / 2021'),
        new RegistroAcordeonCalendarioTrimestralOepAntena('3º', '15 / 10 / 2021'),
        new RegistroAcordeonCalendarioTrimestralOepAntena('4º', '28 / 12 / 2021'),
    ], `Tributo de Verificaci&oacute;n por el Emplazamiento de Estructuras y/o <br>
      Soporte de Antenas y sus Equipos Complementarios Ordenanza Fiscal Art. 211`),
    pyp: new ListaCalendarioTrimestral('Publicidad y Propaganda', [
        new RegistroAcordeonCalendarioTrimestral('<b>Presentaci&oacute;n Declaraci&oacute;n Jurada Anual</b>', '<b>24 / 06 / 2021</b>'),
        new RegistroAcordeonCalendarioTrimestral('1º', '15 / 04 / 2021'),
        new RegistroAcordeonCalendarioTrimestral('2º', '15 / 07 / 2021'),
        new RegistroAcordeonCalendarioTrimestral('3º', '15 / 10 / 2021'),
        new RegistroAcordeonCalendarioTrimestral('4º', '28 / 12 / 2021'),
    ], `Canon por Publicidad y Propaganda <br>
        Ordenanza Fiscal Vigente Art. 172º - Vencimiento Trimestral`),
    oep: new ListaCalendarioTrimestralOepAntena('Ocupaci&oacute;n o Uso de Espacios P&uacute;blicos', [
        new RegistroAcordeonCalendarioTrimestralOepAntena('1º', '15 / 04 / 2021'),
        new RegistroAcordeonCalendarioTrimestralOepAntena('2º', '15 / 07 / 2021'),
        new RegistroAcordeonCalendarioTrimestralOepAntena('3º', '15 / 10 / 2021'),
        new RegistroAcordeonCalendarioTrimestralOepAntena('4º', '28 / 12 / 2021'),
        new RegistroAcordeonCalendarioTrimestralOepAntena('<b>Presentaci&oacute;n Declaraci&oacute;n Jurada Anual</b>', '<b>24 / 06 / 2021</b>')
    ], `Canon por Ocupaci&oacute;n o Uso de Espacios Públicos;<br>
       Ordenanza Fiscal Art. 227º - Vencimiento Trimestral`)
};

export const CALENDARIOS_CEMENTERIO = {
    cementerio: new ListaCalendarioCementerio('Derechos de Cementerio', [
        new RegistroAcordeonCalendarioCementerio('Pago Anual <br> (Conservación de Infraestructura del Cementerio para <br>propietarios o concesionarios de bóvedas, panteones o criptas)', '29 / 06 / 2021'),
        new RegistroAcordeonCalendarioCementerio('Pago Anual de Cuidador', '29 / 06 / 2021')
    ], `Derechos de Cementerio. Ordenanza Fiscal Art. 252º`)
};

export const CALENDARIOS_SVM = {
    svm: new AcordeonCalendarioServiciosVarios( '28 / 01 / 2021' )
};

export const REGISTROS_ACORDEON = {
    // INICIO ABL
    ABL_guiaTramite:        GUIAS_TRAMITE.abl.lista,
    ABL_calendario:         CALENDARIOS_ABL.abl.lista,
    ABL_normativa:          [
                                new RegistroAcordeonNormativa([
                                    new Normativa('Resoluci&oacute;n 727/20 Bonificaci&oacute;n ABL', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.727-20_Bonif.ABL_9y10.pdf', []),
                                    NORMATIVAS.dto2026_20,
                                    NORMATIVAS.dto2025_20,
                                    new Normativa('Resoluci&oacute;n 619/20 Bonificaci&oacute;n ABL 2° semestre', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.619_Bonif.ABL_7-8_y_2semestre.pdf', []),
                                    new Normativa('Resoluci&oacute;n 502/20 Bonificaci&oacute;n en cuotas 5 y 6', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.502-20_Bonif.5-6_ABL.pdf', []),
                                    NORMATIVAS.res483_20,
                                    NORMATIVAS.res482_20,
                                ])
                            ],
    // FIN ABL
    // INICIO AUTO
    AUTO_guiaTramite:       GUIAS_TRAMITE.auto.lista,
    AUTO_instructivos:      [
                                new RegistroAcordeonInstructivos('Instructivo - Boleta Automotor - C&aacute;lculo de Impuesto con deuda', URL_BASE_ARCHIVOS + 'instructivo/AUTO/Instructivo_Boleta_Automotor-Calculo_de_Impuesto_con_deuda.pdf'),
                                new RegistroAcordeonInstructivos('Instructivo - Boleta Automotor - C&aacute;lculo de Impuesto sin deuda', URL_BASE_ARCHIVOS + 'instructivo/AUTO/Instructivo_Boleta_Automotor-Calculo_de_Impuesto_con_deuda.pdf')
                            ],
    AUTO_calendario:        CALENDARIOS_COMUNES.auto.lista,
    AUTO_normativa:         [
                                new RegistroAcordeonNormativa([
                                    new Normativa('Resoluci&oacute;n 588/20 Bonificaci&oacute;n Automotores', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.588-20_Bonif.Autom+10_extra.pdf', []),
                                    new Normativa('Ordenanza 36467/19 Incorporaci&oacute;n Automotores', URL_BASE_ARCHIVOS + '/normativas/otras_disposiciones/Ord.36467_Dto_213-19.pdf', []),
                                ])
                            ],
    // FIN AUTO
    // INICIO MOTOS
    MOTO_guiaTramite:       GUIAS_TRAMITE.moto.lista,
    MOTO_calendario:        CALENDARIOS_COMUNES.moto.lista,
    MOTO_normativa:         [
                                new RegistroAcordeonNormativa([
                                    new Normativa('Resoluci&oacute;n 588/20 Bonificaci&oacute;n Motoveh&iacute;culos', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.588-20_Bonif.Autom+10_extra.pdf', []),
                                ])
                            ],
    // FIN MOTOS
    // INICIO EMBARCACIONES
    BARCOS_guiaTramite:     GUIAS_TRAMITE.barco.lista,
    BARCOS_notas:           [
                                new RegistroAcordeonNotas('Nota Modelo N&deg;1 - Alta por Primera Inscripci&oacute;n', URL_BASE_ARCHIVOS + 'nota/EMBARCACION/Nota_Modelo_N_1_Alta_por_Primera_Inscripcion.pdf'),
                                new RegistroAcordeonNotas('Nota Modelo N&deg;2 - Alta por Cambio de Radicaci&oacute;n', URL_BASE_ARCHIVOS + 'nota/EMBARCACION/Nota_Modelo_N_2_Alta_por_Cambio_de_Radicacion.pdf'),
                                new RegistroAcordeonNotas('Nota Modelo N&deg;3 - Baja por Cambio de Radicaci&oacute;n', URL_BASE_ARCHIVOS + 'nota/EMBARCACION/Nota_Modelo_N_3_Baja_por_Cambio_de_Radicacion.pdf'),
                                new RegistroAcordeonNotas('Nota Modelo N&deg;4 - Transferencia', URL_BASE_ARCHIVOS + 'nota/EMBARCACION/Nota_Modelo_N_4_Transferencia.pdf'),
                                new RegistroAcordeonNotas('Nota Modelo N&deg;5 - Denuncia de Transferencia', URL_BASE_ARCHIVOS + 'nota/EMBARCACION/Nota_Modelo_N_5_Denuncia_de_Transferencia.pdf'),
                                new RegistroAcordeonNotas('Nota Modelo N&deg;6 - Modificaci&oacute;n de Datos', URL_BASE_ARCHIVOS + 'nota/EMBARCACION/Nota_Modelo_N_6_Modificacion_de_Datos.pdf'),
                                new RegistroAcordeonNotas('Nota Modelo N&deg;7 - Carta Documento', URL_BASE_ARCHIVOS + 'nota/EMBARCACION/Nota_Modelo_N_7_Carta_Documento.pdf'),
                                new RegistroAcordeonNotas('Nota Modelo N&deg;8 - Modificaci&oacute;n de Fecha de Amarre', URL_BASE_ARCHIVOS + 'nota/EMBARCACION/Nota_Modelo_N_8_Modificacion_de_Fecha_de_Amarre.pdf'),
                                new RegistroAcordeonNotas('Nota Modelo N&deg;9 - Modificaci&oacute;n de Motores', URL_BASE_ARCHIVOS + 'nota/EMBARCACION/Nota_Modelo_N_9_Modificacion_de_Motores.pdf'),
                                new RegistroAcordeonNotas('Nota Modelo N&deg;10 - Modificaci&oacute;n de Valuaci&oacute;n', URL_BASE_ARCHIVOS + 'nota/EMBARCACION/Nota_Modelo_N_10_Modificación_de_Valuacion.pdf')
                            ],
    // FIN EMBARCACIONES
    // INICIO RS
    RS_guiaTramite:         GUIAS_TRAMITE.rs.lista,
    RS_instructivos:        [
                                new RegistroAcordeonInstructivos('Instructivo - Régimen Simplificado - Vigente', URL_BASE_ARCHIVOS + 'instructivo/RS/Instructivo_Regimen_Simplificado_vigente.pdf'),
                                new RegistroAcordeonInstructivos('Instructivo - Régimen Simplificado de años anteriores', URL_BASE_ARCHIVOS + 'instructivo/RS/Instructivo_Regimen_Simplificado_Anos_anteriores.pdf'),
                            ],
    RS_calendario:          CALENDARIOS_RS_ISH.rs.lista,
    RS_normativa_2:         [
                                new RegistroAcordeonNormativa([
                                    NORMATIVAS.res620_20,
                                    NORMATIVAS.res548_20,
                                    NORMATIVAS.res478_20, 
                                    NORMATIVAS.res1303
                                ])
                            ],
    // FIN RS
    // INICIO INSPECCION DE SEGURIDAD E HIGIENE
    ISH_guiaTramite:        GUIAS_TRAMITE.ish.lista,
    ISH_instructivos:       [
                                new RegistroAcordeonInstructivos('Instructivo - Generaci&oacute;n de Declaraciones Juradas - Vigente', URL_BASE_ARCHIVOS + 'instructivo/ISH/Instructivo_SeH_vigente.pdf'),
                                new RegistroAcordeonInstructivos('Instructivo - Generaci&oacute;n de Declaraciones Juradas de años anteriores', URL_BASE_ARCHIVOS + 'instructivo/ISH/Instructivo_SeH_Anos_anteriores.pdf'),
                            ],
    ISH_calendario:         CALENDARIOS_RS_ISH.ish.lista,
    ISH_linkInteres:        [
                                new RegistroAcordeonLinkInteres('ARBA', 'www.arba.gov.ar', 'http://www.arba.gov.ar', 'www.arba.gov.ar', 'http://www.arba.gov.ar')
                            ],
    ISH_normativa:          [
                                new RegistroAcordeonNormativa([
                                    NORMATIVAS.dto1625_20,
                                ])
                            ],
    // FIN |DE SEGURIDAD E HIGIENE
    // INICIO MANTENIMIENTO VIAL
    MAN_VIAL_calendario:    CALENDARIOS_MV.mv.lista,
    MAN_VIAL_normativa:     [
                                new RegistroAcordeonNormativa([
                                    NORMATIVAS.dto1625_20
                                ])
                            ],
    // FIN MANTENIMIENTO VIAL
    // INICIO IIBB
    IIBB_guiaTramite:       GUIAS_TRAMITE.iibb.lista,
    IIBB_instructivos:      [
                                new RegistroAcordeonInstructivos('Instructivo - Declaraci&oacute;n Jurada Mensual Web', URL_BASE_ARCHIVOS + 'instructivo/IIBB/Instructivo_IIBB_DDJJ_Menusal_Web.pdf'),
                                new RegistroAcordeonInstructivos('Instructivo - Declaraci&oacute;n Jurada Anual Web', URL_BASE_ARCHIVOS + 'instructivo/IIBB/Instructivo_IIBB_DDJJ_Anual_Web.pdf'),
                                new RegistroAcordeonInstructivos('Instructivo - Compensaci&oacute;n', URL_BASE_ARCHIVOS + 'instructivo/IIBB/Instructivo_Compensacion.pdf')
                            ],
    IIBB_linkInteres:       [
                                new RegistroAcordeonLinkInteres('ARBA', 'www.arba.gov.ar', 'https://www.arba.gov.ar', 'www.arba.gov.ar', 'https://www.arba.gov.ar')
                            ],
    // FIN IIBB
    // INICIO ANTENAS
    ANTENAS_calendario:     CALENDARIOS_TRIMESTRAL.antenas.lista,
    ANTENAS_normativa:      [
                                new RegistroAcordeonNormativa([
                                    //NORMATIVAS.of35765,
                                    //NORMATIVAS.of35766
                                    NORMATIVAS.of34118
                                ])
                            ],
    ANTENAS_instructivos:   [
                                new RegistroAcordeonInstructivos('Instructivo - Antenas - Vigente', URL_BASE_ARCHIVOS + 'instructivo/ANTENAS/Instructivo Antenas_vigente.pdf'),
                            ],
    // FIN ANTENAS
    // INICIO PYP
    PYP_calendario:         CALENDARIOS_TRIMESTRAL.pyp.lista,
    PYP_normativa:          [
                                new RegistroAcordeonNormativa([
                                    new Normativa('Decreto 2862/20 Nuevos Vtos 3º Trimestre PyP OEP', URL_BASE_ARCHIVOS + '/normativas/2020/DECTO-28622020.pdf', []),
                                    new Normativa('Decreto 2091/20 Nuevos Vtos 2º Trimestre PyP OEP', URL_BASE_ARCHIVOS + '/normativas/2020/Dto.2091-20_Nuevos_Vtos.2_Trim.PyP.pdf', []),
                                    new Normativa('Resolución 735/20 Bonificación PyP-OEP 3º Trimestre', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.735-20_Bonif_PyP-OEP_3Trim.pdf', []),
                                    NORMATIVAS.res547_20,
                                    NORMATIVAS.dto1812_20,
                                    NORMATIVAS.dto1625_20,
                                    new Normativa('C&oacute;digo de Publicidad', 'https://www.vicentelopez.gov.ar/sec_gobierno/legislacion.php', [
                                        new LinkDocumentos('Acaraci&oacute;n: Ingresar por tema <b>Publicidad y Propaganda</b>, subtema <b>C&oacute;digo de Publicidad</b>','')
                                    ]),
                                ])
                            ],
    PYP_instructivos:       [
                                new RegistroAcordeonInstructivos('Instructivo - Publicidad y Propaganda - Vigente', URL_BASE_ARCHIVOS + 'instructivo/PYP/Instructivo_PyP_vigente.pdf'),
                            ],
    // FIN PYP
    // INICIO OEP
    OEP_calendario:         CALENDARIOS_TRIMESTRAL.oep.lista,
    OEP_normativa:          [
                                new RegistroAcordeonNormativa([
                                    new Normativa('Decreto 2862/20 Nuevos Vtos 3º Trimestre PyP OEP', URL_BASE_ARCHIVOS + '/normativas/2020/DECTO-28622020.pdf', []),
                                    new Normativa('Decreto 2091/20 Nuevos Vtos 2º Trimestre PyP OEP', URL_BASE_ARCHIVOS + '/normativas/2020/Dto.2091-20_Nuevos_Vtos.2_Trim.PyP.pdf', []),
                                    new Normativa('Resolución 735/20 Bonificación PyP-OEP 3º Trimestre', URL_BASE_ARCHIVOS + 'normativas/resoluciones/Reso.735-20_Bonif_PyP-OEP_3Trim.pdf', []),
                                    NORMATIVAS.dto1812_20,
                                    NORMATIVAS.dto1625_20,
                                ])
                            ],
    OEP_instructivos:       [
                                new RegistroAcordeonInstructivos('Instructivo - Ocupaci&oacute;n de Espacios P&uacute;blicos - Vigente', URL_BASE_ARCHIVOS + 'instructivo/OEP/Instructivo_OEP_vigente.pdf'),
                            ],
    // FIN OEP
    // INICIO SERVICIOS VARIOS
    SV_normativa:           [
                                new RegistroAcordeonNormativa([
                                    NORMATIVAS.of35765,
                                    NORMATIVAS.of35766
                                ])
                            ],
    // FIN SERVICIOS VARIOS
    // INICIO CATASTRO
    CATASTRO_guiaTramite:   GUIAS_TRAMITE.catastro.lista,
    CATASTRO_normativa:     [
                                new RegistroAcordeonNormativa([]),
                            ],
    // FIN CATASTRO
    // INICIO CEMENTERIO
    CEMENTERIO_guiaTramite: GUIAS_TRAMITE.cementerio.lista,
    CEMENTERIO_calendario:  CALENDARIOS_CEMENTERIO.cementerio.lista,
    CEMENTERIO_normativa:   [
                                new RegistroAcordeonNormativa([]),
                            ],
    // FIN CEMENTERIO
    // INICIO CEMENTERIO
    PILETA_guiaTramite:     GUIAS_TRAMITE.piletas.lista,
    // FIN CEMENTERIO

    // INICIO COWORKING
    COWORKING_normativa:    [
                                new RegistroAcordeonNormativa([
                                    NORMATIVAS.IR_A_NORMATIVAS,
                                    NORMATIVAS.of35770,
                                    NORMATIVAS.of36250,
                                ]),
                            ],
    // FIN COWORKING
};

export const TRAMITES = {
    abl:                new Tramite('assets/png/Iconos-casa.png',
                                    'Alumbrado, Limpieza,<br> Conservaci&oacute;n de la<br> V&iacute;a P&uacute;blica y Servicios Varios',
                                    '' /* No tiene*/,
                                    BOTONES_APPS.botonSAT,
                                    [
                                        new AcordeonGuiasTramitesFormularios( REGISTROS_ACORDEON.ABL_guiaTramite ),
                                        new AcordeonCalendario( REGISTROS_ACORDEON.ABL_calendario ),
                                        new AcordeonNormativa( REGISTROS_ACORDEON.ABL_normativa ),
                                    ],
                                    '[TODO MATI] link angular',
                                    [
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/cuidemonos.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/Paga_online_tu_plan_de_pago_en_cuotas.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                    //   new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/abl/01_BE_ALCPVySV.png', URL_BASE_ARCHIVOS + 'guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Adhesion_a_Boleta_Electronica.pdf'),
                                    //   new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/abl/02_Cambio_de_Titularidad.png', URL_BASE_ARCHIVOS + '/guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Cambio_de_Titularidad.pdf'),
                                    //   new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/abl/03_Eximicion_ALCVPySV.png', URL_BASE_ARCHIVOS + '/guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Eximicion_Renovacion.pdf'),
                                    //   new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/abl/04_Sat_Movil.png', ''),
                                    ],
                                    null),

    automotor:          new Tramite('assets/png/Iconos-auto.png',
                                    'Automotores<br> Municipalizados',
                                    'Hasta modelo 2009',
                                    BOTONES_APPS.botonSAT,
                                    [
                                      new AcordeonGuiasTramitesFormularios( REGISTROS_ACORDEON.AUTO_guiaTramite ),
                                      new AcordeonCalendario( REGISTROS_ACORDEON.AUTO_calendario ),
                                      new AcordeonNormativa( REGISTROS_ACORDEON.AUTO_normativa ),
                                    ],
                                    '[TODO MATI] link angular',
                                    [
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/auto/Banner_Atencion_Automotores.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/cuidemonos.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/inicio/Atencion_Automotores.png', '/ingresos-publicos/tramite/automotor#guiaDeTramites'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/auto/pago-ppc.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                    //     new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/auto/02_Plan_de_Facilidades_2020.png', URL_BASE_ARCHIVOS + '/instructivo/ABL/Instructivo_Plan_de_Facilidades_de_Pago_2020.pdf'),
                                    //     new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/auto/03_BE_Automotr.png', URL_BASE_ARCHIVOS + 'guia/AUTO/Guia_de_Tramite_Automotor_Motovehiculo_Adhesion_a_Boleta_Electronica.pdf'),
                                    //     new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/auto/04_Atencion_Auto.jpg', ''),
                                    //   new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/auto/05_Sat_Movil.png', ''),
                                    ], null),

    motovehiculos:      new Tramite('assets/png/Iconos-moto.png',
                                    'Motoveh&iacute;culos',
                                    '' /* No tiene*/,
                                    BOTONES_APPS.botonSAT,
                                    [
                                        new AcordeonGuiasTramitesFormularios( REGISTROS_ACORDEON.MOTO_guiaTramite ),
                                        new AcordeonCalendario( REGISTROS_ACORDEON.MOTO_calendario ),
                                        new AcordeonNormativa( REGISTROS_ACORDEON.MOTO_normativa ),
                                    ],
                                    '[TODO MATI] link angular',
                                    [
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/motovehiculo/Banner_Atencion_Motovehiculos.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/motovehiculo/pago-ppc.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                        // new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/motovehiculo/01_Plan_de_Facilidades_2020.png', URL_BASE_ARCHIVOS + '/instructivo/ABL/Instructivo_Plan_de_Facilidades_de_Pago_2020.pdf'),
                                        // new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/motovehiculo/02_BE_Moto.png', URL_BASE_ARCHIVOS + 'guia/MOTO/Guia_de_Tramite_Automotor_Motovehiculo_Adhesion_a_Boleta_Electronica.pdf'),
                                        // new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/motovehiculo/03_Atencion_Moto.jpg', ''),
                                        // new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/motovehiculo/04_Sat_Movil.png', ''),
                                    ], null),

    embarcaciones:      new Tramite('assets/png/Iconos-barco.png',
                                    'Embarcaciones',
                                    'Radicadas y/o con Amarre en Vicente L&oacute;pez',
                                    BOTONES_APPS.botonConsultas,
                                    [
                                        new AcordeonGuiasTramitesMixtas(
                                            REGISTROS_ACORDEON.BARCOS_guiaTramite,
                                            '',
                                            REGISTROS_ACORDEON.BARCOS_notas
                                        ),
                                        new AcordeonCalendarioARBA(),
                                        new AcordeonNormativaARBA()
                                    ],
                                    '[TODO MATI] link angular',
                                    [], null),

    regimenSimplificado: new Tramite('',
                                    'R&eacute;gimen Simplificado<br><span class="u-text-thin u-color-primary-dark">para Comercio e Industria</span>',
                                    '',
                                    BOTONES_APPS.botonRS,
                                    [
                                        new AcordeonGuiasTramitesFormularios( REGISTROS_ACORDEON.RS_guiaTramite ),
                                        new AcordeonInstructivos( REGISTROS_ACORDEON.RS_instructivos ),
                                        new AcordeonCalendarioRSISH( REGISTROS_ACORDEON.RS_calendario ),
                                        new AcordeonNormativa( REGISTROS_ACORDEON.RS_normativa_2 )
                                    ],
                                    '[TODO MATI] link angular',
                                    [
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/cuidemonos.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/ish/Banner_Deudas_de_Actividad_Comercial-01.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                    ], null),

    inspeccionSegHig:   new Tramite('',
                                    'Inspecci&oacute;n por<br> Seguridad e Higiene',
                                    'Tributo por Inspecci&oacute;n de Seguridad e Higiene<br>Tributo por Servicios Especiales de Limpieza e Higiene',
                                    BOTONES_APPS.botonCF,
                                    [
                                      new AcordeonGuiasTramitesFormularios( REGISTROS_ACORDEON.ISH_guiaTramite ),
                                      new AcordeonInstructivos( REGISTROS_ACORDEON.ISH_instructivos ),
                                      new AcordeonCalendarioRSISH( REGISTROS_ACORDEON.ISH_calendario ),
                                      new AcordeonNormativa( REGISTROS_ACORDEON.ISH_normativa ),
                                    ],
                                    '[TODO MATI] link angular',
                                    [
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/cuidemonos.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/ish/Banner_Deudas_de_Actividad_Comercial-01.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/ish/pago-ppc.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                    ], null),

    publicidad:         new Tramite('',
                                    'Publicidad y Propaganda',
                                    '',
                                    BOTONES_APPS.botonCF,
                                    [
                                        new AcordeonCalendarioTrimestral( REGISTROS_ACORDEON.PYP_calendario ),
                                        new AcordeonInstructivos( REGISTROS_ACORDEON.PYP_instructivos ),
                                        new AcordeonNormativa( REGISTROS_ACORDEON.PYP_normativa ),

                                    ],
                                    '[TODO MATI] link angular',
                                    [
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/cuidemonos.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/ish/Banner_Deudas_de_Actividad_Comercial-01.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/PyP/pago-ppc.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                    ], null),

    oep:                new Tramite('',
                                    'Ocupaci&oacute;n o Uso de<br> Espacios P&uacute;blicos',
                                    '',
                                    BOTONES_APPS.botonCF,
                                    [
                                        new AcordeonCalendarioTrimestralOepAntena( REGISTROS_ACORDEON.OEP_calendario ),
                                        new AcordeonInstructivos( REGISTROS_ACORDEON.OEP_instructivos ),
                                        new AcordeonNormativa( REGISTROS_ACORDEON.OEP_normativa ),  
                                    ],
                                    '[TODO MATI] link angular',
                                    [
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/cuidemonos.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/ish/Banner_Deudas_de_Actividad_Comercial-01.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/OEP/pago-ppc.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                    ], null),

    antenas:            new Tramite('',
                                    'Emplazamiento y/o<br>Verificaci&oacute;n de Antenas',
                                    'y Equipos Complementarios',
                                    BOTONES_APPS.botonCF,
                                    [
                                        new AcordeonCalendarioTrimestralOepAntena( REGISTROS_ACORDEON.ANTENAS_calendario ),
                                        new AcordeonInstructivos( REGISTROS_ACORDEON.ANTENAS_instructivos ),
                                        new AcordeonNormativa( REGISTROS_ACORDEON.ANTENAS_normativa )
                                    ],
                                    '[TODO MATI] link angular',
                                    [
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/cuidemonos.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/ish/Banner_Deudas_de_Actividad_Comercial-01.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                    ], null),

    mantenimientoVial:  new Tramite('',
                                    'Mantenimiento<br>Vial Municipal',
                                    '',
                                    BOTONES_APPS.botonCF,
                                    [
                                        new AcordeonCalendarioMV( REGISTROS_ACORDEON.MAN_VIAL_calendario ),
                                        new AcordeonNormativa( REGISTROS_ACORDEON.MAN_VIAL_normativa ),
                                    ],
                                    '[TODO MATI] link angular',
                                    [
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/cuidemonos.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/ish/Banner_Deudas_de_Actividad_Comercial-01.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                    ], null),

    ingresosBrutos:     new Tramite('',
                                    'Ingresos Brutos',
                                    'Contribuyentes con Domicilio Fiscal<br>en el partido de Vicente L&oacute;pez',
                                    BOTONES_APPS.botonConsultas,
                                    [
                                        new AcordeonGuiasTramitesFormularios( REGISTROS_ACORDEON.IIBB_guiaTramite ),
                                        new AcordeonInstructivos( REGISTROS_ACORDEON.IIBB_instructivos ),
                                        new AcordeonCalendarioARBA(),
                                        new AcordeonNormativaARBA(),
                                        new AcordeonLinkInteres( REGISTROS_ACORDEON.IIBB_linkInteres )
                                    ],
                                    '[TODO MATI] link angular',
                                    [
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/cuidemonos.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/ish/Banner_Deudas_de_Actividad_Comercial-01.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                    ], null),

    serviciosVarios:    new Tramite('',
                                    'Servicios Varios',
                                    '<small>Inspecci&oacute;n de medidores, generadores de energ&iacute;a, motores,<br>calderas e instalaciones afectadas a la actividad</small>',
                                    BOTONES_APPS.botonCF,
                                    [
                                        CALENDARIOS_SVM.svm,
                                        new AcordeonNormativa( REGISTROS_ACORDEON.SV_normativa )
                                    ],
                                    '[TODO MATI] link angular',
                                    [
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/cuidemonos.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
                                        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/ish/Banner_Deudas_de_Actividad_Comercial-01.png', 'https://www.vicentelopez.gov.ar/SAT/'),
                                    ], null),

    catastro:           new Tramite('',
                                    'Catastro',
                                    '',
                                    BOTONES_APPS.botonConsultas,
                                    [
                                        new AcordeonFunciones(
                                            '<h4><b>Catastro F&iacute;sico-Geom&eacute;trico</b></h4><h5><b>Topogr&aacute;fico:</b></h5><ul><li>Visaci&oacute;n Mensura</li><li>Visaci&oacute;n Expedientes de Construcci&oacute;n</li><li>Numeraci&oacute;n Domiciliaria</li><li>Certificaci&oacute;n de Nomenclatura Catastral</li><li>L&iacute;nea Municipal y Niveles</li><li>Estudio Planealtim&eacute;trico</li><li>Mensuras Administrativas</li><li>Informes Varios</li><li>Habilitaciones de Comercio e Industria</li></ul><h5><b>Documentaci&oacute;n:</b></h5><ul><li>Confecci&oacute;n, Modificaci&oacute;n y Actualizaci&oacute;n Cartogr&aacute;fica</li><li>Modificaci&oacute;n y Actualizaci&oacute;n Estados Parcelarios</li><li>Trabajos de Fichas</li><li>Archivo de Planos y Documentaci&oacute;n T&eacute;cnica</li></ul><br><h4><b>Catastro Econ&oacute;mico-Legal</b></h4><h5><b>T&eacute;cnico:</b></h5><ul><li>Informe Certificado de Escribano</li><li>Informe Oficios Judiciales</li><li>Informe Juez de Falta</li><li>Actualizaci&oacute;n Dominial</li><li>Inmuebles Municipales</li><li>Excedentes Fiscales (Ley 9533)</li><li>Uso del suelo (Ley 8912)</li><li>Estudio de Valuaciones</li><li>Registro de Planos</li><li>Apertura de Partidas</li><li>Cambio de Titularidad</li></ul><h5><b>Estudios Especiales:</b></h5><ul><li>Interpretaci&oacute;n y Aplicaci&oacute;n Ley Uso del Suelo</li><li>Estudio Costa L&iacute;nea de Ribera</li><li>Solicitudes del H.C.D (Honorable Concejo Deliberante)</li><li>Estudios de prolongaci&oacute;n y apertura de calles</li></ul>'
                                        ),
                                        new AcordeonGuiasTramitesFormularios( REGISTROS_ACORDEON.CATASTRO_guiaTramite ),
                                        new AcordeonSin()
                                    ],
                                    '[TODO MATI] link angular',
                                    [
                                      new CarruselInicio(URL_BASE_ARCHIVOS + 'banners/catastro/01_Cambio_de_Titularidad.png', ''),
                                    ], null),

    derechosCementerio: new Tramite('',
                                    'Derechos de<br>Cementerio',
                                    'Tr&aacute;mites por B&oacute;vedas, Sepulcros y <br>Sepulturas Arrendadas con T&iacute;tulo de Propiedad',
                                    BOTONES_APPS.botonSAT,
                                    [
                                        new AcordeonGuiasTramitesFormularios( REGISTROS_ACORDEON.CEMENTERIO_guiaTramite ),
                                        new AcordeonCalendarioCementerio( REGISTROS_ACORDEON.CEMENTERIO_calendario ),
                                        new AcordeonSin()
                                      ],
                                    '[TODO MATI] link angular',
                                    [], null),

    piletas:            new Tramite('',
                                    'Revisaci&oacute;n M&eacute;dica<br>para Pileta',
                                    '<p>Desde el SAT podes imprimir<br> tu boleta para la revisaci&oacute;n m&eacute;dica de pileta.</p>',
                                    BOTONES_APPS.botonPiletas,
                                    [
                                        new AcordeonGuiasTramitesFormularios( REGISTROS_ACORDEON.PILETA_guiaTramite ),
                                    ],
                                    '[TODO MATI] link angular',
                                    [], null),

   coworking:           new Tramite('',
                                    'Coworking',
                                    '',
                                    BOTONES_APPS.botonCF,
                                    [
                                        new AcordeonNormativa( REGISTROS_ACORDEON.COWORKING_normativa )
                                    ],
                                    '[TODO MATI] link angular',
                                    [], null),
};

export const NOVEDADES = [

    new Novedad('N-20200708',
                URL_BASE_ARCHIVOS + 'novedades/027_Atencion_Tributaria_Online/01.png',
                [
                  URL_BASE_ARCHIVOS + 'novedades/027_Atencion_Tributaria_Online/01.png',
                ],
                'Atención Tributaria Online - Nos cuidamos y te cuidamos durante la Emergencia Sanitaria',
                '2020',
                '',
                `<p>El equipo de agentes tributarios atiende tus solicitudes, consultas y reclamos para que no necesites acercarte a la Municipalidad.</p><br><br><p><strong>M&aacute;s informaci&oacute;n:</strong><br /> <a href="https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml" target="_blank">Contactanos</a></p>`,
                ''),

    new Novedad('N-20191227',
                URL_BASE_ARCHIVOS + 'novedades/026_Talleres_de_Atencion_al_Contribuyente_2019_12-2019/01.png',
                [
                  URL_BASE_ARCHIVOS + 'novedades/026_Talleres_de_Atencion_al_Contribuyente_2019_12-2019/01.png',
                  URL_BASE_ARCHIVOS + 'novedades/026_Talleres_de_Atencion_al_Contribuyente_2019_12-2019/02.png',
                  URL_BASE_ARCHIVOS + 'novedades/026_Talleres_de_Atencion_al_Contribuyente_2019_12-2019/03.png',
                  URL_BASE_ARCHIVOS + 'novedades/026_Talleres_de_Atencion_al_Contribuyente_2019_12-2019/04.png',
                  URL_BASE_ARCHIVOS + 'novedades/026_Talleres_de_Atencion_al_Contribuyente_2019_12-2019/05.png',
                  URL_BASE_ARCHIVOS + 'novedades/026_Talleres_de_Atencion_al_Contribuyente_2019_12-2019/06.png'
                ],
                'Talleres de Atención al Contribuyente',
                'Diciembre de 2019',
                'Olivos Tennis Club (Salta 2753, Olivos)',
                `<p>Realizamos un recorrido de reflexión sobre el lugar que cada uno tiene para desarrollar una buena calidad de atención.<br>Trabajamos: emociones, creatividad, manejo de situaciones complejas; adquisición de estrategias, herramientas y habilidades en la atención.</p>`,
                'Olivos Tennis Club'),

    new Novedad('N-20191114',
                URL_BASE_ARCHIVOS + 'novedades/025_Workshop_CeATS_Convenio_Intermunicipal_Vicente Lopez_14-11-2019/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/025_Workshop_CeATS_Convenio_Intermunicipal_Vicente Lopez_14-11-2019/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/025_Workshop_CeATS_Convenio_Intermunicipal_Vicente Lopez_14-11-2019/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/025_Workshop_CeATS_Convenio_Intermunicipal_Vicente Lopez_14-11-2019/03.png'
                ],
                'Workshop CeATS',
                '14 de noviembre de 2019',
                'Círculo de la Fuerza Aérea Argentina',
                `<p>El Secretario de Ingresos Públicos de la Municipalidad de Vicente López, Lic. Andres Antonietti, participó en el Workshop CeATS sobre el Convenio Intermunicipal para la Distribución de Bases Imponibles de Tributos a las Actividades Económicas.</p><br><br><p><strong>M&aacute;s informaci&oacute;n:</strong><br /> <a href="${URL_BASE_ARCHIVOS}novedades/025_Workshop_CeATS_Convenio_Intermunicipal_Vicente Lopez_14-11-2019/Programa.pdf" target="_blank">Programa</a><br /><a href="https://www.ceats.org/" target="_blank">CeATS</a></p>`,
                'Círculo de la Fuerza Aérea Argentina'),

    new Novedad('N-20191107',
                URL_BASE_ARCHIVOS + 'novedades/024_XXXIV_Encuentro_Anual_-_Comision_de Profesionales_en_Ciencias_Economicas_del_Ambito_Municipal_07_y_08-11-2019/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/024_XXXIV_Encuentro_Anual_-_Comision_de Profesionales_en_Ciencias_Economicas_del_Ambito_Municipal_07_y_08-11-2019/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/024_XXXIV_Encuentro_Anual_-_Comision_de Profesionales_en_Ciencias_Economicas_del_Ambito_Municipal_07_y_08-11-2019/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/024_XXXIV_Encuentro_Anual_-_Comision_de Profesionales_en_Ciencias_Economicas_del_Ambito_Municipal_07_y_08-11-2019/03.png'
                ],
                'XXXIV Encuentro Anual - Comisión de Profesionales en Ciencias Económicas del Ámbito Municipal',
                '07 y 08 de noviembre de 2019',
                'Sheraton Pilar Hotel & Convention Center (Pilar, Buenos Aires)',
                `<p>El Secretario de Ingresos Públicos, Lic. Andres Antonietti, el Cdor. Lucio Costa y el Cdor. Claudio Sivori de la Municipalidad de
                Vicente López expusieron sobre el tema del Convenio Intermunicipal para la Distribución de Bases de IIBB. Breve reseña del marco
                actual, ventajas, desventajas y alternativas para un futuro convenio y su órgano de aplicación.</p>`,
                'Sheraton Pilar Hotel & Convention Center (Pilar, Buenos Aires)'),

    new Novedad('N-20191031',
                URL_BASE_ARCHIVOS + 'novedades/023_PresentaciOn_FiT/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/023_PresentaciOn_FiT/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/023_PresentaciOn_FiT/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/023_PresentaciOn_FiT/03.png'
                ],
                'Presentación del Sistema<br>"FiT - Fiscalización Integral Tributaria"',
                '31 de octubre de 2019',
                'Municipalidad de Vicente López (Av. Maipu 2609, 3er piso, Olivos)',
                `<p>El jueves 31/10/19 se realizó la presentación del sistema de Fiscalización Intregral Tributaria FIT. Esta herramienta fue desarrollada especialmente para lograr una mayor eficiencia en las fiscalizaciones tributarias.</p>`,
                'Municipalidad de Vicente López'),

    new Novedad('N-20190920',
                URL_BASE_ARCHIVOS + 'novedades/022_XXII_Jornadas_Tecnicas_CeATS-Cooperacion_e_Integracion_en_la_Fiscalidad_actual/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/022_XXII_Jornadas_Tecnicas_CeATS-Cooperacion_e_Integracion_en_la_Fiscalidad_actual/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/022_XXII_Jornadas_Tecnicas_CeATS-Cooperacion_e_Integracion_en_la_Fiscalidad_actual/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/022_XXII_Jornadas_Tecnicas_CeATS-Cooperacion_e_Integracion_en_la_Fiscalidad_actual/03.png'
                ],
                'XXII Jornadas Tecnicas del CeATS<br>"Cooperación e Integración en la Fiscalidad actual"',
                '19 y 20 de septiembre de 2019',
                'Usina del Arte (Agust&iacute;n R. Caffarena 1, CABA)',
                `<p>El Secretario de Ingresos Públicos de la Municipalidad de Vicente López, Lic. Andres Antonietti, participó en el 7° Workshop CeATS, intercambió experiencias en simplificación tributaria y transparencia.</p><br/><br/><p><strong>M&aacute;s informaci&oacute;n:</strong><br><a href="https://www.ceats.org/jornadas-tecnicas/programa-xxii-jornadas-tecnicas.pdf" target="_blank">Programa</a><br><a href="https://www.ceats.org/" target="_blank">CeATS</a></p>`,
                'Usina del Arte'),

    new Novedad('N-20190801',
                URL_BASE_ARCHIVOS + 'novedades/Municipio_en_tu_barrio_2019/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Municipio_en_tu_barrio_2019/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/Municipio_en_tu_barrio_2019/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/Municipio_en_tu_barrio_2019/03.png'
                ],
                'Municipio en tu Barrio',
                '2019',
                'Vicente López',
                `<p>A trav&eacute;s de este programa nos acercamos a los vecinos llevando informaci&oacute;n a cada barrio, el equipo de Orientaci&oacute;n Tributaria cuenta con un Stand para que los vecinos se acerquen para hacer consultas sobre tasas y tributos municipales. Consult&aacute; el cronograma.</p><br/><br/><p><strong>M&aacute;s informaci&oacute;n:</strong><br><a href="https://www.vicentelopez.gov.ar/gestion/municipio-en-tu-barrio" target="_blank">Cronograma</a></p>`,
                'Vicente López'),

  new Novedad('N-20190710',
                URL_BASE_ARCHIVOS + 'novedades/Talleres_Atencion_Contribuyente_2019/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Talleres_Atencion_Contribuyente_2019/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/Talleres_Atencion_Contribuyente_2019/02.png'
                ],
                'Talleres de Atención al Contribuyente 2019',
                '2019',
                'Aula CeATS - Balcarce 329, CABA',
                `<p>El equipo de Ventanilla de Atención Tributaria comenzó a realizar los Talleres de Atención al Contribuyente que dicta el Centro de Administraciones Tributarias Subnacionales, con el objetivo de mejorar la calidad de atención.</p><br/><br/><p><strong>M&aacute;s informaci&oacute;n:</strong><br><a href="https://www.vicentelopez.gov.ar/static-iipp/p/IIPP/novedades/Talleres_Atencion_Contribuyente_2019/Difusion_Taller_de_Atencion_al_Contribuyente_Junio.pdf" target="_blank">Contenido</a></p>`,
                'Aula CeATS - Balcarce 329, CABA'),

    new Novedad('N-20190605',
                URL_BASE_ARCHIVOS + 'novedades/Desayuno_con_el_intendente/01.png',
                [
                  URL_BASE_ARCHIVOS + 'novedades/Desayuno_con_el_intendente/01.png',
                  URL_BASE_ARCHIVOS + 'novedades/Desayuno_con_el_intendente/02.png'
                ],
                'Desayuno con el Intendente',
                '05 de junio de 2019',
                'Av Maipú 2609, Olivos',
                `<p>El Intendente Jorge Macri nos visit&oacute; en el comedor de la Secretar&iacute;a de Ingresos P&uacute;blicos, para compartir un desayuno y conversar sobre nuestro d&iacute;a a d&iacute;a de trabajo.</p><br><br><p><strong>M&aacute;s informaci&oacute;n:</strong><br/><a href="https://twitter.com/jorgemacri/status/1136342981643055104" target="_blank">Twitter</a></p>`,
                'Av Maipú 2609, Olivos'),

    new Novedad('N-20190509',
                URL_BASE_ARCHIVOS + 'novedades/XL_Evento_Regional_CeATS_Conflictos_y_Armonias_de_la_Tributacion_local/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/XL_Evento_Regional_CeATS_Conflictos_y_Armonias_de_la_Tributacion_local/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/XL_Evento_Regional_CeATS_Conflictos_y_Armonias_de_la_Tributacion_local/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/XL_Evento_Regional_CeATS_Conflictos_y_Armonias_de_la_Tributacion_local/03.png',
                    URL_BASE_ARCHIVOS + 'novedades/XL_Evento_Regional_CeATS_Conflictos_y_Armonias_de_la_Tributacion_local/04.png',
                    URL_BASE_ARCHIVOS + 'novedades/XL_Evento_Regional_CeATS_Conflictos_y_Armonias_de_la_Tributacion_local/05.png',
                    URL_BASE_ARCHIVOS + 'novedades/XL_Evento_Regional_CeATS_Conflictos_y_Armonias_de_la_Tributacion_local/06.png',
                    URL_BASE_ARCHIVOS + 'novedades/XL_Evento_Regional_CeATS_Conflictos_y_Armonias_de_la_Tributacion_local/07.png',
                    URL_BASE_ARCHIVOS + 'novedades/XL_Evento_Regional_CeATS_Conflictos_y_Armonias_de_la_Tributacion_local/08.png',
                ],
                'XL Evento Regional CeATS &ldquo;Conflictos y Armon&iacute;as de la Tributaci&oacute;n local&rdquo;',
                '09 de mayo de 2019',
                'Malaver 401, Olivos',
                `<p>El evento tuvo como objetivo exponer la posici&oacute;n de los gobiernos locales ante la CSJN sobre la Tasa de Inspecci&oacute;n de Seguridad e Higiene, y promover el intercambio de visiones y opiniones entre fiscos y contribuyentes en materia de autonom&iacute;a municipal, potestades tributarias y responsabilidad fiscal.</p>      <br><br><p><strong>M&aacute;s informaci&oacute;n:</strong><br /><a href="${URL_BASE_ARCHIVOS}novedades/XL_Evento_Regional_CeATS_Conflictos_y_Armonias_de_la_Tributacion_local/Programa_del_Evento_CeATS.pdf" target="_blank">Programa del Evento</a><br /><a href="https://www.ceats.org/" target="_blank">CeATS</a></p>`,
                'Malaver 401, Olivos'),

    new Novedad('N-20190409',
                URL_BASE_ARCHIVOS + 'novedades/7mo_Workshop_CeATS-Impuesto_Predial/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/7mo_Workshop_CeATS-Impuesto_Predial/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/7mo_Workshop_CeATS-Impuesto_Predial/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/7mo_Workshop_CeATS-Impuesto_Predial/03.png',
                    URL_BASE_ARCHIVOS + 'novedades/7mo_Workshop_CeATS-Impuesto_Predial/04.png',
                    URL_BASE_ARCHIVOS + 'novedades/7mo_Workshop_CeATS-Impuesto_Predial/05.png'
                ],
                '7&deg; Workshop CeATS<br>"Impuesto Predial"',
                '04 de abril de 2019',
                'Mar del Plata',
                '<p>El Secretario de Ingresos P&uacute;blicos de la Municipalidad de Vicente L&oacute;pez, Lic. Andres Antonietti, particip&oacute; en el 7&deg; Workshop CeATS, intercambi&oacute; experiencias en simplificaci&oacute;n tributaria y transparencia.</p><br><br><p><strong>M&aacute;s informaci&oacute;n:</strong><br /><a href="https://www.ceats.org/eventos-detalle.php?id=56" target="_blank">Evento</a><br /><a href="https://www.ceats.org/" target="_blank">CeATS</a></p>',
                'Mar del Plata'),

    new Novedad('N-20171103',
                URL_BASE_ARCHIVOS + 'novedades/Programa_de_Capacitacion_en_Tributacion_Local_XX/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Programa_de_Capacitacion_en_Tributacion_Local_XX/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/Programa_de_Capacitacion_en_Tributacion_Local_XX/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/Programa_de_Capacitacion_en_Tributacion_Local_XX/03.png',
                    URL_BASE_ARCHIVOS + 'novedades/Programa_de_Capacitacion_en_Tributacion_Local_XX/04.png',
                    URL_BASE_ARCHIVOS + 'novedades/Programa_de_Capacitacion_en_Tributacion_Local_XX/05.png',
                    URL_BASE_ARCHIVOS + 'novedades/Programa_de_Capacitacion_en_Tributacion_Local_XX/06.png'
                ],
                'Programa de Capacitaci&oacute;n<br>en Tributaci&oacute;n Local',
                '2017 - 2018 - 2019',
                'Olivos Tennis Club, Olivos (Salta 2753, Olivos)',
                '<p>Los agentes tributarios est&aacute;n siendo capacitados en el Programa de Tributaci&oacute;n Local.</p><p><strong>Temario:</strong><br />&bull; Poder Tributario y Sistema Tributario<br />&bull; Encuadre jur&iacute;dico y efectos econ&oacute;micos de los Tributos<br />&bull; Los tributos en Vicente L&oacute;pez y sus procedimientos<br /><br /><strong>Objetivos del Programa:</strong><br />&bull; Conocer y aplicar en el trabajo diario un vocabulario t&eacute;cnico-tributario uniforme.<br />&bull; Entender y poder respaldar la propia tarea y la del &aacute;rea desde el encuadre jur&iacute;dico y social establecido.<br />&bull; Asesorar al contribuyente en base a las buenas pr&aacute;cticas de una administraci&oacute;n tributaria moderna.<br />&bull; Aplicar los conocimientos t&eacute;cnicos requeridos para la realizaci&oacute;n de las tareas a su cargo seg&uacute;n corresponda.</p>',
                'Olivos Tennis Club, Olivos'),

    new Novedad('N-20181010',
                URL_BASE_ARCHIVOS + 'novedades/XIV_Feria_y_Congreso_Internacional_para_Gobiernos_Locales/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/XIV_Feria_y_Congreso_Internacional_para_Gobiernos_Locales/01.png',
                ],
                'XIV Feria y Congreso Internacional<br>para Gobiernos Locales',
                '10 y 11 de octubre de 2018',
                'Centro Costa Salguero (Av. Costanera R. Obligado 1221, CABA)',
                '<p>El Secretario de Ingresos P&uacute;blicos de la Municipalidad de Vicente L&oacute;pez, Lic. Andres Antonietti, expuso en el Panel Centro de Administraciones Tributarias Subnacionales - CeATS &ldquo;M&aacute;s y mejor gesti&oacute;n de los recursos municipales&rdquo;, sobre el tema: Pol&iacute;tica y Gesti&oacute;n Tributaria municipal.</p><p><strong>M&aacute;s informaci&oacute;n:</strong><br /><a href="http://www.servicios-publicos.com.ar/" target="_blank">Servicios P&uacute;blicos</a><br /><a href="http://www.smartactiva.com/" target="_blank">Smart Activa</a></p>',
                'Centro Costa Salguero'),

    new Novedad('N-20180924',
                URL_BASE_ARCHIVOS + 'novedades/Participacion_en_la_semana_de_gobierno_abierto/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Participacion_en_la_semana_de_gobierno_abierto/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/Participacion_en_la_semana_de_gobierno_abierto/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/Participacion_en_la_semana_de_gobierno_abierto/03.png',
                    URL_BASE_ARCHIVOS + 'novedades/Participacion_en_la_semana_de_gobierno_abierto/04.png',
                    URL_BASE_ARCHIVOS + 'novedades/Participacion_en_la_semana_de_gobierno_abierto/05.png'
                ],
                'Participaci&oacute;n en la Semana<br />de Gobierno Abierto',
                '24 al 29 de septiembre de 2018',
                'Usina del Arte (Agustín R. Caffarena 1, La Boca, CABA) y ACIJ (Av. de Mayo 1161, CABA)',
                '<p>Argentina fue sede de la 5o Conferencia Internacional de Datos Abiertos, 1500 personas de 85 pa&iacute;ses estuvimos repensando la agenda global de Datos Abiertos.</p><p>Más informaci&oacute;n:<br><a href="https://www.vicentelopez.gov.ar/static-iipp/p/IIPP/novedades/Participacion_en_la_semana_de_gobierno_abierto/Datos_para_la_Transparencia_y_la_Rendicion_de_Cuentas_en_America_Latina-Minutas.pdf" target="_blank">Datos para la Transparencia y la Rendici&oacute;n de Cuentas en Am&eacute;rica Latina - Minutas</a><br><a href="https://twitter.com/datosgobar/status/1048268305340018690" target="_blank">Video</a><br><a href="https://idatosabiertos.org/la-semana-de-los-datos-abiertos-en-buenos-aires-2018/" target="_blank">Idatosabiertos</a><br><a href="https://www.opendatacon.org/#/agenda" target="_blank">IODC</a><br><a href="https://iodc18.sched.com/" target="_blank">IODC - Agenda</a><br><a href="https://www.flickr.com/photos/167218975@N05/with/44166422025/" target="_blank">Flikr</a></p>',
                'Usina del Arte y ACIJ'),

    new Novedad('N-20180914',
                `${URL_BASE_ARCHIVOS}novedades/Exposicion_ceats_VTU/01.png`,
                [
                    `${URL_BASE_ARCHIVOS}novedades/Exposicion_ceats_VTU/01.png`,
                    `${URL_BASE_ARCHIVOS}novedades/Exposicion_ceats_VTU/02.png`,
                    `${URL_BASE_ARCHIVOS}novedades/Exposicion_ceats_VTU/03.png`,
                ],
                'XXI Jornadas Técnicas CeATS -<br>Capital Humano y Tecnológico de la ATS<br>"Ventanilla &Uacute;nica de Atenci&oacute;n Tributaria"',
                '13 y 14 de septiembre de 2018',
                'Museo de la Inmigración (Av. Antártida Argentina 1355, CABA)',
                '  <p><span class="fontstyle0">El Secretario de Ingresos P&uacute;blicos de la Municipalidad de Vicente L&oacute;pez, Lic. Andres Antonietti y la Directora de Atenci&oacute;n Tributaria y<br />L&iacute;der de Proyecto VTU, Lic. Analia Politi, expusieron sobre la experiencia en Vicente L&oacute;pez con la Ventanilla &Uacute;nica de Atenci&oacute;n<br />Tributaria. La simplificaci&oacute;n de tr&aacute;mites y la profesionalizaci&oacute;n del equipo de atenci&oacute;n, con el objetivo de proporcionar una mejor<br />calidad de servicio hacia el contribuyente.<br /></span><br><span class="fontstyle2 u-text-bold">M&aacute;s informaci&oacute;n:<br /></span><a href="https://www.ceats.org/jornadas-tecnicas/index.php" target="_blank">Evento</a><br /><a href="https://www.ceats.org" target="_blank"/>CeATS</a> </p>',
                'Museo de la Inmigración'),

    new Novedad('N-20180702',
                URL_BASE_ARCHIVOS + 'novedades/Encuentro_Capacitacion_CeATS-Atencion_Contribuyente/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Encuentro_Capacitacion_CeATS-Atencion_Contribuyente/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/Encuentro_Capacitacion_CeATS-Atencion_Contribuyente/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/Encuentro_Capacitacion_CeATS-Atencion_Contribuyente/03.png',
                ],
                'Encuentro de Capacitaci&oacute;n CeATS<br>"Atenci&oacute;n al Contribuyente"',
                '02 de agosto de 2018',
                'Auditorio de la Municipalidad de Ezeiza',
                '<p>Participamos en la capacitaci&oacute;n en Atenci&oacute;n al Contribuyente, incorporamos estrategias y tips para mantener una buena atenci&oacute;n.</p><p><strong>Temas:</strong><br />&bull; Calidad en servicio vs. Calidad en atenci&oacute;n<br />&bull; Neurociencias: procesos cognitivos, atenci&oacute;n, pensamiento, memoria<br />&bull; La Creatividad: una buena aliada en calidad en atenci&oacute;n<br />&bull; Autoevaluaci&oacute;n , identificando fortalezas y debilidades<br />&bull; C&oacute;mo las relaciones internas se reflejan hacia afuera<br />&bull; Comunicaci&oacute;n<br />&bull; Las distintas emociones: c&oacute;mo distinguirlas y c&oacute;mo dar respuesta</p><p><br><strong>M&aacute;s informaci&oacute;n:</strong><br /><a href="http://www.ceats.org" target="_blank">CeATS</a></p>',
                'Auditorio de la Municipalidad de Ezeiza'),

    new Novedad('N-20171022',
                URL_BASE_ARCHIVOS + 'novedades/Politica_Fiscal_Servicio_Desarrollo_Economico_Social-Seminario/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Politica_Fiscal_Servicio_Desarrollo_Economico_Social-Seminario/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/Politica_Fiscal_Servicio_Desarrollo_Economico_Social-Seminario/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/Politica_Fiscal_Servicio_Desarrollo_Economico_Social-Seminario/03.png'
                ],
                'La Pol&iacute;tica Fiscal al Servicio del Desarrollo<br>Econ&oacute;mico y Social - Seminario',
                '04 al 07 de junio de 2018',
                'Centro de Formaci&oacute;n de la Cooperaci&oacute;n Espa&ntilde;ola (25 de Mayo 520, Montevideo, Uruguay)',
                '<p>Organizado por: I.E.F &ndash; Instituto de Estudios Fiscales (Espa&ntilde;a) y AECID &ndash; Agencia Espa&ntilde;ola de Cooperaci&oacute;n Internacional para el Desarrollo&rdquo;<br />El Secretario de Ingresos P&uacute;blicos, Andr&eacute;s Antonietti, particip&oacute; del Seminario &ldquo;La Pol&iacute;tica Fiscal al Servicio del Desarrollo Econ&oacute;mico y Social&rdquo;. All&iacute; aplic&oacute; sus conocimientos en materia fiscal, en lo referente a R&eacute;gimen Simplificado como instrumento para mejorar las&nbsp;bases tributarias, impacto territorial de las econom&iacute;as digital y corporativa, alcance y aportes desde lo local de las reformas tributarias y tendencias en materia de pol&iacute;ticas fiscales en la regi&oacute;n.</p><p><br><strong>M&aacute;s informaci&oacute;n:</strong><br /><a href="http://intercoonecta.aecid.es/programaci%C3%B3n-de-actividades/la-pol-tica-fiscal-al-servicio-del-desarrollo-econ-mico-y-socia" target="_blank">Programa</a><br /><a href="http://intercoonecta.aecid.es" target="_blank">Cooperación Española - Conocimiento Interconecta</a></p>',
                'Centro de Formaci&oacute;n de la Cooperaci&oacute;n Espa&ntilde;ola'),

    new Novedad('N-20180325',
                URL_BASE_ARCHIVOS + 'novedades/Participacion_Mesa_Ciudadania_y_Fiscalidad/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Participacion_Mesa_Ciudadania_y_Fiscalidad/01.png'
                ],
                'Participaci&oacute;n en la<br>Mesa de Ciudadan&iacute;a y Fiscalidad',
                '25 de abril de 2018',
                'AFIP (Av. Hip&oacute;lito Yrigoyen 370, CABA)',
                '<p>Se realiz&oacute; un encuentro federal basado en el concurso &ldquo;&iexcl;Mi Factura por Favor!&rdquo; Con la participaci&oacute;n del Presidente de Ceats,<br />miembros de AFIP CABA, AFIP Salta, Rentas de Jujuy, AFIP Jujuy, ATM Mendoza, AFIP Mendoza, AFIP C&oacute;rdoba, equipo de<br />Capacitaci&oacute;n del Ministerio de Hacienda de la Naci&oacute;n, AGIP CABA, Escuela Solidaria Mendoza, DGE Mendoza y la Secretar&iacute;a de Ingresos P&uacute;blicos de la Municipalidad de Vicente L&oacute;pez.<br />Este concurso trabaja en promover valores de cultura tributaria, estimular el desarrollo del juicio cr&iacute;tico de los estudiantes, la importancia que tiene el pago de los impuestos para el bienestar de la comunidad; como tambi&eacute;n el da&ntilde;o social que provoca la evasi&oacute;n, la elusi&oacute;n, el contrabando y el trabajo no registrado.</p><p><br><strong>M&aacute;s informaci&oacute;n:</strong><br /><a href="http://www.ceats.org" target="_blank">CeATS</a><br /><a href="http://www.afip.gob.ar" target="_blank">AFIP</a></p>',
                'AFIP'),

    new Novedad('N-20161021',
                URL_BASE_ARCHIVOS + 'novedades/Encuentro_Regional_de_las_Americas_Alianza_Gobierno_Abierto/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Encuentro_Regional_de_las_Americas_Alianza_Gobierno_Abierto/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/Encuentro_Regional_de_las_Americas_Alianza_Gobierno_Abierto/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/Encuentro_Regional_de_las_Americas_Alianza_Gobierno_Abierto/03.png'
                ],
                'Encuentro Regional de las Am&eacute;ricas<br>de la Alianza para el Gobierno Abierto',
                '21 y 22 de noviembre de 2017',
                'CCK - Centro Cultural Kirchner (Sarmiento 151, CABA)',
                '<p>El Lic. Andres Antonietti particip&oacute; del Panel &ldquo;La &uacute;ltima milla al ciudadano&rdquo;, expuso sobre las ventajas y los desaf&iacute;os de las estrategias y acciones de transparencia en nuestra administraci&oacute;n tributaria. Esto sucedi&oacute; en el Encuentro Regional de las Am&eacute;ricas de la Alianza para el Gobierno Abierto 2017, evento que reuni&oacute; en la Ciudad de Buenos Aires a m&aacute;s de 2.000 representantes de gobiernos, sociedad civil, innovadores digitales, desarrolladores, periodistas e investigadores para compartir experiencias e impulsar la agenda de Gobierno Abierto de cara a los desaf&iacute;os regionales actuales. En esta edici&oacute;n, el Gobierno y la Sociedad Civil de Argentina fueron los anfitriones del encuentro Regional de las Am&eacute;ricas de la Alianza para el Gobierno Abierto, que se realiz&oacute; el 21 al 22 de noviembre en el Centro Cultural N&eacute;stor Kirchner - Sarmiento 151 CABA-.</p><p><br><strong>M&aacute;s informaci&oacute;n:</strong><br /><a href="http://www.argentina.gob.ar/regionalogparg" target="_blank">Evento</a><br /><a href="http://www.argentina.gob.ar/regionalogparg/agenda" target="_blank">Agenda</a><br /><a href="http://www.argentina.gob.ar/modernizacion" target="_blank">Ministerio de Modernizaci&oacute;n</a></p>',
                'CCK - Centro Cultural Kirchner'),

    new Novedad('N-20171102',
                URL_BASE_ARCHIVOS + 'novedades/encuentro_anual_comision_CE/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/encuentro_anual_comision_CE/01.png',

                ],
                'XXXII Encuentro Anual de la Comisi&oacute;n<br> de Profesionales en Ciencias Econ&oacute;micas<br> en el &Aacute;mbito Municipal',
                '02 y 03 de noviembre de 2017',
                'NH Gran Hotel Provincia (Av. Peralta Ramos 2502, Mar del Plata)',
                '<p>El Lic. Andres Antonietti particip&oacute; de los encuentros que convocan a profesionales en ciencias econ&oacute;micas que se desempe&ntilde;en en el &aacute;mbito municipal: las II Jornadas Nacionales de Profesionales en Ciencias Econ&oacute;micas de Municipios y Comunas de la Rep&uacute;blica Argentina y el XXXII Encuentro Anual de la Comisi&oacute;n de Profesionales del &Aacute;mbito Municipal.</p><p>Los ejes tem&aacute;ticos que se abordaron fueron:<br />&bull; El rol del profesional en ciencias econ&oacute;micas en su municipio o comuna y su contribuci&oacute;n a la gesti&oacute;n municipal<br />&bull; Herramientas para optimizar la eficacia y la eficiencia de la gesti&oacute;n municipal<br />&bull; Pol&iacute;ticas de financiamiento del presupuesto municipal<br />&bull; Auditor&iacute;a, control e indicadores de gesti&oacute;n y transparencia y gobierno abierto.</p><p><b>M&aacute;s informaci&oacute;n:</b><br/><a href="https://cpba.com.ar/noticias-consejo/item/4866-mar-del-plata-sera-sede-de-eventos-para-profesionales-del-ambito-municipal" target="_blank">Noticia</a></p>',
                'Mar del Plata',
                'XXXII Encuentro Anual de la Comisi&oacute;n de Profesionales en Cs. Econ&oacute;micas'),

    new Novedad('N-20170821',
                URL_BASE_ARCHIVOS + 'novedades/Premio_Cippec_Innovacion_Economica/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Premio_Cippec_Innovacion_Economica/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/Premio_Cippec_Innovacion_Economica/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/Premio_Cippec_Innovacion_Economica/03.png'
                ],
                'Premio Cippec a la<br>Innovaci&oacute;n Econ&oacute;mica 2016',
                '24 de agosto de 2017',
                'Banco Supervielle (Bartolom&eacute; Mitre 434, CABA)',
                '<p>Sistema de Autogesti&oacute;n Tributaria - Premio Cippec a la Innovaci&oacute;n Econ&oacute;mica.<br />Entrega de los premios de la 3&deg; edici&oacute;n del Premio a la Innovaci&oacute;n en la Gesti&oacute;n P&uacute;blica. Representantes de los organismos y empresas estatales recibieron los premios y menciones por las pol&iacute;ticas p&uacute;blicas innovadoras que implementaron. En el &aacute;mbito econ&oacute;mico, Vicente L&oacute;pez. Sistema de Autogesti&oacute;n Tributaria: plataforma multicanal (presencial, telef&oacute;nica y web) orientada a promover el cumplimiento voluntario de las obligaciones fiscales mediante la simplificaci&oacute;n de tr&aacute;mites y procesos, el fomento de la autogesti&oacute;n de parte de los contribuyentes y la concientizaci&oacute;n de los agentes tributarios sobre el rol central de los contribuyentes en el esquema fiscal. Esta pol&iacute;tica innovadora comenz&oacute; a gestarse desde el inicio de la gesti&oacute;n en 2012, en 2016 inici&oacute; el per&iacute;odo de puesta en producci&oacute;n del sistema en su conjunto. El objetivo general de esta pol&iacute;tica es incrementar el cumplimiento voluntario de los tributos que gestiona la AT. En lo espec&iacute;fico, los objetivos son mejorar la eficacia en la recaudaci&oacute;n mediante el uso de plataformas inform&aacute;ticas, reducir los costos de gesti&oacute;n, facilitar a los contribuyentes el cumplimiento de las obligaciones fiscales y elevar los est&aacute;ndares de calidad de la gesti&oacute;n tributaria con la participaci&oacute;n y empoderamiento de los contribuyentes.</p><p><br><strong>M&aacute;s informaci&oacute;n:</strong><br /><a href="http://www.cippec.org" target="_blank">CIPPEC</a></p>',
                'Banco Supervielle'),

    new Novedad('N-20170731',
                URL_BASE_ARCHIVOS + 'novedades/Taller_Gobierno/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Taller_Gobierno/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/Taller_Gobierno/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/Taller_Gobierno/03.png',

                ],
                'Taller de "Gobierno Abierto" <br><br>',
                '31 de agosto de 2017 y 01 de septiembre de 2017',
                'Casa de la Cultura (Ricardo Guti&eacute;rrez 1060, Olivos)',
                '<p>Trabajamos con Poder Ciudadano durante todo el a&ntilde;o 2017 en el proceso de implementaci&oacute;n de pol&iacute;ticas de Transparencia y Gobierno Abierto en la Secretar&iacute;a de Ingresos P&uacute;blicos.<br />En agosto y septiembre se realizaron talleres de concientizaci&oacute;n para todos los empleados de la Secretar&iacute;a.</p><p><br><strong>M&aacute;s informaci&oacute;n:</strong><br /><a href="http://www.poderciudadano.org" target="_blank">Poder Ciudadano</a></p>',
                'Casa de la Cultura'),

    new Novedad('N-20170727',
                URL_BASE_ARCHIVOS + 'novedades/Primer_puesto_Ranking_de_Municipios_Argentinos-IARAF/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Primer_puesto_Ranking_de_Municipios_Argentinos-IARAF/01.png'
                ],
                'Primer puesto en el Ranking de<br>Municipios Argentinos - IARAF',
                '24 de agosto de 2017',
                '',
                '<p>Primer puesto del ranking de Municipios para el Portal de Transparencia Fiscal de la Municipalidad de Vicente L&oacute;pez, seg&uacute;n el &Iacute;ndice de Visibilidad de la informaci&oacute;n fiscal relevado en sitios web oficiales por IARAF.</p><p>Por IARAF Informe Econ&oacute;mico n&ordm; 394 "Casos como el de Vicente L&oacute;pez, municipio que se ubica primero en el ranking de visibilidad y&nbsp;que ha presentado una constante mejor&iacute;a en la difusi&oacute;n de los datos fiscales a lo largo del tiempo, son ejemplos de que incrementar la transparencia fiscal depende principalmente de la voluntad y compromiso de los funcionarios y empleados, y de poner toda&nbsp;la tecnolog&iacute;a, cada vez m&aacute;s accesible y menos costosa, al servicio de la ciudadan&iacute;a."</p><p><br><strong>M&aacute;s informaci&oacute;n:</strong><br /><a href="http://www.iaraf.org" target="_blank">IARAF</a></p>',
                ''),

    new Novedad('N-20170607',
                URL_BASE_ARCHIVOS + 'novedades/Exposicion_Portal_Transparencia_Fiscal/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Exposicion_Portal_Transparencia_Fiscal/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/Exposicion_Portal_Transparencia_Fiscal/02.png'
                ],
                'Exposici&oacute;n sobre el Portal<br>de Transparencia Fiscal',
                '07 de julio de 2017',
                'Club Regatas de Chascom&uacute;s (Av. Costanera Espa&ntilde;a y Moreno, Chascom&uacute;s)',
                '<p>Encuentro de la Comisión de Profesionales en el Ámbito Municipal del Consejo de Profesionales de Ciencias Económicas de la Provincia de Buenos Aires.</p><br><p>5ta Reuni&oacute;n Mensual - Exposici&oacute;n sobre el Portal de Transparencia Fiscal de la Municipalidad de Vicente L&oacute;pez, por Lic. Andr&eacute;s Antonietti (Secretario de Ingresos P&uacute;blicos), Lic. Anal&iacute;a Politi (Directora de Atenci&oacute;n Tributaria) y Valeria Balducci (Comunicaci&oacute;n y V&iacute;nculo Ciudadano).</p>',
                'Club Regatas de Chascom&uacute;s'),

    new Novedad('N-20161006',
                URL_BASE_ARCHIVOS + 'novedades/Seminario_el_ciudadano_ante_la_Administracion/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Seminario_el_ciudadano_ante_la_Administracion/01.png',

                ],
                'Seminario &ldquo;El ciudadano ante la Administraci&oacute;n&rdquo;:<br />C&oacute;mo fomentar el cumplimiento fiscal',
                '03 al 06 de octubre de 2016',
                'Santa Cruz de la Sierra, Bolivia',
                '<p>El Secretario, Lic. Andr&eacute;s Antonietti, fue convocado por el Instituto de Estudios Fiscales del Ministerio de Hacienda y Administraciones P&uacute;blicas y la Agencia Espa&ntilde;ola de Cooperaci&oacute;n Internacional en el marco de su Programa Intercoonecta.<br /><br />Seminario dirigido a funcionarios de las administraciones tributarias, y miembros de ministerios de finanzas que tuvieron relaci&oacute;n por su trabajo con los aspectos tratados durante la actividad.</p><p><b>Más información:</b><br><a href="http://www.aecid.org.uy/" target="_blank">AECID</a></p>',
                'Santa Cruz de la Sierra, Bolivia'),

    new Novedad('N-20160801',
                URL_BASE_ARCHIVOS + 'novedades/Inauguracion_nueva_Ventanilla_Unica_Tributaria/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/Inauguracion_nueva_Ventanilla_Unica_Tributaria/01.png',
                    URL_BASE_ARCHIVOS + 'novedades/Inauguracion_nueva_Ventanilla_Unica_Tributaria/02.png',
                    URL_BASE_ARCHIVOS + 'novedades/Inauguracion_nueva_Ventanilla_Unica_Tributaria/03.png',

                ],
                'Inauguraci&oacute;n de la nueva<br>Ventanilla &Uacute;nica de Atenci&oacute;n Tributaria',
                'Septiembre de 2016',
                'Municipalidad de Vicente López (Av. Maipú 2609, PB, Olivos)',
                '<p>Inauguraci&oacute;n de la nueva Ventanilla &Uacute;nica de atenci&oacute;n Tributaria.<br />Con el objetivo de mejorar, agilizar y facilitar los servicios al contribuyente, la Municipalidad de Vicente L&oacute;pez inaugur&oacute; el sector de Ventanilla &Uacute;nica de Atenci&oacute;n Tributaria.<br />De esta manera se busca facilitar el v&iacute;nculo de los vecinos con la administraci&oacute;n tributaria mediante la reingenier&iacute;a de procesos, la incorporaci&oacute;n de tecnolog&iacute;as, la adecuaci&oacute;n de los sistemas inform&aacute;ticos, la capacitaci&oacute;n del personal y la puesta en valor de los espacios f&iacute;sicos.<br />En el sector de ventanilla &uacute;nica se pueden gestionar tr&aacute;mites sobre tasas y tributos municipales</p><p><br /><strong>Horario de Atenci&oacute;n:</strong> lunes a viernes, de 08:00 a 16:00 hs<br />Sede Municipal - PB (Av. Maip&uacute; 2609, Olivos)</p>',
                'Municipalidad de Vicente López'),

    new Novedad('N-20160926',
                URL_BASE_ARCHIVOS + 'novedades/UC_Conferencia_Usuarios_Esri-2016/01.png',
                [
                    URL_BASE_ARCHIVOS + 'novedades/UC_Conferencia_Usuarios_Esri-2016/01.png'
                ],
                'UC Conferencia Usuarios Esri',
                '26 de octubre de 2016',
                'Sheraton Hotel & Convention Center (San Martín 1225/1275, CABA)',
                '<p>El Secretario, Lic. Andr&eacute;s Antonietti, particip&oacute; de la Conferencia de Usuarios Esri de Argentina y Uruguay, que se llev&oacute; a cabo en Buenos Aires el 26 de Abril de 2016, en el Sheraton Hotel &amp; Convention Center. Con la presencia de m&aacute;s de 800 asistentes de organismos municipales, provinciales y nacionales, empresas p&uacute;blicas y privadas, result&oacute; el escenario ideal para conocer a trav&eacute;s usuarios y expertos Esri y Aeroterra, los proyectos geogr&aacute;ficos m&aacute;s innovadores, las &uacute;ltimas novedades de la plataforma, los avances en App´s y datos disponibles y por &uacute;ltimo, entender el contexto que atraviesan hoy los usuarios de tecnolog&iacute;a en sistemas de informaci&oacute;n Geogr&aacute;fica, sus desaf&iacute;os y posibilidades futuras.</p><p><h4><br><strong>M&aacute;s informaci&oacute;n:</strong></h4><a href="http://www.aeroterra.com/UC2016/index_cierre.shtml" target="_blank">Evento</a><br /><a href="http://www.aeroterra.com" target="_blank">Aeroterra</a><br /><a href="http://www.esri.com" target="_blank">Esri</a></p>',
                'Sheraton Hotel & Convention Center'),
];

export const INFORMACION_DATOS = {
    datosUtiles: new InformacioyHerramitentas('datosUtiles', 'assets/png/Iconos-pdf.png', 'Informaci&oacute;n y<br> Datos &uacute;tiles', '/info/datosUtiles'),
    preguntasFrecuentes: new InformacioyHerramitentas('preguntasFrecuentes', 'assets/png/Iconos-pregunta.png', 'Preguntas Frecuentes', '/info/preguntasFrecuentes'),
    calendarioTributario: new InformacioyHerramitentas('calendarioTributario', 'assets/png/Iconos-calendario.png', 'Calendario Tributario', '/info/calendarioTributario'),
    normativaTributaria:
      new InformacioyHerramitentas(
        'normativaTributaria',
        'assets/png/Iconos-libro.png',
        'Normativa Tributaria',
        '/info/normativaTributaria',
        [
            new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/cuidemonos.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
        //   new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/normativa-tributaria/Plan_de_Facilidades_2020.png', URL_BASE_ARCHIVOS + '/instructivo/ABL/Instructivo_Plan_de_Facilidades_de_Pago_2020.pdf'),
        //   new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/normativa-tributaria/01_Habilita_tu_negocio_2019.png', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.36-20_bonif.dchos_ofi.libro_habilitac_y_quejas.pdf')
        ]),
    gobiernoAbierto: new InformacioyHerramitentas('gobiernoAbierto', 'assets/png/Iconos-share.png', 'Gobierno Abierto', '/info/gobiernoAbierto'),
    culturaFiscal: new InformacioyHerramitentas('culturaFiscal', 'assets/png/Iconos-billetera.png', 'Cultura Fiscal', '/info/culturaFiscal'),
    informacionUtil: new InformacioyHerramitentas('informacionUtil', 'assets/png/Iconos-pdf.png', 'Informaci&oacute;n &uacute;til', '/info/informacionUtil'),
    guiasTramite: new InformacioyHerramitentas('guiasTramite', 'assets/png/Iconos-pdf.png', 'Gu&iacute;as de Tr&aacute;mite<br>y Formularios', '/info/guiasTramite'),
    cuentosAbuelos: new InformacioyHerramitentas('cuentosAbuelos', '', 'Programa<br>"Cuentos por Abuelos"', '/info/cuentosAbuelos'),
    coherenciaFiscal: new InformacioyHerramitentas('coherenciaFiscal', 'assets/png/Iconos-puzzle.png', '<strong>Prop&oacute;sitos y Objetivos</strong>', '/info/coherenciaFiscal'),
    nosotros: new InformacioyHerramitentas('nosotros', '', 'Nosotros', '/info/nosotros'),
    transparenciaActiva: new InformacioyHerramitentas('transparenciaActiva', '', 'Transparencia Activa', '/info/transparenciaActiva'),
    vision: new InformacioyHerramitentas('vision', '', 'Visi&oacute;n y<br>Responsabilidades Primarias', '/info/vision'),
    equipo: new InformacioyHerramitentas('equipo', '', 'Equipo', '/info/equipo')
};

export const DATOS_ATENCION = [
    {titulo: 'Sede Municipal', ubicacion: 'Av Maip&uacute; 2609 - Olivos', fechas: 'Lunes a viernes de 08:00 a 16:00 hs', telefono: '147 / 4711 2800'},
    {titulo: 'Ventanilla &Uacute;nica de Atenci&oacute;n Tributaria', ubicacion: 'Av Maip&uacute; 2609, PB - Olivos', fechas: 'Lunes a viernes de 08:00 a 16:00 hs'},
    {titulo: 'Contactanos', nombreUrl: 'www.vicentelopez.gov.ar/SAT', url: 'https://www.vicentelopez.gov.ar', respuestas: 'Respuestas: Lunes a viernes de 08:00 a 16:00 hs'},
    {titulo: 'Mesa General de Entradas (MGE)', ubicacion: 'Sede Municipal: Av Maip&uacute; 2609, PB, Olivos', fechas: 'Lunes a viernes de 08:00 a 14:00 hs', telefono: '4711-2800 (Int. 4450)'},
    {titulo: 'Direcci&oacute;n de Cementerio', ubicacion: 'Mariano Pelliza 3100, Olivos', telefono: '4790-9269 / 9269', fechas: 'Lunes a Viernes de 08:00 a 17:00 hs'},
];

export const DELEGACIONES = {

    floridaOeste: new Delegacion('Florida Oeste', 'Av. San Mart&iacute;n 4106', '4760 9268 / 5896', 'delegacion.floridao@vicentelopez.gov.ar', 'Lunes a Viernes de 08:30 a 16:00 hs'),
    villaMartelli: new Delegacion('Villa Martelli', 'Laprida 3902', '4709 1144 / 5775', 'delegacion.martelli@vicentelopez.gov.ar', 'Lunes a Viernes de 08:30 a 16:00 hs'),
    Carapachay: new Delegacion('Carapachay', 'Independencia y Ascasubi', '4756 3098 / Fax: 4756 5673', 'delegacion.carapachay@vicentelopez.gov.ar', 'Lunes a Viernes de 08:30 a 16:00 hs'),
    villaAdelina: new Delegacion('Villa Adelina', 'Avda. Ader 4057', '4763 7727', 'delegacion.adelina@vicentelopez.gov.ar', 'Lunes a Viernes de 08:30 a 16:00 hs'),
    floridaCentral: new Delegacion('Florida Central', 'Vergara 2382', '4796 3894 / 4718 1991', 'delegacion.florida@vicentelopez.gov.ar', 'Lunes a Viernes de 08:30 a 16:00 hs'),
    puenteSaavedra: new Delegacion('Puente Saavedra', 'Av. Maip&uacute; 130', '5194 4327', 'delegacion.saavedra@vicentelopez.gov.ar', 'Lunes a Viernes de 08:30 a 16:00 hs'),

    munro: new Delegacion('Munro', 'Av. Velez Sarsfield 4839 / 41', '4762 1204 / 4756 6464', 'delegacion.munro@vicentelopez.gov.ar', 'Lunes a Viernes de 08:30 a 16:00 hs')
};

export const LINKS_INTERES = {
    sat: new LinkInteres('SAT - Sistema de Autogesti&oacute;n Tributaria', '', 'www.vicentelopez.gov.ar/SAT', 'https://www.vicentelopez.gov.ar/SAT'),
    afip: new LinkInteres('AFIP', 'Administraci&oacute;n Federal de Ingresos P&uacute;blicos', 'www.afip.gob.ar', 'http://www.afip.gob.ar'),
    miBarrio: new LinkInteres('Mi Barrio', '', 'https://www.vicentelopez.gov.ar/atencionalvecino', 'https://www.vicentelopez.gov.ar/atencionalvecino'),
    ceats: new LinkInteres('CeATS', 'Centro de Administraciones Tributarias Subnacionales', 'www.ceats.org', 'http://www.ceats.org'),
    forosVecinales: new LinkInteres('Foros Vecinales', '', 'https://forosvecinales.vicentelopez.gov.ar/', 'https://forosvecinales.vicentelopez.gov.ar/'),
    ciat: new LinkInteres('CIAT', 'Centro Interamericano de Administraciones Tributarias', 'www.ciat.org', 'http://www.ciat.org'),
    arba: new LinkInteres('ARBA', 'Agencia de Recaudaci&oacute;n de la Provincia de Buenos Aires', 'www.arba.gov.ar', 'http://www.arba.gov.ar')
};

export const MEDIOS_PAGO = {
    pagoOnline: new MediosPago('Pago Online', ['Pago Mis Cuentas', 'Interbanking', 'Link Pagos', 'Tarjeta de Cr&eacute;dito (VISA, Mastercard, American Express)']),
    bancos: new MediosPago('Bancos', ['Banco Ciudad', 'Credicoop', 'HSBC', 'Ita&uacute;', 'Provincia', 'Supervielle']),
    pagoPresencial: new MediosPago('Pago Presencial', ['Sede Municipal', 'Delegaciones Municipales', 'Bapro Pagos', 'Pago F&aacute;cil', 'Rapipago', 'Rapipago por tel&eacute;fono']),
    pagoTelefonico: new MediosPago('Pago Telef&oacute;nico', ['Rapipago por Tel&eacute;fono']),
};

export const DATA = {
    inicio: new Inicio(
        [
            // new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/01_SAT.png', 'https://www.vicentelopez.gov.ar/SAT/pages/pub/login.xhtml'),
            // new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/Banner_Plan_de_Facilidades_2020_01.png', URL_BASE_ARCHIVOS + '/instructivo/ABL/Instructivo_Plan_de_Facilidades_de_Pago_2020.pdf'),
            // new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/Plan_de_Facilidades_2020.png', URL_BASE_ARCHIVOS + '/instructivo/ABL/Instructivo_Plan_de_Facilidades_de_Pago_2020.pdf'),
            // new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/03_BE.png', '#exampleModal', 'modal'),
            // new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/03_Habilitacion_2020.png', URL_BASE_ARCHIVOS + '/normativas/resoluciones/Reso.36-20_bonif.dchos_ofi.libro_habilitac_y_quejas.pdf'),
            // new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/06_Cambio_de_Titularidad.png', 'https://www.vicentelopez.gov.ar/static-iipp/p/IIPP/guia/ABL/Guia_de_Tramite_ALCVP_y_SV_Cambio_de_Titularidad.pdf'),
            // new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/07_Sat_Movil.png', '#videoModal', 'modal'),
            // new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/08_VTU.png', 'https://www.vicentelopez.gov.ar/ingresos-publicos/novedades/detalle/N-20160801'),
            // new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/09_Cippec.png', 'https://www.vicentelopez.gov.ar/ingresos-publicos/novedades/detalle/N-20170821'),
            new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/Banner_Alivio_Fiscal_2020-01.jpg', URL_BASE_ARCHIVOS + '/instructivo/COBRANZAS/Instructivo_Plan_de_Facilidades_de_pago_2020_(2).pdf'),
            new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/cuidemonos.png', 'https://www.vicentelopez.gov.ar/SAT/pages/externos/formulario_consultas.xhtml'),
            new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/ish/Banner_Deudas_de_Actividad_Comercial-01.png', 'https://www.vicentelopez.gov.ar/SAT/'),
            new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/Paga_online_tu_plan_de_pago_en_cuotas.png', 'https://www.vicentelopez.gov.ar/SAT/'),
            new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/01_SAT.png', 'https://www.vicentelopez.gov.ar/SAT/'),
        ],
        new CarruselInicio(URL_BASE_ARCHIVOS + '/banners/inicio/CORONAVIRUS_1.jpg', ''),
        [
            new CategoriaTramite('INMOBILIARIO', 'u-fill-primary', [TRAMITES.abl]),
            new CategoriaTramite('TRANSPORTE', 'u-fill-secondary', [TRAMITES.automotor, TRAMITES.motovehiculos, TRAMITES.embarcaciones])
        ],
        [
            INFORMACION_DATOS.datosUtiles,
            INFORMACION_DATOS.preguntasFrecuentes,
            INFORMACION_DATOS.calendarioTributario,
            INFORMACION_DATOS.normativaTributaria,
            INFORMACION_DATOS.gobiernoAbierto,
            INFORMACION_DATOS.culturaFiscal
        ],
        NOVEDADES,
        [
            TRAMITES.regimenSimplificado,
            TRAMITES.inspeccionSegHig,
            TRAMITES.publicidad,
            TRAMITES.oep,
            TRAMITES.antenas,
            TRAMITES.mantenimientoVial,
            TRAMITES.ingresosBrutos,
            TRAMITES.serviciosVarios
        ],
        [
            TRAMITES.catastro,
            TRAMITES.derechosCementerio,
            TRAMITES.piletas,
            TRAMITES.coworking
        ]
    ),
    novedades: NOVEDADES,
    info: INFORMACION_DATOS,
    delegaciones: [
        
        DELEGACIONES.floridaOeste,
        DELEGACIONES.villaMartelli,
        DELEGACIONES.Carapachay,
        DELEGACIONES.villaAdelina,
        DELEGACIONES.floridaCentral,
        DELEGACIONES.puenteSaavedra,
        
        DELEGACIONES.munro
    ],
    infoLinks: [
        LINKS_INTERES.sat,
        LINKS_INTERES.afip,
        LINKS_INTERES.miBarrio,
        LINKS_INTERES.ceats,
        LINKS_INTERES.forosVecinales,
        LINKS_INTERES.ciat,
        LINKS_INTERES.arba,
    ],
    mediosPagos: [
        MEDIOS_PAGO.pagoOnline,
        MEDIOS_PAGO.bancos,
        MEDIOS_PAGO.pagoPresencial,
        MEDIOS_PAGO.pagoTelefonico
    ],
    guiasTramite: [
        GUIAS_TRAMITE.abl,
        GUIAS_TRAMITE.auto,
        GUIAS_TRAMITE.moto,
        GUIAS_TRAMITE.barco,
        GUIAS_TRAMITE.rs,
        GUIAS_TRAMITE.ish,
        GUIAS_TRAMITE.iibb,
        GUIAS_TRAMITE.catastro,
        GUIAS_TRAMITE.cementerio,
        GUIAS_TRAMITE.piletas
    ],
    preguntas: [
        CATEGORIA_PREGUNTAS.mediosLugarPago,
        CATEGORIA_PREGUNTAS.sat,
        CATEGORIA_PREGUNTAS.ppc,
        CATEGORIA_PREGUNTAS.beneficioDeudaContado,
        CATEGORIA_PREGUNTAS.cf,
        CATEGORIA_PREGUNTAS.abl,
        CATEGORIA_PREGUNTAS.auto,
        CATEGORIA_PREGUNTAS.moto,
        CATEGORIA_PREGUNTAS.barco,
        CATEGORIA_PREGUNTAS.rs,
        CATEGORIA_PREGUNTAS.seh,
        CATEGORIA_PREGUNTAS.pyp,
        CATEGORIA_PREGUNTAS.oep,
        CATEGORIA_PREGUNTAS.mv,
        CATEGORIA_PREGUNTAS.antenas,
        CATEGORIA_PREGUNTAS.iibb,
        CATEGORIA_PREGUNTAS.svm,
        CATEGORIA_PREGUNTAS.catastro,
        CATEGORIA_PREGUNTAS.cementerio,
        CATEGORIA_PREGUNTAS.piletas
    ],
    calendarios: [
        CALENDARIOS_ABL.abl,
        CALENDARIOS_RS_ISH.ish,
        CALENDARIOS_RS_ISH.rs,
        CALENDARIOS_COMUNES.auto,
        CALENDARIOS_COMUNES.moto,
        CALENDARIOS_TRIMESTRAL.pyp,
        CALENDARIOS_CEMENTERIO.cementerio,
        CALENDARIOS_TRIMESTRAL.oep,
        CALENDARIOS_TRIMESTRAL.antenas,
        CALENDARIOS_MV.mv,
        CALENDARIOS_TRIM_VENC.puestosflores,
        CALENDARIOS_TRIM_VENC.agentesinfo,
        CALENDARIOS_SVM.svm
    ],
    cuentos: {
        carousel: [
            URL_BASE_ARCHIVOS + '/cultura/cuentos-abuelos/01.png',
            URL_BASE_ARCHIVOS + '/cultura/cuentos-abuelos/02.png',
            URL_BASE_ARCHIVOS + '/cultura/cuentos-abuelos/03.png'
        ],
        imgInicial: URL_BASE_ARCHIVOS + '/cultura/cuentos-abuelos/Cuentos_por_Abuelos.png'
    },
    equipo: {
        organigrama: {
            diagrama: URL_BASE_ARCHIVOS + '/equipo/organigrama.png',
            equipos: [
                { nombre: 'Atenci&oacute;n Tributaria', img: URL_BASE_ARCHIVOS + '/equipo/Grupales/01_Atencion_Tributaria.png' },
                { nombre: 'Atenci&oacute;n Tributaria', img: URL_BASE_ARCHIVOS + '/equipo/Grupales/02_Atencion_Tributaria.png' },
                { nombre: 'Atenci&oacute;n Tributaria', img: URL_BASE_ARCHIVOS + '/equipo/Grupales/03_Atencion_Tributaria.png' },
                { nombre: 'Fiscalizaci&oacute;n Tributaria', img: URL_BASE_ARCHIVOS + '/equipo/Grupales/04_Fiscalizacion_Tributaria.png' },
                { nombre: 'Gesti&oacute;n de Cobranzas', img: URL_BASE_ARCHIVOS + '/equipo/Grupales/05_Gestion_de_Cobranzas.png' },
                { nombre: 'Administraci&oacute;n y Pol&iacute;tica Tributaria', img: URL_BASE_ARCHIVOS + '/equipo/Grupales/06_Administracion_y_Politica_Tributaria.png' },
                { nombre: 'Despacho Administrativo', img: URL_BASE_ARCHIVOS + '/equipo/Grupales/07_Despacho_Administrativo.png' },
                { nombre: 'Atenci&oacute;n Tributaria', img: URL_BASE_ARCHIVOS + '/equipo/Grupales/08_Atencion_Tributaria.png' }
            ]
        },
        notificadores: [
            new Empleado('Marcelo Alejandro Vidal', 'Supervisor Notificadores', 'Subdirecci&oacute;n de Despacho', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7757.png', '0', '0'),
            new Empleado('Yolanda Rufina Ju&aacute;rez', 'Notificadora', 'Subdirecci&oacute;n de Despacho', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7840.png', '0', '40px'),
            new Empleado('Gustavo Daniel Dold&aacute;n', 'Notificador', 'Subdirecci&oacute;n de Despacho', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7770.png', '0', '40px'),
        ],
        inspectores: [
            new Empleado('Daniela Barreiros', 'Supervisora T&eacute;cnica', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7633.png', '0', '0'),
            new Empleado('Lucio Mart&iacute;n Costa', 'Supervisor T&eacute;cnico / Contable', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7830.png', '0', '20px'),
            new Empleado('Maria Fernanda Yebrin', 'Inspectora', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7774.png', '0', '0'),
            new Empleado('Liliana Villamayor Nu&ntilde;ez', 'Inspectora', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7636.png', '0', '0'),
            new Empleado('Jorge Daniel Galera', 'Inspector', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7650.png', '', ''),
            new Empleado('Ver&oacute;nica Gimena Figueredo', 'Inspectora', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7629.png', '0', '10px'),
            new Empleado('Federico Platener', 'Inspector', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7644.png', '0', '0'),
            new Empleado('Omar Varela Dopazo', 'Inspector', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7732.png', '0', '0'),
            new Empleado('Maria Susana Carbini', 'Inspectora', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7673.png', '0', '0'),
            new Empleado('Daniel Mastrolorenzo', 'Inspector', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7740.png', '0', '0'),
            new Empleado('Gast&oacute;n Laudisi', 'Inspector', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7695.png', '0', '0'),
            new Empleado('Tom&aacute;s Ferraro', 'Inspector', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7684.png', '0', '0'),
            new Empleado('Romina Nieves Benegas', 'Inspectora', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7725.png', '0', '0'),
            new Empleado('Martina Victoria Soria', 'Inspectora', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/14751364.png', '0', '0'),
            new Empleado('Sebasti&aacute;n Andr&eacute;s Lorenzo', 'Inspector', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7929.png', '0', '0'),
            new Empleado('Daniel Fernando Pareja', 'Inspector', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7713.png', '0', '13px'),
            new Empleado('Silvana Alicia Castrini', 'Inspectora', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/_MG_7717.png', '0', '18px'),
            new Empleado('Nicol&aacute;s Romero Ant&oacute;n', 'Inspector', 'Subdirecci&oacute;n de Fiscalizaci&oacute;n Tributaria', URL_BASE_ARCHIVOS + '/equipo/Individuales/41915796.png', '0', '0')
        ]
    },
    normativas: [
        CATEGORIA_NORMATIVAS.ejercicio2021,
        CATEGORIA_NORMATIVAS.ejercicio2020,
        CATEGORIA_NORMATIVAS.ejercicio2019,
        CATEGORIA_NORMATIVAS.ejercicio2018,
        CATEGORIA_NORMATIVAS.ejercicio2017,
        CATEGORIA_NORMATIVAS.ejercicio2016,
        CATEGORIA_NORMATIVAS.ejercicio2015,
        CATEGORIA_NORMATIVAS.ejercicio2014,
        CATEGORIA_NORMATIVAS.ejercicio2013,
        CATEGORIA_NORMATIVAS.disposicionesNormativas,
        CATEGORIA_NORMATIVAS.agentesInformacion,
        CATEGORIA_NORMATIVAS.coworking
    ],
    indicesNormativa: [
        new IndiceNormativa('Alumbrado, Limpieza, Conservaci&oacute;n de la V&iacute;a P&uacute;blica y Servicios Varios (ALCVP y SV)', '1&deg;'),
        new IndiceNormativa('Contribuci&oacute;n a la Protecci&oacute;n Ciudadana (CPC)', '2&deg;'),
        new IndiceNormativa('Mantenimiento Vial Municipal', '1&deg; bis'),
        new IndiceNormativa('Servicios Especiales de Limpieza e Higiene', '3&deg;'),
        new IndiceNormativa('Inspecci&oacute;n por Seguridad e Higiene', '5&deg;'),
        new IndiceNormativa('Publicidad y Propaganda', '6&deg;'),
        new IndiceNormativa('Antenas', '11&deg;'),
        new IndiceNormativa('Ocupaci&oacute;n o Uso de Espacios P&uacute;blicos', '14&deg;'),
        new IndiceNormativa('Patentes de Rodados', '16&deg;'),
        new IndiceNormativa('Derechos de Cementerio', '17&deg;'),
        new IndiceNormativa('Servicios Varios (Motores)', '18&deg;'),
        new IndiceNormativa('R&eacute;gimen Simplificado', '20&deg;')
    ]
};

export const PAGINAS_IFRAME: string[] = [ 'calendario-mobile' , 'informacion-mobile', 'preguntasfrecuentes-mobile'];

export const NAVEGABLES: string[] = ['typ', 'idu', 'ddjj', 'ot'];
