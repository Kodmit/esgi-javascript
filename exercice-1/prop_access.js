string = "animal.type.name";

function prop_access(str){
  return str.split('.').map(function(word,index){
    if(index == 0){
      return word;
    }
    return '["' + word + '"]';
  }).join('');
}

console.log(prop_access(string));
