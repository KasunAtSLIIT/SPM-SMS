import React, {Component} from 'react';
import axios from 'axios';


export default class StuRegister extends Component {

    /**
     * student registration
     */
    handleformSubmit(e) {
        e.preventDefault();

        const student_id = this.refs.stu_dit.value;
    /**
     * call student service with the form student id and checks if the new student is already registered with a company.
     *If student id not exists,student form data collected and student and ompany backend services are called to 
     *store the registration info. 
     */

        axios.get("http://localhost:8000/students/" + student_id).then((res) => {

            if (res.data.length !== 0) {
                alert("Student ID : " + student_id + " is already registered.")
            }
            else {
                const compData = {
                    "name": this.refs.comp_name.value,
                    "address": this.refs.comp_address.value,
                    "e_mail": this.refs.comp_mail.value
                };
                console.log(compData);

                axios.post("http://localhost:8000/company", compData).then((res) => {
                    const stuData = {
                        "stu_id": this.refs.stu_dit.value,
                        "company_id": res.data._id,
                        "comp_name":res.data.name,
                        "stu_name": this.refs.stu_name.value,
                        "address": this.refs.stu_address.value,
                        "year": this.refs.year.value,
                        "semester": this.refs.sem.value,
                        "e_mail": this.refs.stu_mail.value,
                        "home_phone": this.refs.home.value,
                        "mobile": this.refs.mobile.value,
                        "cgpa":String(this.refs.cgpa.value)
                    };
                    console.log(stuData);
                    axios.post("http://localhost:8000/students", stuData).then((res) => {
                               alert("Successfully registered with a company.");
                    }).catch(err => {
                        alert("Error Occurred While storing student data. " + err);
                    })
                }).catch(err => {
                    alert("Error Occurred While storing company data. " + err);
                })
            }
        }).catch(err => {
            alert("Error Occurred While retrieving student data. " + err);
        });
    }

    render() {
        return (
            <div style={{textAlign: 'left', marginTop: '5px'}}>
                <h4>Student Registration</h4>
                <div className="card border-info mb-3">
                    <form onSubmit={this.handleformSubmit.bind(this)}>
                        <div className="card-header">Student Info</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <label className="col-form-label" htmlFor="inputDefault">ID
                                            No <text style={{color: 'red'}}>*</text></label>
                                        <input type="text" className="form-control " ref="stu_dit"
                                               required="required" pattern="(IT|it|BM|bm)[1-9]{8}$"
                                               placeholder="Enter your DIT No "/>
                                    </div>
                                    <div className="form-group ">
                                        <label className="col-form-label " htmlFor="inputDefault">Full
                                            Name <text style={{color: 'red'}}>*</text></label>
                                        <input type="text" className="form-control " ref="stu_name"
                                               required="required" placeholder="Enter your full name"/>
                                    </div>
                                    <div className="form-group ">
                                        <label className="col-form-label "
                                               htmlFor="inputDefault">Address <text style={{color: 'red'}}>*</text>
                                        </label>
                                        <input type="text" className="form-control " ref="stu_address"
                                               required="required"/>
                                    </div>
                                    <div className="form-group ">
                                        <label className="col-form-label" htmlFor="inputDefault">Mobile Phone <text
                                            style={{color: 'red'}}>*</text></label>
                                        <input type="text" className="form-control " ref="mobile"
                                               required="required" pattern="[0-9]{10}$"
                                               placeholder="Enter your mobile phone no"/>
                                    </div>
                                    <div className="form-group ">
                                        <label className="col-form-label " htmlFor="inputDefault">Home
                                            Phone</label>
                                        <input type="text" className="form-control " ref="home" pattern="[0-9]{10}$"
                                               placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <label className="col-form-label "
                                               htmlFor="inputDefault">E-Mail <text style={{color: 'red'}}>*</text>
                                        </label>
                                        <input type="text" className="form-control" ref="stu_mail"
                                               required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                               placeholder="johndoe@gmail.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label "
                                               htmlFor="inputDefault">Year <text style={{color: 'red'}}>*</text>
                                        </label>
                                        <select className="custom-select" required="required" ref="year">
                                            <option value="">select year</option>
                                            <option value="1">First</option>
                                            <option value="2">Second</option>
                                            <option value="3">Third</option>
                                            <option value="3">Forth</option>
                                        </select>
                                    </div>
                                    <div className="form-group ">
                                        <label className="col-form-label "
                                               htmlFor="inputDefault">Semester <text style={{color: 'red'}}>*</text>
                                        </label>
                                        <select className="custom-select" required="required" ref="sem">
                                            <option value="">select semester</option>
                                            <option value="1">First</option>
                                            <option value="2">Second</option>
                                        </select></div>
                                    <div className="form-group ">
                                        <label className="col-form-label "
                                               htmlFor="inputDefault">CGPA <text style={{color: 'red'}}>*</text>
                                        </label>
                                        <input type="text" className="form-control " required="required"
                                               pattern="([0-3].[0-9]{2}|4.00)$" placeholder="4.00" ref="cgpa"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-header">Company Info</div>
                        <div className="card-body">
                            <div className="form-group ">
                                <label className="col-form-label" htmlFor="inputDefault">Name <text
                                    style={{color: 'red'}}>*</text></label>
                                <input type="text" className="form-control " required="required" ref="comp_name"/>
                            </div>
                            <div className="form-group ">
                                <label className="col-form-label "
                                       htmlFor="inputDefault">Address <text style={{color: 'red'}}>*</text></label>
                                <input type="text" className="form-control " id="name" required="required"
                                       ref="comp_address"/>
                            </div>
                            <div className="form-group ">
                                <label className="col-form-label "
                                       htmlFor="inputDefault">E-Mail <text style={{color: 'red'}}>*</text></label>
                                <input type="text" className="form-control " id="name" required="required"
                                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" ref="comp_mail"/>
                            </div>
                            <div className="form-group text-right">
                                <button type="submit" className="btn btn-info pull-right"
                                        >Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
