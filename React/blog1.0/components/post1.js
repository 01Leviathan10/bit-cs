import React from "react";


class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = { post: [] };

    }

    componentDidMount() {

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => {
                return response.json();
            })
            .then((json) => {
                this.setState({ post: json });
            });
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.post.title}
                </h1>
                <p>{this.state.post}</p>
                
            </div>
        );
    }


}


export default Post;