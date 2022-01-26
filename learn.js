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


function convertRate() {
  var amount = parseFloat(readLine(), 10);
  var rate = parseFloat(readLine(), 10);
  
  console.log(convert(amount, rate));

  function convert() {
    amount *= rate;
    return amount;
  }
}

function incPrices() {
  var increase = parseInt(readLine(), 10);
  var prices = [98.99, 15.2, 20, 1026];
  
  for (let i = 0; i < prices.length; i++) {
      prices[i] += increase
  }

  console.log(prices)    
}

function computedProperties() {
  var i = 0
  var a = {
    ['foo_' + ++i]: i,
    ['foo_' + ++i]: i,
    ['foo_' + ++i]: i
  }
  console.log(a)

  function computedProperties2() {

    let prop = 'name'
    let id = '1234'
    let mobile = '08923'
  
    let user = {
      [prop]: 'Jack',
      [`user_${id}`]: `${mobile}`
    }
  
    console.log(user) // output: { name: 'Jack', user_1234: '08923' }
  } // computedProperties2()

  function computedProperties3() {

    var param = 'size'
    var config = {
      [param]: 12,
      ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
    }
    console.log(config.mobileSize)
  } // computedProperties3()

} // computedProperties()

function objAssign() {

  let person = {
    name: 'Jack',
    age: 18,
    sex: 'male'
  }
  
  let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
  }
  let newStudent = Object.assign({}, person, student) // { name: 'Bob', age: 20, sex: 'male', xp: '2' }
  // console.log(newStudent)
} // objAssign()

function objDestructuring() {

  let a,b
  ({a,b} = {a: 'Hello', b: 'Jack'})

  console.log(`${a} ${b}!`)
} // objDestructuring()
