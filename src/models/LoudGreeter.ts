import Greeter from "./Greeter";

export default class LoudGreeter extends Greeter {
  private extra: string = "!";

  addVolume(): void {
    this.extra += "!";
  }

  greet(loudGreetName: string): string {
    return `Hello, ${loudGreetName}${this.extra}${this.extra}!`;
  }
}
