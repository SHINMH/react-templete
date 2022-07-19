import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './App.css';

function Detail(props) {
    const navigate = useNavigate();
    const {id} = useParams();
    let temp = props.posts;
    console.log(id)
    console.log(temp[id]);
    
    let test = temp[id];

    //const {title, image, content} = temp[id];

    return (
    <div className='detailBody'>
        <div className='header'>
            <button style={{background:'bisque', height: '40px', width:'30%'}} onClick={()=>navigate('/')}>뒤로가기</button>
            <h3 style={{width:'30%'}}>타이틀</h3>
            <div style={{width:'30%'}}></div>
        </div>
        <div className='content'>
            <div>{test.title}</div>
            <img src={test.image} style={{width:'100%'}}/>
            <div>{test.content}</div>
        </div>
    </div>
  );
}

export default Detail;
