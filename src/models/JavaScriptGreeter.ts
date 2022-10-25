import Greeter from "./Greeter";

export default class JavaScriptGreeterClass extends Greeter {
  greet(jsName: string): string {
    // return `console.log('${this.greeting}, ${jsName}!')`;
    return `console.log('${super.greet(jsName)}')`;
  }
}
