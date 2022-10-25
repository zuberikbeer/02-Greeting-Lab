import Greeter from "../src/models/Greeter";
import HtmlGreeter from "../src/models/HtmlGreeter";
import JavaScriptGreeterClass from "../src/models/JavaScriptGreeter";
import LoudGreeter from "../src/models/LoudGreeter";

describe(`Greeter class`, () => {
  test(`constructor sets greeting property`, () => {
    // arrange
    const hello: Greeter = new Greeter("howdy");
    // act
    //assert
    expect(hello.greeting).toBe("howdy");
  });
  test(`greet method called with "mom" and object constructed with param "hi" returns "hi, mom!"`, () => {
    //arrange
    const newGreeting: Greeter = new Greeter("hi");
    //act
    const returnString: string = newGreeting.greet("mom");
    //assert
    expect(returnString).toBe("hi, mom!"); //or
    //expect(newGreeting.greet("mom").toBe("hi, mom!"))
  });
});

describe(`JavaScript Greeter`, () => {
  test(`greet method: greeting "hola" and name "Dominic" returns"console.log('hola, Dominic!')"`, () => {
    // arrange
    const objectExample: JavaScriptGreeterClass = new JavaScriptGreeterClass(
      "hola"
    );
    //act
    const result: string = objectExample.greet("Dominic");
    //assert
    expect(result).toBe("console.log('hola, Dominic!')");
  });
});

describe(`LoudGreeter Greeter`, () => {
  test(`greet method: greeting "hello" and name "Grant" returns "Hello, Grant!!!"`, () => {
    //arrange
    const excisionExample: LoudGreeter = new LoudGreeter("Hello");
    //act
    const excision: string = excisionExample.greet("Grant");
    //assert
    expect(excision).toBe("Hello, Grant!!!");
  });
});

describe(`Html Greeter`, () => {
  test(`greet method: <h1> "hello" and name "Grant" <h1> returns "<h1>Hello, Grant!<h1> `, () => {
    const liquidStrangerExample: HtmlGreeter = new HtmlGreeter("Hello");
    //act
    const liquidStranger: string = liquidStrangerExample.greet("Grant");
    //assert
    expect(liquidStranger).toBe("<h1>Hello, Grant!<h1>");
  });
});
