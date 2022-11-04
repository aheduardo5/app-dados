import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  textAltImg = '';
  dadoIzquierda: string = '../assets/img/dice1.png';
  dadoDerecha: string = '../assets/img/dice1.png';
  dado1=1;
  dado2=2;
  tirarDados(): void {
    this.dado1 = Math.round(Math.random() * 5) + 1;
    this.dado2 = Math.round(Math.random() * 5) + 1;
    this.dadoIzquierda = `../assets/img/dice${this.dado1}.png`;
    this.dadoDerecha = `../assets/img/dice${this.dado2}.png`;
  }
}
