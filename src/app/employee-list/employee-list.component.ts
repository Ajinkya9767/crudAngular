import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import * as data from '../employeeData.json';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  id : Number;
  index : Number;
  localItem : any;
  employees : Employee[];
  employee : Employee = new Employee();
  constructor(private router : Router,
    private route:ActivatedRoute) {
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

  updateEmployee(id : Number){
      this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(employee : Employee){
    console.log(employee.id);
      const index = this.employees.indexOf(employee);
      this.employees.splice(index, 1);
      localStorage.setItem('employeesData',JSON.stringify(this.employees));
      this.router.navigate(['employees']);
      console.log("Employee with id "+employee.id+" has been deleted!");
    }
    
    viewEmployeeDetails(id:Number){
      this.router.navigate(['employee-details',id]);
    }
    
}
