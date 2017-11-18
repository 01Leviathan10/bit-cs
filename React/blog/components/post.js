import React from "react";
import PropTypes from "prop-types";
const Post = function (props) {
    return (
        <div style={{border: "solid green 5px"}}>
            <h1>{props.post.title}</h1>
            <p style= {{color:"red"}}>{props.post.body}</p>
            
        </div>
    );
};
Post.propTypes = {
    color : PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    })
};
export default Post;