import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import * as data from '../employeeData.json'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  localItem : any;
  employee : Employee = new Employee();
  employees : Employee[];
  constructor(private router : Router) {
    this.localItem = localStorage.getItem("employeesData");
      if(this.localItem == null){
        this.employees = [];
      }
      else{
        this.employees = JSON.parse(this.localItem);
      }
  }

  ngOnInit(): void {
  }

  addEmployee(emp : Employee){
    console.log(this.employees);
    console.log(emp);
    this.employees.push(emp);
    localStorage.setItem('employeesData',JSON.stringify(this.employees));
    this.router.navigate(['employees']);
    console.log(this.employees);
  }

}
