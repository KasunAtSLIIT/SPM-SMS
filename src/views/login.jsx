
import React, { Component } from 'react';
import './login.css';
import LeftImage from './login1.jpg';
import Logo from './logo.png';
import ReactDOM from "react-dom";
import CompanyApp from "../app_view/company_view";
import ExaminerApp from "../app_view/examiner_view";
import SupervisorApp from "../app_view/supervisor_view";
import StudentApp from "../app_view/student_view";
import BaseUrl from "../constants/base-url";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
            open:false,
            newUsername:'',
            newPassword:'',
            confirmPassword:'',
            role:''
        };
    }

    notifySuccess = (message) => {
        toast.success(message, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    notifyError = (message) => {
        toast.error(message, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
        console.log(this.state);
    }

    validation(){
        if(!this.state.newUsername){
            this.notifyError("Please enter a username");
            return false;
        }else if(!this.state.newPassword){
            this.notifyError("Please enter a password");
            return false;
        }else if(!this.state.role){
            this.notifyError("Please select a user role");
            return false;
        }else{
            return true;
        }
    }

    handleSubmit=(event)=>{
        var user={
            username:this.state.username,
            password:this.state.password
        }
        event.preventDefault();
        BaseUrl.post(`users`,user)
            .then(res => {
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('userRole',res.data.userRole);
                localStorage.setItem('username',res.data.username);
                sessionStorage.setItem('token',res.data.token);
                if(localStorage.getItem('userRole')==='company'){
                    ReactDOM.render(<CompanyApp/>, document.getElementById('root'));
                }else if(localStorage.getItem('userRole')==='examiner'){
                    ReactDOM.render(<ExaminerApp/>, document.getElementById('root'));
                }else if(localStorage.getItem('userRole')==='supervisor'){
                    ReactDOM.render(<SupervisorApp/>, document.getElementById('root'));
                }else{
                    ReactDOM.render(<StudentApp/>, document.getElementById('root'));
                }
            }).catch(error=>{
            this.notifyError("Invalid user..");
        })
    }

    handleSignUp=(event)=>{
        event.preventDefault();
        if(this.state.newPassword!==this.state.confirmPassword){
            this.notifyError("Passwords does not match properly")
        }else if(!this.validation()){

        }
        else{
            var user={
                username:this.state.newUsername,
                password:this.state.newPassword,
                userRole:this.state.role
            }
            BaseUrl.post('user',user).then(res=>{
                this.handleClose();
                this.notifySuccess("Successfully Submitted.!")
            }).catch(error=>{

            })
        }

    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const {username,password,newUsername,newPassword,confirmPassword,role}=this.state;
        return (
            <div className="login-page">
                <ToastContainer/>
                <div className="row">
                    <div className="left-panel col-sm-9 col-md-9 col-lg-9">
                        <img className="imgLeft img-fluid" alt="" src={LeftImage}/>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <div className="row right-panel justify-content-center">
                            <img className="logo img-fluid" alt="" src={Logo}/>
                            <div className="text"><h4>Sri Lanka Institute of Information Technology</h4></div><br/>
                            <div className="card col-md-10 col-sm-10 col-lg-10">
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input type="text" className="form-control" value={username.value} name="username" onChange={this.handleChange} placeholder="Enter username"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control"  value={password.value} name="password" onChange={this.handleChange}  placeholder="Enter Password"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary col-md-12 col-sm-12 col-lg-12">Login</button><br/><br/>
                                        <button type="button" onClick={this.handleClickOpen} className="btn btn-success col-md-12 col-sm-12 col-lg-12">Signup</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Login to this system, Please enter below information and signup.
                        </DialogContentText>
                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" name="newUsername" className="form-control" value={newUsername.value} onChange={this.handleChange} required/>
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Role</label>
                                <select className="form-control" name="role" onChange={this.handleChange} value={role.value}>
                                    <option>Select--</option>
                                    <option value="student">Student</option>
                                    <option value="company">Company</option>
                                    <option value="supervisor">Supervisor</option>
                                    <option value="examiner">Examiner</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="newPassword" className="form-control" onChange={this.handleChange} value={newPassword.value}/>
                            </div>
                            <div className="form-group">
                                <label>confirm Password</label>
                                <input type="password" name="confirmPassword" className="form-control" onChange={this.handleChange} value={confirmPassword.value}/>
                            </div>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSignUp} color="primary">
                            Signup
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Login;

