string = "hello wolrd";

function toCamelCase(str){
  return str.split(' ').map(function(word,index){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

console.log(toCamelCase(string));
