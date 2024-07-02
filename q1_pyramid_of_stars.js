/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (num) => {
	// Write your code here
    let pyramid = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 0; j < num - i; j++) {
            pyramid += ' ';
        }
        for (let k = 0; k < i; k++) {
            pyramid += '*';
            if (k < i - 1) {
                pyramid += ' ';
            }
        }
        pyramid += '\n';
    }
        return pyramid;
};

let buildPy = buildPyramid(6);
console.log(buildPy);

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

// module.exports = buildPyramid;
