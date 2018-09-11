string = "hello world";

function camelCase(str){
  return str.split(' ').map(function(word,index){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

console.log(camelCase(string));

function capitalize(str){
  return str.split(' ').map(function(word,index){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

console.log(capitalize(string));

function prop_access(str){
  return str.split('.').map(function(word,index){
    if(index == 0){
      return word;
    }
    return '["' + word + '"]';
  }).join('');
}

console.log(prop_access("animal.type.name"));

function snake_case(str){
  return str.split(' ').map(function(word,index){
    return word;
  }).join('_');
}

console.log(snake_case(string));

function ucfirst(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucfirst(string));

function leet(str) {
	string = str.replace(/a/g, "4");
	string = string.replace(/e/g, "3");
	string = string.replace(/o/g, "0");
	string = string.replace(/i/g, "1");
	string = string.replace(/u/g, "(_)");
	string = string.replace(/y/g, "7");
	return string;
	
}

console.log(leet("anaconda peunis"));


string = "hello world";

function verlan(str){
	return str.split(' ').map(function(word,index){
    		var splitString = word.split(""); 
    		var reverseArray = splitString.reverse(); 
    		var joinArray = reverseArray.join(""); 
    		return joinArray;
  	}).join(' ');
	
}

console.log(verlan(string));


function yoda(str){
	var splitString = str.split(" "); 
	var reverseArray = splitString.reverse(); 
	var joinArray = reverseArray.join(" "); 
	return joinArray;
}

console.log(yoda(string));


function vig(str){
	return "_";
}

console.log(vig(string));
