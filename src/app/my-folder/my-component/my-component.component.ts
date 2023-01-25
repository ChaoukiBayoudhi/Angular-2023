import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
    <p> Hello {{ name  }}</p>
    <p>Age : {{age}}</p>
    <button (click)="onClick.emit()">Click me</button>`,
  styles: [`p {color:blue;}`]
})
export class MyComponentComponent {
  @Input() name!:string;
  @Input() age!:number;
  @Output() onClick = new EventEmitter();

  changeName(newName: string){
    this.name = newName;
  }
}
