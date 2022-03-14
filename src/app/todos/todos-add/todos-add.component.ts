import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../store/actions/todo.actions';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/models/state.interface';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.css']
})
export class TodosAddComponent implements OnInit {

  txtInput: FormControl

  constructor( private store : Store<AppState>) { 
    this.txtInput = new FormControl('', Validators.required)

  }

  ngOnInit(): void {}

  addTarea(){

    if(this.txtInput.invalid){
      return;
    }
    this.store.dispatch(actions.crear({ texto: this.txtInput.value }));
    
    this.txtInput.reset();

    console.log(this.txtInput.value)
    console.log(this.txtInput.valid)
  }

}
