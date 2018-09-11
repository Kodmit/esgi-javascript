string = "hello world";

function capitalize(str){
  return str.split(' ').map(function(word,index){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

console.log(capitalize(string));
