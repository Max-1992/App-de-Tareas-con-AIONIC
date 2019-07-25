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
      
    public cambioCheck( item:ListaItem ){
        console.log(item);

        const pendientes = this.lista.items.filter( itemData =>  itemData.completado === false ).length;

        if (  pendientes === 0 ){
                this.lista.terminadaEn = new Date();
                this.lista.terminada = true;
        } else {
                this.lista.terminadaEn = null;
                this.lista.terminada = false;
        }
      
        this.tareasService.guardarStorage();
    }

    public borrar( i:number ){
        this.lista.items.splice( i, 1 );
        this.tareasService.guardarStorage();
    }
      
   }


