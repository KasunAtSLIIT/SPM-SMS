import React from 'react';
import '../App.css';
import {Footer} from "../common/footer/footer";
import {Header} from "../common/header/header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import formi1_2 from '../supervisor/formi1_part2';
import formi1_5 from '../supervisor/formi5';
import formi3_feedback from '../supervisor/formi3_feedback';
import Supervisornav from '../common/navigation/supervisornav';


export default class SupervisorApp extends React.Component {
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
                                  <Route  path="/Allocation2" component={formi1_5} />
                                  <Route path="/Allocation3" component={formi3_feedback}/>
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

