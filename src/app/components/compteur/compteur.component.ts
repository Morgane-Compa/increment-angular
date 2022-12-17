import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent {
  number: number = 0;

  increment() {
    // this.number = this.number + 1;
    this.number++;
  }

  decrement() {
    if (this.number === 0) {
      this.number--;
    }
  }

}
