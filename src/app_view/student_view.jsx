import React from 'react';
import '../App.css';
import {Footer} from "../common/footer/footer";
import {Header} from "../common/header/header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Student_main from '../student_main/formi1';
import Student_main3 from '../student_main/formi3';
import Student_main6 from '../student_main/formi6';
import Studentnav from '../common/navigation/studentnav';


export default class Student_App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <div className="row sidebar">
                        <div className="col-md-2 side-nav">
                            <Studentnav/>
                        </div>
                        <div className="col-md-10 ">
                            <div className="row">
                                <div className="col-md-12 top-nav">
                                    <Route  path="/Formione" component={Student_main} />
                                    <Route  path="/Formithree" component={Student_main3} />
                                    <Route  path="/Formisix" component={Student_main6} />

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

