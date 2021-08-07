import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false

  constructor (private http: HttpClient) {}

  login (email: string, password: string) {
    return this.http
      .post<any>('https://ecommerce-apis.herokuapp.com/auth/login/ ', {
        email,
        password
      })
      .pipe(
        map(response => {
          console.log(response)
          localStorage.setItem(
            'isUserLoggedIn',
            response.access ? 'true' : 'false'
          )
          localStorage.setItem('token', JSON.stringify(response.access))
          return response
        })
      )
  }

  logout (): void {
    this.isUserLoggedIn = false
    localStorage.removeItem('isUserLoggedIn')
  }
}
