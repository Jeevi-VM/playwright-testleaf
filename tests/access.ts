export class assignmentclass1{
    
    mark1: number;
    mark2: number;
    failmark: number;
    Total: number;
    percentage: number;

    constructor(){
        this.mark1 = 95;
        this.mark2 = 85;
        this.failmark = 40;
        this.Total = this.mark1 + this.mark2 + this.failmark;
        this.percentage = (this.Total / 200) * 100;
    }

    public add(){
        console.log(`Student Details ${this.mark1 + this.mark2}`)
    }

    private sub(){
        console.log(`Student mark without failmark ${this.Total - this.failmark}`)
    
    }

    protected mul(){
        console.log(`Student percentage ${this.percentage}`)
    }
    public get privateMark(){
        return this.sub();
    }
    public get privatePercentage(){
        return this.mul();

}
}
const assign1=new assignmentclass1();
console.log(assign1.add());
console.log(assign1.privateMark);
console.log(assign1.privatePercentage);

