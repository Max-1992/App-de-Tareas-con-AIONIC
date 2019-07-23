import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.models';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  public listas:Lista[];

  constructor() { 
    this.listas = [];
    console.log('Servicio Inicializado');
  }
}
