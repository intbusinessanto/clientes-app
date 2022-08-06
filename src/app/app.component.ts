import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvendido a Angular';

  curso: string = "Curso de Spring 5 con Angular";
  profesor: string = 'Santo Rodrigo';
}
