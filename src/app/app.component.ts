import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'step1_project';
  name='Mohamed';
  age=25;
  handleClick(){
    console.log('Button clicked');
  }
}
