import { Injectable } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {
  private cursos: string[] = ['Angular', 'C++', 'ReactNative'];

  constructor(private logService: LogService) {
    console.log('CursosService');
  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos!');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo curso: ${curso}`);
    this.cursos.push(curso);
  }
}
