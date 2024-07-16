import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-days-list',
  standalone: true,
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './days-list.component.html',
  styleUrl: './days-list.component.css'
})
export class DaysListComponent {

  day = new Date().getDay();

}
