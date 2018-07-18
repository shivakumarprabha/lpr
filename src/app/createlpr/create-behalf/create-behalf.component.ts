import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-behalf',
  templateUrl: './create-behalf.component.html',
  styleUrls: ['./create-behalf.component.css']
})
export class CreateBehalfComponent implements OnInit {

  adminForm:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  this.adminForm = this.fb.group({
    options: ['', Validators.required],
    options1: ['', Validators.required],
    vertical: ['', Validators.required],
    bill: ['', Validators.required],
    users: ['', Validators.required],
    bandwidth: ['', Validators.required],
    frequency: ['', Validators.required],
    desktop: ['', Validators.required],
    software: ['', Validators.required],
    rdate: ['', Validators.required],
    connectivity: ['', Validators.required],
    lastmile: ['', Validators.required],
    // behalf: ['', Validators.required],
    bandwidthtype: ['', Validators.required],
    reqdate: ['', Validators.required],
    company: ['', Validators.required],
    development: ['', Validators.required],
    odc: ['', Validators.required],
    tower: ['', Validators.required],
    floor: ['', Validators.required],
    wing: ['', Validators.required],
    client: ['', Validators.required],
    city: ['', Validators.required],
    street: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    pincode: ['', Validators.required],
    email: ['', Validators.required],
    contact: ['', Validators.required],
    name: ['', Validators.required],
    designation: ['', Validators.required],
    email1: ['', Validators.required],
    contact1: ['', Validators.required],
    radio1: ['', Validators.required],
    radio2: ['', Validators.required],
    radio3: ['', Validators.required],
    radio4: ['', Validators.required],
    additionalinfo: [''],

  })
}
options = [
  {value: 'Option1', viewValue: 'Option1'},
  {value: 'Option2', viewValue: 'Option2'},
  {value: 'Option3', viewValue: 'Option3'},
];

bandwidth = [
  {value: 'Shared', viewValue: 'Shared'},
  {value: 'Dedicated', viewValue: 'Dedicated'},
];

mode=[
  {value: 'Option1', viewValue: 'Citrix'},
  {value: 'Option2', viewValue: 'Continuous - GUI App'},
  {value: 'Option3', viewValue: 'FTP'},
  {value: 'Option4', viewValue: 'HTTP'},
  {value: 'Option5', viewValue: 'Others'},
  {value: 'Option6', viewValue: 'RDP'},
  {value: 'Option7', viewValue: 'SAP'},
  {value: 'Option8', viewValue: 'Telecommuting'},
  {value: 'Option9', viewValue: 'Telnet'},
  {value: 'Option10', viewValue: 'Terminal Server Apps'},
  {value: 'Option11', viewValue: 'VDI'},
  
]
}
