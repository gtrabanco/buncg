import { App } from "buncg";


console.log(globalThis.buncg); // How to make globalThis types to recognize buncg?
console.log("Hello! First project with BunCG!");
App.get("cli", () => "Hello from CLI!")

