import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import * as data from '../employeeData.json'

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id : Number
  employee : Employee;
  employees : Employee[];
  localItem: any;
  constructor(private route:ActivatedRoute,
    private router:Router) {
      this.localItem = localStorage.getItem("employeesData");
      if(this.localItem == null){
        this.employees = [];
      }
      else{
        this.employees = JSON.parse(this.localItem);
      }
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    for(let i=0;i<this.employees.length;i++){
      if(this.employees[i]['id'] == this.id){
        this.employee = this.employees[i];
      }
    }
    console.log(this.employee);
  }

  updateEmployee(employee: Employee){
    for(let i=0;i<this.employees.length;i++){
      if(this.employees[i]['id'] == this.id){
        this.employees[i].id = employee.id;
        this.employees[i].name = employee.name;
        this.employees[i].age = employee.age;
        this.employees[i].city = employee.city;
        this.employees[i].email = employee.email;
      }
    }
      console.log(this.employees);
      localStorage.setItem('employeesData',JSON.stringify(this.employees));
      this.router.navigate(['employees']);
  }
}
