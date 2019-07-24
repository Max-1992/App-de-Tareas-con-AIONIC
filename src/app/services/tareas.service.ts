import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.models';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  public listas:Lista[];

  constructor() {  
    this.listas = [];
    const lista1 = new Lista('Recolectar pidras del infinito');
    const lista2 = new Lista('Heroes a desaparecer');

    this.listas.push(lista1, lista2);
    
  }
}
