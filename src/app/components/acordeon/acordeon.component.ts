import { Component, OnInit, Input } from '@angular/core';
import { Tramite, TIPOS_ACORDEONES } from '../../../data/data.model';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.scss']
})
export class AcordeonComponent implements OnInit {

  @Input() miTramite: Tramite;
  
  constructor() {}
  
  ngOnInit() {}
}
