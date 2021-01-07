import { Component, OnInit, Input } from '@angular/core';
import { Acordeon, AcordeonLinkInteres } from '../../../../../data/data.model';

@Component({
  selector: 'app-link-interes',
  templateUrl: './link-interes.component.html',
  styleUrls: ['./link-interes.component.scss']
})
export class LinkInteresComponent implements OnInit {

  @Input() acordeon: Acordeon;
  miAcordeon: AcordeonLinkInteres;

  constructor() { }

  ngOnInit() {
    if (this.acordeon instanceof AcordeonLinkInteres)
      this.miAcordeon = this.acordeon;
  }
}