import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', 'Steve', new Date(2020, 3, 14)),
    new Quotes(2, 'Buy Cookies', 'I have to buy cookies for the parrot', 'Steve', new Date(2020, 6, 9)),
    new Quotes(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', 'Steve', new Date(2022, 1, 12)),
  ];
  constructor() { }

  ngOnInit(): void {
  }
 
}
