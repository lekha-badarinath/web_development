function count(){
  num = 0
  console.log("hello");
  function inner(){
    console.log("How are you?");
    num += 1;
    console.log(num);
  };
  return inner
}

res = count();
res();
res();

function counter(){
  var num = 0;
  console.log('inital value: ',num);
  return function(){
    num += 1;
    console.log('final value: ',num);
  }
}
result = counter()
result()

function two(){
  console.log("This is another closure");
  return function(){
    console.log("Let's see if this works");
  };
}
res2 = two();
res2();
