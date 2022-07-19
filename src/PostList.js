import Post from './Post';
import React from 'react';
import { Link } from 'react-router-dom';


function PostList(props) {
    const posts = props.Posts;              

    return (
        <div className="">
            {   
                props.sort === "short" &&
                posts.map((post, index)=>(
                    <Link to={`/posts/${index}`} key={index}>
                        <Post key={index} title={post.title} image={post.image} content={post.content}/>
                    </Link>
                ))
            }           
            {
                props.sort === "long" &&
                [...posts].sort((a, b)=>{ return a.title > b.title ? -1 : 1}).map((post, index)=>(
                    <Link to={`/posts/${index}`} key={index}>
                        <Post key={index} title={post.title} image={post.image} content={post.content}/>
                    </Link>
                ))
            }
        </div>
    );
}
  
export default PostList;
  