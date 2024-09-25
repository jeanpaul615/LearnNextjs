// Este es un Server Component
import React from "react";

//REACT SERVER COMPONENT
async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default async function PostPages() {
  const posts = await loadPosts();
  //REACT CLIENT COMPONENT
  /*SE PUEDE SEPARAR PARA LOGRAR COMPONENTES 
  DE FRONT Y SE USA EL USECLIENT*/ 
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-4 p-4 border rounded shadow-sm">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
