string = "hello wolrd";

function snake_case(str){
  return str.split(' ').map(function(word,index){
    return word;
  }).join('_');
}

console.log(snake_case(string));
