import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-loiane-training';
  valor: number = 5;
  deletarCiclo: boolean = false;

  mudarValor() {
    this.valor = this.valor * 2;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }
}
