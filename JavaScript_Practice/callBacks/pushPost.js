posts = [{title:"Post One",body:"This is post one."},
        {title:"Post Two",body:"This is post two."}
      ];

function getpost(){
  setTimeout(()=>{
    let output = '';
    posts.forEach((post,index)=>{
      output += `<li>${post.title}</li>`;
    });
    // document.body.innerHTML = output;
    document.getElementById('callBack').innerHTML = output;
  },1000);
};

function createPost(post, callback){
  setTimeout(function(){
    posts.push(post);
    callback();
  }, 2000);
}

// getpost();
createPost({title:"Post Three",body:"This is post two."},getpost);
