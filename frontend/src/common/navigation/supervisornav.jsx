import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom'



export default class Supervisornav extends React.Component {
    /**
     * supervisor navigation
     */
    render() {
        return (
            <div className="navigation">
                 <Link to="/allocation"><div  className="navigation-item">
                    <span className="nav-item"  id="span-formi1_2"><i className="fa fa-dashboard"></i>Form I1- Part2</span>
                </div>
                </Link>
                <Link to="/allocation2"><div  className="navigation-item">
                    <span className="nav-item"  id="span-formi1_2"><i className="fa fa-dashboard"></i>Form I5</span>
                </div>
                </Link>
                <Link to="/allocation3"><div  className="navigation-item">
                    <span className="nav-item"  id="span-formi1_2"><i className="fa fa-dashboard"></i>Form I3 Feedback</span>
                </div>
                </Link>
            </div>
        );
    }
}

