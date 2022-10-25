// Manual Console.log here
//import stuff here

import Greeter from "./models/Greeter";
import LoudGreeter from "./models/LoudGreeter";

const promptly = require("promptly");

(async () => {
  const name = await promptly.prompt("Name:");
  console.log(name);
  let object = new LoudGreeter("Heyo");

  console.log(object.greet("Yordan"));
})();
