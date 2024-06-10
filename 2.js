function rentalCarCost(d) {
  let f = d * 40;
  
  if(d > 6){
     f -= 50;
  }
  else if(d > 2){
     f -= 20;
  }

  return f;
}