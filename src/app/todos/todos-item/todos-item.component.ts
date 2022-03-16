import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/store/actions/todo.actions';
import { AppState } from 'src/app/store/models/state.interface';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css'],
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('tarea') textTarea: ElementRef;

  checkComplete: FormControl;
  textInput: FormControl;
  edit: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.todo.completado = true;
    this.checkComplete = new FormControl(this.todo.completado);
    this.textInput = new FormControl(this.todo.texto, Validators.required);

    this.checkComplete.valueChanges.subscribe((valor) => {
      console.log(this.todo.texto);
      this.store.dispatch(actions.stateTodo({ id: this.todo.id }));
    });
  }

  editTodo() {
    this.edit = true;
    this.textInput.setValue(this.todo.texto);

    setTimeout(() => {
      this.textTarea.nativeElement.select();
    }, 1);
  }

  updateTodo() {
    this.edit = false;

    if (this.textInput.invalid) return;
    if (this.textInput.value === this.todo.texto) return;

    this.store.dispatch(
      actions.editar({ id: this.todo.id, texto: this.textInput.value })
    );
  }

  deleteTodo(){
    this.store.dispatch( actions.borrar({ id: this.todo.id }));
    console.log(this.todo)
  }
}
