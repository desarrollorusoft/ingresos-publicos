import { Component, OnInit, Input } from '@angular/core';
import { Acordeon, AcordeonNormativa } from '../../../../../data/data.model';

@Component({
  selector: 'app-normativa-comun',
  templateUrl: './normativa-comun.component.html',
  styleUrls: ['./normativa-comun.component.scss']
})
export class NormativaComunComponent implements OnInit {

  @Input() acordeon: Acordeon;
  miAcordeon: AcordeonNormativa;

  constructor() { }

  ngOnInit() {
    if (this.acordeon instanceof AcordeonNormativa)
      this.miAcordeon = this.acordeon;
  }
}
