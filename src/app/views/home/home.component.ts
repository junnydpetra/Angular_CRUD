import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  idade: number;
  job: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Junnyldo Costa', idade: 28, job: 'Engenheiro de Software'},
  {position: 2, name: 'Hélio Santos', idade: 40, job: 'Gerente de Projeto'},
  {position: 3, name: 'Livia Andreia Mendes', idade: 26, job: 'Publicitária'},
  {position: 4, name: 'Belírio Neto', idade: 25, job: 'Programador'},
  {position: 5, name: 'Eduardo Santos', idade: 28, job: 'Web Designer'},
  {position: 6, name: 'Carbonara Matheus', idade: 48, job: 'Gerente Geral'},
  {position: 7, name: 'Nilton André', idade: 27, job: 'Programador'},
  {position: 8, name: 'Olívia Almeida', idade: 25, job: 'Programadora'},
  {position: 9, name: 'Janice Matias', idade: 42, job: 'Diretora Geral'},
  {position: 10, name: 'André Silva', idade: 20, job: 'Programador'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'idade', 'job', 'options'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
