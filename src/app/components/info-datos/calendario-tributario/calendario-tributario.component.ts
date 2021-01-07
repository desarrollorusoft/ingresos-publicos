import { Component, OnInit } from '@angular/core';
import { DATA } from '../../../../assets/data/modelo.data';

@Component({
  selector: 'app-calendario-tributario',
  templateUrl: './calendario-tributario.component.html',
  styleUrls: ['./calendario-tributario.component.scss']
})
export class CalendarioTributarioComponent implements OnInit {

  calendarios: any[] = DATA.calendarios;

  bajadaSV = `Inspecci&oacute;n de Medidores, Motores, Generadores a vapor o energ&iacute;a el&eacute;ctrica, calderas, m&aacute;quinas de entretenimientos<br>
              y/o equipos hidr&aacute;ulicos, electromec&aacute;nicos y/o similares y dem&aacute;s instalaciones`;

  constructor() { }

  ngOnInit() {
  }

}
