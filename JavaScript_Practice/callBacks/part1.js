//function
function addFunction(a,b){
  return a+b;
}
document.write('This is the output of add function: ',addFunction(10,30) + '<br>');
//Constructor
function add(a,b){
  this.a = a;
  this.b = b;
  this.sum = a+b
};
var res = new add(12,13);
console.log(res.sum);
document.write('This is the output of add constructor: ',res.sum);



// createPost({title: "Post Three", body:"This is post three"});

//When we run this code, post three will not be added.
