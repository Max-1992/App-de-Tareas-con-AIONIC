import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.models';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  public listas:Lista[];

  constructor() {  
    this.listas = [];
    this.cargarStorage();
  }

  public crearLista( titulo:string ){
    const lista = new Lista( titulo )
    this.listas.push(lista);
    this.guardarStorage();
    return lista.id;
  }

  public guardarStorage( ){
      localStorage.setItem( 'data', JSON.stringify(this.listas));
  }

  public cargarStorage(){
      if( JSON.parse(localStorage.getItem('data')) ){
        this.listas = JSON.parse(localStorage.getItem('data'));
    }
   
  }

  public obtenerLista( id: string | number ) {
       id = Number(id);
       return this.listas.find( listaData => listaData.id === id )
  }

  borrarLista( lista:Lista ){
    this.listas = this.listas.filter( listaData => listaData.id !== lista.id );

    this.guardarStorage();
}

}
