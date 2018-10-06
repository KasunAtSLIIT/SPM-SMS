import React from 'react';
import '../App.css';
import {Footer} from "../common/footer/footer";
import {Header} from "../common/header/header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StudentHome from '../student/StuHome';
import StudentReg from '../student/StuRegister';
import StudentNav from '../common/navigation/studentnav';
import Student_main from '../student_main/formi1';

export default class Student_App extends React.Component {
    /**
     * student naigation panel
     */
    render() {
        return (
            <Router>
                <div className="App">
                   <Header/>
                    <div className="row sidebar">
                        <div className="col-md-2 side-nav">
                            <StudentNav/>
                        </div>
                        <div className="col-md-10 ">
                            <div className="row">
                                <div className="col-md-12 top-nav">

                                    <Route path="/studentHome" component={StudentHome}/>
                                    <Route path="/studentRegister" component={StudentReg}/>
                                    <Route  path="/Formione" component={Student_main} />
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

