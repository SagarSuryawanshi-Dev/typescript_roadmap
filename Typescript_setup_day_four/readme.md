Type Annotation and interference   
Annotation ==> you tell typescript type ,
Use when TypeScript cannot guess the type, especially in:

Function parameters

Function return types

Object types

Complex arrays

API response data

When you want strict control


Type Interference ==> TS looks at  the assigned value and decides the type on its own
When interference Works: assign value directly on the same line.


Concept	      Who decides type?	        Example

Annotation	       YOU	         let x: number = 10;
Inference	    Typescript	          let x = 10;