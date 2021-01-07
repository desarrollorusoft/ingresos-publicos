import { CategoriaNormativa, IndiceNormativa } from './../../../../data/data.model';
import { DATA } from './../../../../assets/data/modelo.data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normativa-tributaria',
  templateUrl: './normativa-tributaria.component.html',
  styleUrls: ['./normativa-tributaria.component.scss']
})
export class NormativaTributariaComponent implements OnInit {

  categorias: CategoriaNormativa[] = DATA.normativas;
  indices: IndiceNormativa[] = DATA.indicesNormativa;

  constructor() { }

  ngOnInit() {
  }

}
