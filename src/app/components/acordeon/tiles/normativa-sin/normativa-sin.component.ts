import { Component, OnInit, Input } from '@angular/core';
import { Acordeon, AcordeonSin} from '../../../../../data/data.model';

@Component({
  selector: 'app-normativa-sin',
  templateUrl: './normativa-sin.component.html',
  styleUrls: ['./normativa-sin.component.scss']
})
export class NormativaSinComponent implements OnInit {

  @Input() acordeon: Acordeon;
  miAcordeon: AcordeonSin;

  constructor() { }

  ngOnInit() {
    if (this.acordeon instanceof AcordeonSin)
      this.miAcordeon = this.acordeon;
  }
}
