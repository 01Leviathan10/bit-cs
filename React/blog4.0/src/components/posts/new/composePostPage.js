import React from "react";

import { BASE_URL, LOCAL_POSTS_KEY } from "../../../constants";
import ComposeForm from "./composeForm";

class ComposePostPage extends React.Component {
    constructor(props) {
        super(props);
        this.bindEventHandlers();
    }
    
    bindEventHandlers() {
        this.saveRequested = this.saveRequested.bind(this);
    }

    redirectToHome() {
        this.props.history.push("/");
       
    }

    savePost(newPost) {
        const localPostsString = localStorage.getItem(LOCAL_POSTS_KEY);
        let myPosts = [];

        if (localPostsString) {
            myPosts = JSON.parse(localPostsString);
        }

        myPosts.unshift(newPost);

        localStorage.setItem(LOCAL_POSTS_KEY, JSON.stringify(myPosts));
    }

    createRequest(data) {
        const requestHeaders = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        const randomPostId = this.randomIntFromInterval(101, 1000);

        const postData = {
            userId: 1,
            title: data.title,
            body: data.content,
            id: randomPostId
        };

        const requestBody = JSON.stringify(postData);

        return {
            headers: requestHeaders,
            method: "POST",
            body: requestBody
        };
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    saveRequested(formData) {

        const requestUrl = `${BASE_URL}/posts`;
        const requestOptions = this.createRequest(formData);

        fetch(requestUrl, requestOptions)
            .then((response) => response.json())
            .then((post) => {
                this.savePost(post);
                this.redirectToHome();
            })
            .catch((reason) => {
                console.log("Creating posts failed: " + reason);
                alert(reason);
            });
    }

    render() {
        return (
            <div>
                <h4>Create post</h4>
                <ComposeForm onSave={this.saveRequested} />
            </div>
        );
    }
}

export default ComposePostPage;
