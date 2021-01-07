import { Component, OnInit, Input } from '@angular/core';
import { Acordeon, AcordeonCalendarioARBA } from '../../../../../data/data.model';

@Component({
  selector: 'app-calendario-arba',
  templateUrl: './calendario-arba.component.html',
  styleUrls: ['./calendario-arba.component.scss']
})
export class CalendarioArbaComponent implements OnInit {

  @Input() acordeon: Acordeon;
  miAcodeon: AcordeonCalendarioARBA;

  constructor() { }

  ngOnInit() {
    if (this.acordeon instanceof AcordeonCalendarioARBA)
      this.miAcodeon = this.acordeon;
  }
}
