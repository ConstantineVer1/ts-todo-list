export class TodoItem {

    constructor(public id: number, 
                public task: string, 
                public complete: boolean = false){
        /*
        this.id = id;
        this.task = task;
        this.complete = complete;
        */
    }

    printDetails() : void {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}