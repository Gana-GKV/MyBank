import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  data = "Hellooo Happy Banking....!!!"
  pdata = "Enter Account Number"

  constructor(private rout: Router, private ds: DataService) {

  }
  ngOnInit(): void {
    var a=this.ds.sdata
    console.log(a);
    this.ds.smethod()

  }
  login(a: any) {
    // console.log(a.value);

    // alert("Login Clicked")
    this.rout.navigateByUrl('home')
  }
  acnoChange(event: any) {
    console.log(event.target.value);

  }
}
