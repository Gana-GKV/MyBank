import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  acno: any
  uname: any
  pass: any
  cpass: any

  register() {

    // var acno = this.acno --- avoid repeatedly using this.acno
    console.log(this.acno);
    console.log(this.uname);
    console.log(this.pass);
    console.log(this.cpass);
    
    
    
    

  }

}
