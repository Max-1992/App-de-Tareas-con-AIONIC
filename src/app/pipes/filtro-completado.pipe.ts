import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.models';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform( listas:Lista[], completada: boolean = true ): Lista[] {
     return listas.filter( listaData => listaData.terminada === completada );
  }

}