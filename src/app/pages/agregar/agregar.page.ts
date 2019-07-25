import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Lista } from '../../models/lista.models';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from '../../models/lista-item.models';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {

  public lista:Lista;
  public nombreItem:string = '';

  constructor( public tareasService:TareasService,
               private activateRoute: ActivatedRoute ) {
      
          const listaId = this.activateRoute.snapshot.paramMap.get('id');
          this.lista = this.tareasService.obtenerLista(listaId);
         

          console.log(this.lista);
      };

      public agregarItem(){
      
          if ( this.nombreItem.length === 0 ){
              return;
          }
          
          const item:ListaItem = new ListaItem(this.nombreItem);
          this.lista.items.push(item);

          this.nombreItem = '';
          this.tareasService.guardarStorage();

      }

      
   }


