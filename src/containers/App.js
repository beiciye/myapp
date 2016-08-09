import React, { Component } from 'react';
import Header from "./../Component/Header/Header";
import './../css/index.css';
import '../css/app.css';

class App extends Component {
    render() {
        const key = window.location.pathname||"root";
        return (
            <div >
                <Header/>
                <section className="dashboard">
                    {
                        React.cloneElement(this.props.children||<div/>,{key:key})
                    }
                </section>
            </div>
        );
    }
}

export default App;
