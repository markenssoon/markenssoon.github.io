import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})

export class CalculatorComponent {
  title: string = 'my-calculator';
  toShow: string = ''
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  writeToInput(value: number | string) {
    this.toShow += value;
  }

  clear() {
    this.toShow = '';
  }

  back() {
    if (this.toShow.length > 0) {
      this.toShow = this.toShow.slice(0, -1);
    }
  }

  calcValue(solve: any) {
    if (solve.charAt(0) == '0') {
      solve = solve.slice(1,)
    }
    this.toShow = String(eval(solve));
  }

  sin() {
    this.toShow += 'sin(';
  }

  cos() {
    this.toShow = Math.cos(parseFloat(this.toShow)).toString();
  }

  tan() {
    this.toShow = Math.tan(parseFloat(this.toShow)).toString();
  }

  sqrt() {
    this.toShow = Math.sqrt(parseFloat(this.toShow)).toString();
  }

  log() {
    this.toShow = Math.log(parseFloat(this.toShow)).toString();
  }

  pi() {
    this.toShow += 3.14159265359.toString();
  }

  fact() {
    var i, num, f;
    f = 1
    num = parseFloat(this.toShow);
    for (i = 1; i <= num; i++) {
      f = f * i;
    }

    i = i - 1;

    this.toShow = f.toString();
  }
}