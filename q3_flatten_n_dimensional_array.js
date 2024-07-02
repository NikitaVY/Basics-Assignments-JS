/* Write a Program to Flatten a given n-dimensional array */

const flatten = (ar) => {
	// Write your code here
		let result = [];
		
		const flat = (arr) => {
			for (let i = 0; i < arr.length; i++) {
				if (Array.isArray(arr[i])) {
					flat(arr[i]);
				} else {
					result.push(arr[i]);
				}
			}
		};
		
		try {
			flat(ar);
			return result;
		} catch {
			return null;
		}
};
let output = flatten([1, [2, 3], [[4], [5]]]);
console.log(output);
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

// module.exports = flatten;
