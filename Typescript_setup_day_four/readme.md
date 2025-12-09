DAY 4 AND 5 CONVERED IN SAME FOLDER
Type Annotation and interference && Unions and Any  
ANNOTATION ==> you tell typescript type ,
Use when TypeScript cannot guess the type, especially in:

Function parameters

Function return types

Object types

Complex arrays

API response data

When you want strict control

Type INTERFERENCE ==> TS looks at the assigned value and decides the type on its own
When interference Works: assign value directly on the same line.

Concept Who decides type? Example

Annotation YOU let x: number = 10;
Inference Typescript let x = 10;


                    Union

Union is choose from list of allowed types or allowed values.
in unione the variable can be one of the options you defined.

let x: string | number;
it can be "hello" or 20 can't be boolean or array.
one value One type from the allowed list.

                    Any
any means Typescript doesn't care about about types , it removes all safty
stop checking particular variable. Treat it like aplain JS