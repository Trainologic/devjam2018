import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

const factor = (num: number) => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return factor(num - 1) + factor(num - 2);
};


export function ValidateEmail(control: AbstractControl) {
  console.log('validate email')
  factor(38);
  return { validUrl: true };
}

@Component({
  selector: 'app-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      email: new FormControl('', {
        validators : [Validators.required , ValidateEmail]
      }),
      password: new FormControl('', [Validators.required])
    });

  }


  ngOnInit() {
  }

}
