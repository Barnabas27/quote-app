export class Quotes {
    // quote: string;
    // author: string;
    // time: Date;
    like:number;
    unlike:number;

public showDetails: boolean;
constructor(public id: number, public quote: string, public author: string, public user: string, public date: Date){
this.showDetails = false;
this.like = 0;
this.unlike = 0;

}

}
