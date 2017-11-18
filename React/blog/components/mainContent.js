import React from "react";

import Post from "./post";


// const MainContent = function () {
//     return (
//         <main>
//             {data.posts.map(post => {
//                 return <Post color="black" post={post} key={post.id} />;
//             })}
//         </main>
//     );
// };
class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            rendering: true
        };
    }
    componentDidMount() {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts").then(result => result.json()).then((result) => {

                this.setState({
                    content: result,
                    rendering: false
                });
                // console.log(this.state.content);
            });
        }, 3000);





    }
    render() {
        if (this.state.rendering) {
            return (<main>
                <p>GDETITEKSTGDETITEKSTGDETITEKSTGDETITEKSTGDETITEKSTGDETITEKSTGDETITEKSTGDETITEKSTGDETITEKSTGDETITEKSTGDETITEKST</p>
            </main>);
        } else {
            return (

                <main>
                    {this.state.content.map(post => {
                        return <Post post={post} key={post.id} />;
                    })}
                </main>
            );
        }
    }
}
export default MainContent;
