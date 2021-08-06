import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() color 
  @Input() title
  @Input() amount
  @Input() info
  @Input() icon

  constructor() { }

  ngOnInit() {
  }

}
