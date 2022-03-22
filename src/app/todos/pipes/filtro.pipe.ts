import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from 'src/app/store/actions/filter.action';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case 'completados':
        return todos.filter((todo) => todo.completado);

      case 'pendientes':
        return todos.filter((todo) => !todo.completado);
        

      default:
        return todos;
    }
  }

}
