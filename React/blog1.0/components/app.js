import React from "react";

import Header from "./header";
import Footer from "./footer";
import MainContent from "./mainContent";
import About from "./about";
import Authors from "./authors";
import { Switch, Route } from "react-router-dom";
import Post from "./post1";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path ="/" component={MainContent} />
                    <Route path = "/authors" component={Authors}/>
                    <Route path = "/about" component={About}/>
                    <Route path = "/post1" component={Post}/>
                </Switch>
                <Footer /> 
            </div>
        );
    }
}

export default App;