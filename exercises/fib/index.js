// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
//recursive solution with memoization which is :
//"Storing the arguments of each function
//call along with the result. if the function is called 
//again with the same arguments, return the 
// precomputated result, rather than running the function again"
    if (n < 2) {
        return n
    } 
    return fib(n - 1) + fib(n - 2)

    }

    function memoize(fn) {
        const cache = {}
        return function(...args) {

            if (cache[args]) {
                return cach[args]
            } 

            const results = fn.apply(this, args)
            cache[args] = results

            return results
        }
    }

const fib = memoize(fib)

    // function fib(n) {
    //     //recursive solution with exponential runtime
    //         if (n < 2) {
    //             return n
    //         } 
    //         return fib(n - 1) + fib(n - 2)
        
    //         }

    // function fib(n) {
    //     // linnear run time
    //         const result = [0, 1]
        
    //         for (let i = 2; i <=n; i++) {
    //         const a = result[i - 1]
    //         const b = result[i - 2]
        
    //         result.push(a + b)
    //         }
        
    //         return result[n]
        
    //         }

    



module.exports = fib;
