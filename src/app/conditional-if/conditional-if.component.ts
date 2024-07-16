import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-conditional-if',
  standalone: true,
  imports: [AsyncPipe,NgIf],
  templateUrl: './conditional-if.component.html',
  styleUrl: './conditional-if.component.css'
})
export class ConditionalIfComponent {

  users$:Observable<any[]>;
  a:number = 34;
  b:number = 67;

  constructor(){
    this.users$ = of([
      { name: 'Alice' },
      { name: 'Bob' },
      { name: 'Charlie' }
    ]);
  }

 


}
