import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom'


export default class StudentNav extends React.Component {
    /**
     * student navigation
     */
    render() {
        return (
            <div className="navigation">
                <Link to="/studentHome">
                    <div className="navigation-item">
                        <span className="nav-item"><i className="fa fa-dashboard"></i>Home</span>
                    </div>
                </Link>
                <Link to="/studentRegister">
                    <div className="navigation-item">
                        <span className="nav-item"><i className="fa fa-dashboard"></i>Register</span>
                    </div>
                </Link>
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

                <Link to="/Formisix"><div  className="navigation-item">
                    <span className="nav-item"><i className="fa fa-dashboard"></i>Form I-6</span>
                </div>
                </Link>


            </div>
        );
    }
}

