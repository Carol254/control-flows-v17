import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [NgClass,NgFor,NgIf],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  isEven:boolean = false;

  customers: Customer[] = [
    {
      id: 0,
      name: "John Doe",
      email: "john.doe@gmail.com",
      phoneNumber: "0712345678",
      address: "123 Msa,Kenya"
    },
    {
      id: 1,
      name: "Jane Slyvia",
      email: "jane.slyvia@gmail.com",
      phoneNumber: "0712345678",
      address: "456 Nrb,Kenya"
    },
    {
      id: 2,
      name: "Alice Johnson",
      email: "alice.johnson@gmail.com",
      phoneNumber: "0712345678",
      address: "789 Pokot,Kenya"
    },
    {
      id: 3,
      name: "Bob Brown",
      email: "bob.brown@gmail.com",
      phoneNumber: "0712345678",
      address: "101 Marsabit,Kenya"
    },
    {
      id: 4,
      name: "Charlie Davis",
      email: "charlie.davis@gmail.com",
      phoneNumber: "0712345657",
      address: "202 Bura,Kenya"
    },
    {
      id: 5,
      name: "Diana Evans",
      email: "diana.evans@gmail.com",
      phoneNumber: "0712345678",
      address: "303 Chavali,Kenya"
    },
    {
      id:6,
      name: "Evan Foster",
      email: "evan.foster@gmail.com",
      phoneNumber: "0712345678",
      address: "404 Sabaki,Kenya"
    },
    {
      id: 7,
      name: "Fiona Galo",
      email: "fiona.galo@gmail.com",
      phoneNumber: "0712345678",
      address: "505 Limuru,Kenya"
    },
    {
      id: 8,
      name: "George Aaron",
      email: "george.aaron@gmail.com",
      phoneNumber: "0712345678",
      address: "606 Webuye,Kenya"
    },
    {
      id: 9,
      name: "Hannah King",
      email: "hannah.king@gmail.com",
      phoneNumber: "0712345678",
      address: "707 Sabaki,Kenya."
    }
  ];
  
  // customers:Customer[] =[
  //   {
  //     id: ,
  //     name: "",
  //     email: "",
  //     phoneNumber: "0712345678",
  //     address: "123 Msa,Kenya"
  //   }
  // ];

  results = [...this.customers];

  constructor(){}

  searchCustomer(event: any){
    // console.log(event?.target.value);
    const query = event.target.value.toLowerCase();
    this.results = this.customers.filter((d)=> d.name.toLowerCase().indexOf(query) >-1);

    
  }
}



interface Customer{
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
 }
