
import { Redirect, Route, Switch } from 'react-router';
import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import About from "./Components/About";
import Events from "./Components/Events";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Preloader from "./Components/Pre";
import "./style.css";
import Footer from "./Components/Footer"




function App() {
    const [load, upadateLoad] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        upadateLoad(false);
      }, 2000);
    }, []);




    return(
        <>
        <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        
        <ScrollToTop />
        <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path="/events" component={Events}/>
            <Route exact path="/team" component={Team}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/" component={Home}/>
            <Redirect to="/"/>

        </Switch>
        <Footer />
        </div>
        
        </>
    );
};

export default App;