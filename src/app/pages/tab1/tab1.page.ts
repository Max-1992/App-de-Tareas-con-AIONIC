import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public tareasService:TareasService,
               private router:Router,
               private alertCter: AlertController ) {      
   }

  public async agregarLista(){
    
    const alert = await this.alertCter.create({
      header: 'New List',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Name List',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar')
          }
        },
        {
          text: 'Create',
          handler: ( data ) => {
            console.log(data)
            if( data.titulo.length === 0 ){
              return;
            }

            //Ejecutar Método para Crear lista
            const listaId = this.tareasService.crearLista(data.titulo);
            
            //Redirección a la pagina de agregar Items en la lista
            this.router.navigateByUrl(`tabs/tab1/agregar/${listaId}`);

          }
        }
      ]
    });

    alert.present();
   }
  
 
}
