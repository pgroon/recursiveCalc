/************************************************************************************
 * A little module for some recursive calculations. So far it can convert           *
 * input to a base-n number, calculate faculties of n, and give Collatz-Sequences.  *                                                          *
 *                                                                                  *
 * Copyright 2019 @Groonworld.                                                      *
 * Published under MIT license: https://opensource.org/licenses/MIT                 *
 ***********************************************************************************/

var calc = (function() {
// Module-like IIFE structure, because why not. 

    return {
        baseConv: function(input, base, array) {
        // Converts a number to a base-x number, where x is also specified by user. (base 2 = binary, base 16 = hexadecimal)

        // TODO: 1) Output-elements >= 10 need conversion to letters so that 10 = A, 11 = B, and so on.
        // TODO: 2) Output needs to be converted from an array to a number or string.       
        
            // Divide number by base, store remainder in the array. Repeat until you reach 0.
            // That's basically it. The reverse of the sequence of the remainders of this calculation 
            // spells out the number in whatever base we chose. 
            array.push(input % base);
            let number = Math.floor(input/base);
            
            /* Various outputs for testing:
            console.log("Input: " + input + ", Base: " + base + ", Number: " + number + ", Reversed Array: " + array.reverse());
            */
            
            if (number==0) {;
                return array.reverse();   // Output the reversed array.     
            } else {
                return this.convert(number, base, array); 
            }
        },
        
        factorial: function(n) {
        // Faculty calculation: The textbook-example of recursion.

            if (n == 1 || n == 0) { 
                return 1
            } else {
                return n * this.factorial(n - 1)
            }   
        },

        collatz: function(n) {
        // Outputs the collatz-sequence for any given number.

            console.log(n); // Print the current step to the console

            if (n == 1 || n == 0) {
            // As defined by Collatz: If n is 1, we're done. The 0 just checks for people trying to break things.
                console.log("Done!");
                return n
            } else if ((n%2) == 0) { 
            // If n is divisible by 2, divide by 2.
                return this.collatz(n / 2)
            } else {
            // If n is not divisible by 2, multiply by 3 and add 1.        
                return this.collatz(3 * n + 1)
            }
        }
    }
    console.log("Calc module is ready");
})();  