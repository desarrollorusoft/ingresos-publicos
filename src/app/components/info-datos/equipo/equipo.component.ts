import { Component, OnInit } from '@angular/core';
import { DATA } from '../../../../assets/data/modelo.data';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  equipo: any = DATA.equipo;
  isDesktop = this.deviceService.isDesktop();

  constructor( private deviceService: DeviceDetectorService ) { }

  ngOnInit() {
  }

}
