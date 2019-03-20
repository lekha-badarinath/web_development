posts_global = [{title:"Post One",body:"This is post one."},
        {title:"Post Two",body:"This is post two."}
      ];

function getPost(posts) {
  setTimeout(()=>{
    let output = '';
    posts.forEach((post)=>{
      output += `<li>${post.title,post.body}</li>`;
    });
    // document.getEl('promise').innerHTML = output;
  },1000);
}


function createPost(post,post_array){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      post_array.push(post);
      const error = false;
      if (!error) {
        resolve(post_array);
      }
      else{
        reject('Error: Something went wrong, could not add post.');
      }
    },2000)
  });
}

createPost({title:"Post Three",body:"This is post three."},posts_global)
.then(getPost)
.catch(err => console.log(err))

console.log(posts_global)
