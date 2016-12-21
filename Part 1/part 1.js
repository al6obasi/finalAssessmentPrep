//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...

function MakeRBKstudent(name,age,education,nationality){
return {
	name:name,
	age:age,
	education:education,
	nationality:nationality
}
//arr.push(student)
}
var student1=MakeRBKstudent("Waleed",18,"Tawjihi","Jordanian");
var student2=MakeRBKstudent("Ahmad",26,"Bac","Jordanian");
function showFriend(student){
	return student.name +" "+student.age +" "+student.education +" "+student.nationality
}
var arr=[student1,student2];
function averageStudents(arr){
	var sum=0;
	for (var i = 0; i < arr.length; i++) {
		for(var k in arr[i]){
			sum+=arr[i]["age"]
		}
	}
	return sum/arr.length;

}

/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...
function rangeSquared(arguments) {
	var arr=[];
	var x=arguments[0]
	if (arguments.length===1){
 		function square(arguments[0]){
 		if (Math.sqrt(x) = Math.floor(Math.sqrt(x))){
		arr.push(Math.sqrt(x))

	}
	else {
		return "Null"
	}		
		}

	for (var i = arguments[length-1]; i > x; i--) {
		if (Math.sqrt(i)=Math.floor(Math.sqrt(i))) {
		arr.push(Math.sqrt(i))		
		}
}

}
return square(arguments);
}


/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....
function leaders (arr){
	var arr2=[];
	for(var i=0 ; i<arr.length;i++){
		if (arr[i]>arr[i+1] || arr[i+1]===undefined){
			arr2.push(arr[i])
		}
	}
	return arr2;
}
