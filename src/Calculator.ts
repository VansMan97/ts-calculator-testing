type Operation = "+" | "-" | "*" | "/";

export default class Calculator {
  calculate(a: number, operation: Operation, b: number) {
    switch (operation) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) {
          throw new Error("devide by zero");
        }
        return a / b;
      default:
        throw new Error("operation is not supported");
    }
  }
}