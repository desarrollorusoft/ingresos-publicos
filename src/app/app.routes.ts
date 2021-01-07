import { InformacionComponent } from './mobile/informacion/informacion.component';
import { CalendarioTributarioComponent } from './components/info-datos/calendario-tributario/calendario-tributario.component';
import { NOVEDADES_ROUTES } from './components/novedades-container/novedades.routes';
import { NovedadesContainerComponent } from './components/novedades-container/novedades-container.component';
import { InfoDatosComponent } from './components/info-datos/info-datos.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { TypComponent } from './components/typ/typ.component';
import { TurnosComponent } from './components/turnos/turnos.component';
import { PreguntasFrecuentesComponent } from './components/info-datos/preguntas-frecuentes/preguntas-frecuentes.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent, data:{state:'inicio'} },
    { path: 'typ', component: InicioComponent, data:{state:'inicio'} },
    { path: 'idu', component: InicioComponent, data:{state:'inicio'} },
    { path: 'ddjj', component: InicioComponent, data:{state:'inicio'} },
    { path: 'ot', component: InicioComponent, data:{state:'inicio'} },
    { path: 'tramite/:codigo', component: TypComponent, data:{state:'tramite'} },
    { path: 'tramite/:codigo/:mp', component: TypComponent, data:{state:'tramite'} },
    { path: 'info', component: InfoDatosComponent,data:{state:'informacion'} },
    { path: 'info/:codigo', component: InfoDatosComponent,data:{state:'infoDatos'} },
    { path: 'info/:codigo/:muestro', component: InfoDatosComponent,data:{state:'infoDatos'} },
    { path: 'novedades', component: NovedadesContainerComponent, children:NOVEDADES_ROUTES,data:{state:'novedades'} },
    { path: 'calendario-mobile',component:CalendarioTributarioComponent},
    { path: 'informacion-mobile',component:InformacionComponent},
    { path: 'preguntasfrecuentes-mobile',component:PreguntasFrecuentesComponent},
    { path: 'inicio/inicio/', redirectTo: 'inicio' },
    { path: 'turnos', component: TurnosComponent, data:{state:'turnos'} },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
