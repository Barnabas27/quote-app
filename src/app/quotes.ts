export class Quotes {
    // quote: string;
    // author: string;
    // time: Date;
public showDetails: boolean;
constructor(public id: number, public quote: string, public author: string, public submitDate: Date){
this.showDetails = false;
}

}
