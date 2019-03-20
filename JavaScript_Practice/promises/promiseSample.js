var promise1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    var error = false:
    if (!error){
      let msg = "If you are seeing this, the promise has been resolved.";
      resolve(msg);}
    else{
      reject('Error: The promise was rejected!');
    }
  },1000);
})

promise1.then(function(value){
  console.log(value);
})

promise1.catch(err => console.log(err));
