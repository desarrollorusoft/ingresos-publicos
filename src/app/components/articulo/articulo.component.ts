import { Component, OnInit, Input } from '@angular/core';
import { Novedad } from '../../../data/data.model';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  @Input()
  novedad: Novedad;

  constructor() { }

  ngOnInit() {
  }

}
