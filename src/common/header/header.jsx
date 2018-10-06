import React from 'react';
import './header.css';
import Logo from "./../../IMG/logo.png";
import ReactDOM from "react-dom";
import Login from "../../views/login";

export class Header extends React.Component {
    constructor(){
        super();
        this.state={
            username:''
        }
    }

    /**
     * set logged in user in the header
     */
    componentDidMount(){
        this.setState({
            username:localStorage.getItem('username')
        });

        console.log(this.state.username)
    }

    /**
     * logout
     */
    logout(){
        ReactDOM.render(<Login/>, document.getElementById('root'));
    }

    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="image col-sm-8 col-md-8 col-lg-8 align-self-start">
                        <img className="header-logo" src={Logo} alt=""/>
                    </div>
                    <div className="col-sm-3 col-md-2 col-lg-2  align-self-start">
                        <div className="row">
                            <div className="logout-logo col-sm-4"><i className="fas fa-user-circle"></i></div>
                            <div className="logout-text col-sm-8"> <label className="username">Welcome {this.state.username}</label></div>
                        </div>

                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 align-self-start">
                        <div className="row">
                            <div className="logout-logo col-sm-7"><i className="fas fa-sign-out-alt"></i></div>
                            <div className="logout-text col-sm-4"> <label onClick={this.logout} className="username">Logout</label></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

