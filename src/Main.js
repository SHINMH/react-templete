import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import PostList from './PostList';

function Main(props) {
    const [Posts, setPosts] = useState([]);
    useEffect(()=>{
        setPosts(props.posts)
    })

    const increateSort = ()=>{
        const sorted = [...Posts].sort((a, b) => b.title - a.title);

        setPosts(sorted);
    }

    const decreateSort = ()=>{
        console.log("click")
        const sorted = [...Posts].sort((a, b) => a.title - b.title);

        setPosts(sorted);
    }

    const [sort, setSort] = useState();

    return (
        <div className="Main">
            <Header />
            <div>
                <button onClick={()=>{increateSort()}}>내림차순</button>
                <button onClick={()=>{decreateSort()}}>오름차순</button>
                <select
                    onChange={(e) => {
                    setSort(e.target.value);
                    }}>
                    <option value="">--정렬하기--</option>
                    <option value="short">이름 짧은 순</option>
                    <option value="long">이름 긴 순</option>
                </select>
            </div>
            <PostList Posts={Posts} sort={sort}></PostList>
            <Footer />
        </div>
    );
}

export default Main;
