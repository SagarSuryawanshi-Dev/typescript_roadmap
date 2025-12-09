//  unions and any

let status: "Pending" | "Success" | "Error";

status = "Pending"
status = "Success"
// status = "false"


let age: number | string;

age = 25;
age = "senior citizen"
// age = false;



let emergency: any;

emergency = 100;
emergency = "Call fire brigade";
emergency = true

// np type checking from tyescript;