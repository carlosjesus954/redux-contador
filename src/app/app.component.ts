import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementar, incrementar } from './contador/contador.actions';
import { AppState } from './interfaces/app-state';
// import { AppState } from './interfaces/app-state';
// interface AppState {
//   contador: number;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  contador!: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe((contador) => {
      // console.log(contador);
      this.contador = contador;
    });
  }

  public incrementar = () => {
    // this.contador = this.contador + 1;
    this.store.dispatch(incrementar());
  };
  public decrementar = () => {
    // this.contador = this.contador - 1;
    this.store.dispatch(decrementar());
  };
}
