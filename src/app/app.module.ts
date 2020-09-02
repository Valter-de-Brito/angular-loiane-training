import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

import { CursosModule } from './cursos/cursos.module';
import { MeuFormModule } from './meu-form/meu-form.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    DataBindingComponent,
  ],
  imports: [BrowserModule, CursosModule, MeuFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
