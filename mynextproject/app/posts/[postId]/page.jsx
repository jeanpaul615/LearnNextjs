import React from 'react'
async function loadPost (){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/3');
    const data = res.json();
    console.log(data);
}

//Trae datos por el postId, de el params dinamicamente
export default function Page({params}) {
    loadPost();
  return (
    <div>
        <h1>
            Post Page {params.postId}
        </h1>
    </div>
  )
}
