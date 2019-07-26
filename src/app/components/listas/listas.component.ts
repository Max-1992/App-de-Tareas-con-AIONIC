import { Component, Input, ViewChild } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.models';
import { AlertController, IonList } from '@ionic/angular';



@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent{

  @ViewChild( IonList ) lista: IonList;
  @Input() terminada = true;

  constructor( public tareasService: TareasService,
               private router:Router,
               private alertCter:AlertController ) { }

  public listaSeleccionada( id: string | number) {
    const ID = Number(id)

    if( this.terminada ){
        this.router.navigateByUrl(`tabs/tab2/agregar/${ID}`);
    } else {
        this.router.navigateByUrl(`tabs/tab1/agregar/${ID}`);
    }
     
  }

  borrarLista( lista:Lista ){
    this.tareasService.borrarLista( lista );
}

async editarLista( lista:Lista ){

  const alert = await this.alertCter.create({
    header: 'Edit Name',
    inputs: [
      {
        name: 'titulo',
        type: 'text',
        value: lista.titulo,
        
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          this.lista.closeSlidingItems()
        }
      },
      {
        text: 'Update',
        handler: ( data ) => {
          console.log(data)
          if( data.titulo.length === 0 ){
            return;
          }
          
          lista.titulo = data.titulo
          this.tareasService.guardarStorage();
          this.lista.closeSlidingItems()

        }
      }
      ]

    })
    alert.present();
  }

  }