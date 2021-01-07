import { NovedadesComponent } from './../novedades/novedades.component';
import { NovedadComponent } from './../novedad/novedad.component';
export const NOVEDADES_ROUTES = 
[{ path: 'lista', component: NovedadesComponent },
 { path: 'detalle/:codigo', component: NovedadComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'lista' },
 { path: '', pathMatch: 'full', redirectTo: 'lista' }]