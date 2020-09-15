import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-elvis',
  templateUrl: './operator-elvis.component.html',
  styleUrls: ['./operator-elvis.component.css'],
})
export class OperatorElvisComponent implements OnInit {
  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: null,
    //responsavel: {nome: 'Valter'},
  };

  constructor() {}

  ngOnInit(): void {}
}
