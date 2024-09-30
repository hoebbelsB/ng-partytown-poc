import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <button (click)="ptTest()">Send to partytown</button>
  `,
})
export class AppComponent {

  constructor() {
    // @ts-ignore
    window['dataLayer'] = window['dataLayer'] ?? [];
  }
  ptTest() {
    // @ts-ignore
    window['dataLayer'].push({ event: 'ptTest'});
  }
}
