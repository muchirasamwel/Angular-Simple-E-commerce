import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple-Shop'
  isUserLoggedIn = false
  onInit () {
    this.hasUser()
  }
  hasUser = () => {
    let storeData = localStorage.getItem('isUserLoggedIn')

    if (storeData != null && storeData == 'true') this.isUserLoggedIn = true
    else this.isUserLoggedIn = false
    return this.isUserLoggedIn
  }
}
