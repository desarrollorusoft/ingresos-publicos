import { Component, OnInit, Input } from '@angular/core';
import { Acordeon, AcordeonInstructivos } from '../../../../../data/data.model';

@Component({
  selector: 'app-instructivos',
  templateUrl: './instructivos.component.html',
  styleUrls: ['./instructivos.component.scss']
})
export class InstructivosComponent implements OnInit {

  @Input() acordeon: Acordeon;
  miAcordeon: AcordeonInstructivos;

  constructor() { }

  ngOnInit() {
    if (this.acordeon instanceof AcordeonInstructivos)
      this.miAcordeon = this.acordeon;
  }
}