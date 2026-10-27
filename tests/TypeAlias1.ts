// type facebookUsername = string |boolean
// let userName : facebookUsername = "latha@gmail.com"
// userName = 9867676767
// userName = true


// Classroom activity
//  -----------------

//  1.Create a TypeScript program to handle different payment methods using a Union Type.

// - Create a function that accepts only specific payment methods.

// - Create a type alias called PaymentMethod that allows only "UPI", "CreditCard", or "PayPal".

// - Write a function makePayment that takes a parameter of type PaymentMethod and prints which payment
//   method is chosen.

// - Call the function with "UPI" and "CreditCard" as arguments.

export {}; 

type PaymentMethod = 'UPI' | 'CreditCard' | 'PayPal';

function acceptPayment(method: PaymentMethod) {
    console.log(`The chosen payment method is: ${method}`)
}

acceptPayment("UPI")

