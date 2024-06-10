function highAndLow(numbers){
  let arr = numbers.split(' ');
  let max = arr[0],
      min = arr[0];
      
  for (let i = 0; i < arr.length; i++){
    let num = +arr[i]
    if(num > max){
      max = num;
    }
    if(num < min){
      min = num;
    }
    
  }
  return `${max} ${min}`;
}

