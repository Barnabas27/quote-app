import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes: Quotes [] = [
    new Quotes(1,"noman is an island", "reggea",new Date(12, 8, 2020)),
    new Quotes(2, "If you behave abnomary.", "kenyatta", new Date(12, 8, 2020)),
    new Quotes(3, "hey", "barbz", new Date(12, , 2020))
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
