import { Component, OnInit, Input } from '@angular/core';
import { Acordeon, AcordeonNormativaARBA } from '../../../../../data/data.model';

@Component({
  selector: 'app-normativa-arba',
  templateUrl: './normativa-arba.component.html',
  styleUrls: ['./normativa-arba.component.scss']
})
export class NormativaArbaComponent implements OnInit {

  @Input() acordeon: Acordeon;
  miAcordeon: AcordeonNormativaARBA;

  constructor() { }

  ngOnInit() {
    if (this.acordeon instanceof AcordeonNormativaARBA)
      this.miAcordeon = this.acordeon;
  }
}