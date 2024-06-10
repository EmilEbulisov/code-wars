function duplicateCount(text){
  let chars = {};
  let result = 0;
  text = text.toUpperCase();
  for(let i = 0;i < text.length; i++){
    let char = text[i];
    if (chars[char]){
      chars[char]++;
    }
    else {
      chars[char] = 1;
    }
  }
  
  console.log(chars)
  
  for(char in chars){
    if(chars[char] > 1){
      result++;
    }
  }
  
  return result;
}