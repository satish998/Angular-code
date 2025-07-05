import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'anular19-app';

  printValue(val: string) {
    console.log('Input value:', val);
  }

  show(value: string) {
  console.log('Value:', value);
}
}
