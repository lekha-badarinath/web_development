function add(a,b,callback){
  document.write(a+b + '<br>');
  callback();
}

function message(){
  document.write('next message');
}

add(100,200,message);
