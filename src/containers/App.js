import React, { Component } from 'react';
import Header from "./../Component/Header/Header";
import MainContent from './MainContent/MainContent'
import './../css/index.css';
import '../css/app.css';

class App extends Component {
    render() {
        return (
            <div >
                <Header/>
                <section className="dashboard">
                    <MainContent/>
                </section>
            </div>
        );
    }
}

export default App;
