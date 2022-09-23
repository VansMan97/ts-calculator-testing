export default class Calculator{
    a: number;
    b: number;
    oper: string;
    
    constructor(a:number, b:number, oper:string){
        this.a = a;
        this.b = b;
        this.oper = oper;           
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
            if(this.b == 0){
                return "can't divide by 0"
            }
            return this.a / this.b;
        }
        
        try{
            if (this.oper=="%") throw("supported")
        }
        catch(e){
          return "the operator is not " + e
        }
    } 
}