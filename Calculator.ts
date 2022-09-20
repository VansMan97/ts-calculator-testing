
class Calculator{
    a: number;
    b: number;
    addition: number;
           constructor(a:number, b:number, addition: number){
               this.a=a;
               this.b=b;
               this.addition=addition;
           }
           Calculate(){
            let addition = function(a: number, b: number): number{
               return a + b;
           }
           let subtraction = function(a: number, b: number): number{
               return a - b;
           }
           let multipl = function(a: number, b: number): number{
               return a * b;
           }
           let divide = function(a: number, b: number): number{
               return a / b;
           }
       } 
   }
   
module.exports=addition;