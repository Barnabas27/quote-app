import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quotes(0, '', '', '', new Date());
  @Output() addQuote = new EventEmitter<Quotes>();

  // tslint:disable-next-line: typedef
  getQuote(){
     this.addQuote.emit(this.newQuote);
     this.newQuote = new Quotes(0, '', '', '', new Date());
  }


  constructor() { }

  ngOnInit(): void {
  }

}
