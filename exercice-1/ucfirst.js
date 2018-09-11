string = "hello world";

function uc_first(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(uc_first(string));
