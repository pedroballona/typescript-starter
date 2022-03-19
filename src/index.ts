export function helloWorld(dependency = { logFunction: console.log }) {
  dependency.logFunction("Hello world");
}

helloWorld();
