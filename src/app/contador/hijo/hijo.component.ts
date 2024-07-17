import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit {
  contador!: number;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.select('contador').subscribe((contador) => {
      this.contador = contador;
    });
  }

  multiplicacion = () => {
    this.store.dispatch(
      actions.multiplicar({
        numero: 4,
      })
    );
  };
  dividir = () => {
    this.store.dispatch(
      actions.dividir({
        numero: 4,
      })
    );
  };
}
