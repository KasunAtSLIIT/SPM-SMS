import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom'
import Formione from "../../student_main/formi1";
import Formithree from "../../student_main/formi3";

export default class Studentnav extends React.Component {
    render() {
        return (
            <div className="navigation">
                <Link to="/Formione"><div  className="navigation-item">
                    <span className="nav-item"><i className="fa fa-dashboard"></i>Form I-1</span>
                </div>
                </Link>

                <Link to="/Formithree"><div  className="navigation-item">
                    <span className="nav-item"><i className="fa fa-dashboard"></i>Form I-3</span>
                </div>
                </Link>

                {/*<Link to="/allocation"><div  className="navigation-item">*/}
                    {/*<span className="nav-item"><i className="fa fa-dashboard"></i>Form I-5</span>*/}
                {/*</div>*/}
                {/*</Link>*/}

                <Link to="/allocation"><div  className="navigation-item">
                    <span className="nav-item"><i className="fa fa-dashboard"></i>Form I-6</span>
                </div>
                </Link>


            </div>
        );
    }
}

