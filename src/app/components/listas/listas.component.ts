import { Component, OnInit, Input } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.models';



@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor( public tareasService: TareasService,
               private router:Router ) { }

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

  ngOnInit() {}

}
