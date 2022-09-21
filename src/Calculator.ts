module.exports = class Calculator{
    a: number;
    b: number;
    oper: string;
    
    constructor(a:number, b:number, oper:string){
        this.a=a;
        this.b=b;
        this.oper=oper;           
    }
    Calculate(){
        if (this.oper=="+"){
            return this.a + this.b;
        }
        else if(this.oper=="-"){
            return this.a - this.b;
        }
        else if(this.oper=="*"){
            return this.a * this.b;
        }
        else if(this.oper=="/"){
            return this.a / this.b;
        }
        else{
            return "error";
        }
    } 
}

