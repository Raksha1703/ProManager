import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.scss']
})
export class AddfacultyComponent implements OnInit {

  public facultyForm: FormGroup;
  constructor(private fb:FormBuilder) { 
      this.createData();
  }
  
  ngOnInit(): void {
  }
  
  createData(){
    this.facultyForm = this.fb.group({
      fname: [null],
      mname: [null],
      lname: [null],
      address: [null],    
      gender: [null],
      phonenumber: [null],
      city:[null],
      state: [null],
      country: [null],  
      clgname:[null],
      qualification:[null],
      technology:[null],
      email:[null],
      status:[null],
      bod:[null],
      avtar:[null],
      cover:[null],
      pid:5
    });
  }

  save(){
    //this.facultyForm.pid=5;
    console.log('Form Value', this.facultyForm.value);

    //console.log("hi");
  }
}
