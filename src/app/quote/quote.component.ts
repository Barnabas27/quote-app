import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.', 'Albert Einstein', 'Steve Owens', new Date(2021, 3, 14)),
    new Quotes(2, 'You know you are in love when you can\'t fall asleep because reality is finally better than your dreams', 'Dr. Seuss', 'Barnabas', new Date(2021, 6, 9)),
    new Quotes(3, 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.', ' Harry Potter ', 'Nyambura', new Date(2022, 1, 12)),
  ]; 
  // tslint:disable-next-line: typedef
  addNewQuote(quote){ 
    // tslint:disable-next-line: no-trailing-whitespace
    
    // tslint:disable-next-line: prefer-const
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.day = new Date(quote.day);
    this.quotes.push(quote);
  }
  upvoting(index){ 
    this.quotes[index].like++
  }
  downvoting(index){
    this.quotes[index].unlike++
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
 
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
