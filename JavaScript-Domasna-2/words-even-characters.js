const string = 'I am a student in Computer Science and JavaScript academy at Semos Education. I am taking a course for JavaScript currently. My goals are to become a Software Developer after that, so I am working toward it right now.'

const secondString = string.split(' ');
console.log(secondString); 

function arrFunction(arr) {
	let array = [];
	for (let i = 0; i < arr.length; i++) {
		  if (arr[i].length % 2 === 0) {
		  array.push(arr[i]);
		  }
	}
	return array;
}
console.log(arrFunction(secondString));

const evenStrings = arrFunction(secondString);
const obj = new Object();

for (let i = 0; i < evenStrings.length; i++) {
	if(obj[evenStrings[i]] != null) {
		obj[evenStrings[i]] += 1;
	} else {
		obj[evenStrings[i]] = 1;
	}
}
console.log(obj); 
