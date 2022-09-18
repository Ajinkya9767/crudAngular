import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id : Number;
  employee : Employee;
  localItem : any;
  employees : Employee[];
  constructor(private route : ActivatedRoute) { 
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
    for(let i=0;i<this.employees.length;i++){
      if(this.employees[i]['id'] == this.id){
        this.employee = this.employees[i];
      }
    }
  }

}
