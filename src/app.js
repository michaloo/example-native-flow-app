/* @flow */
/*:: import type { foo, ClassInterface } from "example-native-flow-lib" */

const ExampleClass = require("example-native-flow-lib/src/example-class");

const test/*: foo */ = "test";

const exampleInstance = new ExampleClass();

console.log("app");

function accept(instance/*: ExampleClass*/) {
  console.log(instance);
}

accept(test);

console.log(exampleInstance.foo);
