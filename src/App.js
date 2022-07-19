import './App.css';
import PostList from './PostList'
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Detail from './Detail';
import Main from './Main';

function App() {
  const [Posts, setPosts] = useState([]);

    let tempPost = [{
      title: "title1",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      content: "자바스크립트 테스트1"
    },
    {
      title: "title2",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      content: "자바스크립트 테스트1"
    },
    {
      title: "title3",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      content: "자바스크립트 테스트1"
    },
    {
      title: "title4",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      content: "자바스크립트 테스트1"
    }];
  
    useEffect(()=>{
      setPosts(tempPost)
    }, [])
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((content) => {});
    }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main posts={Posts}/>}/>
          <Route path="/posts/:id" element={<Detail posts={Posts}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
