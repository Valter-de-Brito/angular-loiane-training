import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css'],
})
export class DiretivasCustomizadasComponent implements OnInit {
  //cursos: string[] = ['Angular 2', 'React', 'ReactNative'];
  mostrarCursos: boolean = false;

  onMostarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

  constructor() {}

  ngOnInit(): void {}
}
