function soma() {
  var sum=0; 
  for(i=4; i<8; i++) {
    if (i == 6) {
      continue; 
    }
    sum += i;
  }
  document.write(sum);
} // soma()

function depthProblem() {
  var depth = parseInt(readLine(), 10);
  //your code goes here
  
  var day = 0;
  var total = 0;
  while(total<depth){
      day += 1;
      total += 7;
      if(total >= depth){
          console.log(day);
          break;
      }
      total -= 2;
  }
} 
