import React from "react";
import Post from "./post";

import {Link } from 'react-router-dom';

// import Post from "./post";
// // import data from "../data";
// import Data form "./getdata"

// const MainContent = function () {
//     return (
//         <main>
//             {data.posts.map(post => {
//                 return <Post post={post} key={post.id} />;
//             })}
//         </main>
//     );
// };




class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }

    componentDidMount() {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                return response.json();
            })
            .then((json) => {
                // console.log(json);
                this.setState({ posts: json });
            });
    }

    render() {

        if (this.state.posts.length === 0) {
            return <p>Loading</p>;
        }
        else {

            return (
                <div>
                    {this.state.posts.map(post => {
                        return (
                            <Link to={`/posts/${post.id}`} key={post.id} >
                                <Post post={post}  />
                            </Link >
                        );
                    })}
                </div>
            );
        }
    }
}



export default MainContent;
