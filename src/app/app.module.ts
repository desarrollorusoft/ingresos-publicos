import { ArticuloComponent } from './components/articulo/articulo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TypComponent } from './components/typ/typ.component';
import { AcordeonComponent } from './components/acordeon/acordeon.component';
import { APP_ROUTING } from './app.routes';
import { TablaGuiaFormularioComponent } from './components/acordeon/tiles/tabla-guia-formulario/tabla-guia-formulario.component';
import { CalendarioComunComponent } from './components/acordeon/tiles/calendario-comun/calendario-comun.component';
import { CalendarioRsIshComponent } from './components/acordeon/tiles/calendario-rs-ish/calendario-rs-ish.component';
import { CalendarioMvComponent } from './components/acordeon/tiles/calendario-mv/calendario-mv.component';
import { CalendarioArbaComponent } from './components/acordeon/tiles/calendario-arba/calendario-arba.component';
import { CalendarioTrimestralComponent } from './components/acordeon/tiles/calendario-trimestral/calendario-trimestral.component';
import { CalendarioTrimestralOepAntenasComponent } from './components/acordeon/tiles/calendario-trimestral-oep-antenas/calendario-trimestral-oep-antenas.component';
import { CalendarioServiciosComponent } from './components/acordeon/tiles/calendario-servicios/calendario-servicios.component';
import { CalendarioCementerioComponent } from './components/acordeon/tiles/calendario-cementerio/calendario-cementerio.component';
import { NormativaComunComponent } from './components/acordeon/tiles/normativa-comun/normativa-comun.component';
import { NormativaArbaComponent } from './components/acordeon/tiles/normativa-arba/normativa-arba.component';
import { InstructivosComponent } from './components/acordeon/tiles/instructivos/instructivos.component';
import { LinkInteresComponent } from './components/acordeon/tiles/link-interes/link-interes.component';
import { FuncionesComponent } from './components/acordeon/tiles/funciones/funciones.component';
import { GuiaTramitesMixtasComponent } from './components/acordeon/tiles/guia-tramites-mixtas/guia-tramites-mixtas.component';
import { GuiaTramitesComunComponent } from './components/acordeon/tiles/guia-tramites-comun/guia-tramites-comun.component';
import { InfoDatosComponent } from './components/info-datos/info-datos.component';
import { PreguntasFrecuentesComponent } from './components/info-datos/preguntas-frecuentes/preguntas-frecuentes.component';
import { CalendarioTributarioComponent } from './components/info-datos/calendario-tributario/calendario-tributario.component';
import { NormativaTributariaComponent } from './components/info-datos/normativa-tributaria/normativa-tributaria.component';
import { GobiernoAbiertoComponent } from './components/info-datos/gobierno-abierto/gobierno-abierto.component';
import { CulturaFiscalComponent } from './components/info-datos/cultura-fiscal/cultura-fiscal.component';
import { DatosUtilesComponent } from './components/info-datos/datos-utiles/datos-utiles.component';
import { BotonesInfoComponent } from './components/info-datos/botones-info/botones-info.component';
import { NavPathComponent } from './components/nav-path/nav-path.component';
import { InformacionUtilComponent } from './components/info-datos/informacion-util/informacion-util.component';
import { GuiasTramiteComponent } from './components/info-datos/guias-tramite/guias-tramite.component';
import { CuentosAbuelosComponent } from './components/info-datos/cuentos-abuelos/cuentos-abuelos.component';
import { CoherenciaFiscalComponent } from './components/info-datos/coherencia-fiscal/coherencia-fiscal.component';
import { NosotrosComponent } from './components/info-datos/nosotros/nosotros.component';
import { LinksGobiernoAbiertoComponent } from './components/info-datos/links-gobierno-abierto/links-gobierno-abierto.component';
import { TransparenciaActivaComponent } from './components/info-datos/transparencia-activa/transparencia-activa.component';
import { VisionComponent } from './components/info-datos/vision/vision.component';
import { EquipoComponent } from './components/info-datos/equipo/equipo.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { NovedadesContainerComponent } from './components/novedades-container/novedades-container.component';
import { NovedadComponent } from './components/novedad/novedad.component';
import { CalendarioAblComponent } from './components/acordeon/tiles/calendario-abl/calendario-abl.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { StyleSeguroPipe } from './pipes/style-seguro.pipe';
import { MediosPagoComponent } from './components/medios-pago/medios-pago.component';
import { NormativaSinComponent } from './components/acordeon/tiles/normativa-sin/normativa-sin.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SinNormativaComponent } from './components/acordeon/tiles/sin-normativa/sin-normativa.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { DelegacionesComponent } from './components/delegaciones/delegaciones.component';
import { InformacionComponent } from './mobile/informacion/informacion.component';
import { CalendarioTrimestralVencimientoComponent } from './components/acordeon/tiles/calendario-trimestral-vencimiento/calendario-trimestral-vencimiento.component';
import { CalendarioCuatrimestralVencimientoComponent } from './components/acordeon/tiles/calendario-cuatrimestral-vencimiento/calendario-cuatrimestral-vencimiento.component';
import { TurnosComponent } from './components/turnos/turnos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    TypComponent,
    AcordeonComponent,
    TablaGuiaFormularioComponent,
    CalendarioComunComponent,
    CalendarioRsIshComponent,
    CalendarioMvComponent,
    CalendarioArbaComponent,
    CalendarioTrimestralComponent,
    CalendarioTrimestralOepAntenasComponent,
    CalendarioServiciosComponent,
    CalendarioCementerioComponent,
    NormativaComunComponent,
    NormativaArbaComponent,
    InstructivosComponent,
    LinkInteresComponent,
    FuncionesComponent,
    GuiaTramitesMixtasComponent,
    GuiaTramitesComunComponent,
    InfoDatosComponent,
    DatosUtilesComponent,
    PreguntasFrecuentesComponent,
    CalendarioTributarioComponent,
    NormativaTributariaComponent,
    GobiernoAbiertoComponent,
    CulturaFiscalComponent,
    BotonesInfoComponent,
    NavPathComponent,
    InformacionUtilComponent,
    GuiasTramiteComponent,
    CuentosAbuelosComponent,
    CoherenciaFiscalComponent,
    NosotrosComponent,
    LinksGobiernoAbiertoComponent,
    TransparenciaActivaComponent,
    ArticuloComponent,
    VisionComponent,
    EquipoComponent,
    NovedadesComponent,
    NovedadesContainerComponent,
    NovedadComponent,
    CalendarioAblComponent,
    FechaPipe,
    DomSeguroPipe,
    StyleSeguroPipe,
    MediosPagoComponent,
    NormativaSinComponent,
    CapitalizePipe,
    SinNormativaComponent,
    DelegacionesComponent,
    InformacionComponent,
    CalendarioTrimestralVencimientoComponent,
    CalendarioCuatrimestralVencimientoComponent,
    TurnosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    FormsModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
