
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DaysListComponent } from './days-list/days-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomerListComponent,DaysListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'google-io-pwani-2024';


  
}


