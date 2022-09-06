import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    console.log(posts)
    const allPosts = posts.map((post) => (
        <Article
        key={post.id}
        title={post.title}
        preview={post.preview}
        date={post.date}
        />
    ))
    return <main>{allPosts}</main>
}
export default ArticleList;

