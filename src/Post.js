import React from 'react';
import './App.css';

const imageStyle = {
    width:"50px",
    height:"50px"
}

function Post(props) {
  return (
    <div className="Post">
        <img src= {props.image} style={imageStyle}/>
        <div className="PostContent">
            <div>{props.title}</div>
            <div>{props.content}</div>
        </div>
    </div>
  );
}

export default Post;
