import { Component, OnInit } from '@angular/core'

import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm
} from '@angular/forms'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'
import { ErrorStateMatcher } from '@angular/material/core'

export class LoginStateMatcher implements ErrorStateMatcher {
  isErrorState (
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    )
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string
  password: string
  formData: FormGroup

  constructor (private authService: AuthService, private router: Router) {}

  ngOnInit () {
    this.formData = new FormGroup({
      email: new FormControl('admin@gmail.com'),
      password: new FormControl('admin')
    })
  }
  matcher = new LoginStateMatcher()
  onClickSubmit (data: any) {
    this.email = data.email
    this.password = data.password

    console.log('Login page: ' + this.email)
    console.log('Login page: ' + this.password)

    this.authService.login(this.email, this.password).subscribe(data => {
      console.log('Login Success: ' + data)

      if (data) this.router.navigate(['/home'])
    })
  }
}
