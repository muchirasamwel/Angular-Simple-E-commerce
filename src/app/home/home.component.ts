import { Component, OnInit } from '@angular/core'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor (private api: ApiService) {}

  products: Array<Object> = []

  ngOnInit () {
    this.api.getProducts().subscribe(data => {
      this.products = data.results
      console.log(this.products)
    })
  }
}
