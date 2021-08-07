import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isUserLoggedIn = false

  constructor (private authService: AuthService, private router: Router) {}

  ngOnInit () {
    let storeData = localStorage.getItem('isUserLoggedIn')

    if (storeData != null && storeData == 'true') this.isUserLoggedIn = true
    else this.isUserLoggedIn = false
  }
  logout () {
    this.authService.logout()
    this.router.navigate(['/'])
  }
}
