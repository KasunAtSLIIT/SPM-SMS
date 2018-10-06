import React from 'react';
import '../App.css';
import {Footer} from "../common/footer/footer";
import {Header} from "../common/header/header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import formi1_2 from '../supervisor/formi1_part2';
import Supervisornav from '../common/navigation/supervisornav';


export default class Supervisor_App extends React.Component {
    /**
     * supervisor layout
     */
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <div className="row sidebar">
                        <div className="col-md-2 side-nav">
                            <Supervisornav/>
                        </div>
                        <div className="col-md-10 ">
                            <div className="row">
                                <div className="col-md-12 top-nav">
                                  <Route  path="/Allocation" component={formi1_2} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
                </Router>
          
        );
    }
}

