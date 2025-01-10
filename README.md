# TypeScript: Implicit Array to String Conversion

This repository demonstrates a common yet subtle bug in TypeScript where an array is implicitly converted to a string when passed to a function expecting a string.  This can lead to unexpected runtime behavior that is difficult to debug without careful type checking.

## Bug

The `bug.ts` file contains a function `greeter` that expects a string argument.  However, it is called with an array of strings. TypeScript does not report an error during compilation, but the runtime behavior is unexpected.  The array is implicitly converted to a string, resulting in an output different from what was intended.

## Solution

The `bugSolution.ts` file shows a corrected version.  It explicitly types the `person` parameter as an array of strings, correctly handling the input and preventing the implicit conversion.