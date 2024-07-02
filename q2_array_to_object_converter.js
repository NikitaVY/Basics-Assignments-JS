/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (arr,key) => {
	// Write your code here
 
	return arr.reduce((val, obj) => {
		val[obj[key]] = obj;
		return val;
	}, {});

};
let conv = convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id');
console.log(conv);

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

// module.exports = convert;
