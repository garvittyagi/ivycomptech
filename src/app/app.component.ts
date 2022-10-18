import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
    UserName: new FormControl(''),
    Password: new FormControl(''),
    ConfirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      PinCode: new FormControl(''),
    })
  });
  getValues(){
    alert(this.registrationForm.controls['address'].value.PinCode);
   console.log(this.registrationForm.value);
   console.log(this.registrationForm.controls['UserName'].value);
   console.log(this.registrationForm.controls['address'].value);
  }
}
