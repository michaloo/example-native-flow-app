/* @flow */
/*:: import type { foo, ClassInterface } from "example-native-flow-lib" */

const { ExampleClass } = require("example-native-flow-lib");

const test/*: foo */ = "test";

const exampleInstance = new ExampleClass();

console.log("app");

function accept(instance/*: ExampleClass*/)/*: boolean */ {
  console.log(instance);
  return true;
}

accept(test);

console.log(exampleInstance.baz);
