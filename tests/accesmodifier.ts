export class assignmentclass{

    public mark1: number;
    public mark2: number;
    private failmark: number;
    private static Total: number;
    protected percentage: number;

constructor(){
    this.mark1 = 95;
    this.mark2 = 85;
    this.failmark = 40;
    assignmentclass.Total = this.mark1 + this.mark2;
    this.percentage = (assignmentclass.Total / 200) * 100;
}

studentDetails(){
    console.log(`Student Details ${this.mark1}:${this.mark2}:${this.percentage}:${assignmentclass.Total}:${this.percentage}`);
}
public get privateMark(){
    return this.failmark
}
public set writeFailMark(newFailMark: number){
    this.failmark= newFailMark
}

}
