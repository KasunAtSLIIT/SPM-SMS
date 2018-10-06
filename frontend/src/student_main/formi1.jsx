import React from 'react';

export default class Formione extends React.Component {

    constructor(){
        super();
        //this.state = { items: [] };
    }

    setData01(e){
        e.preventDefault();
        var student_id = document.getElementById('student_id').value;
        var student_name = document.getElementById('student_name').value;
        var address = document.getElementById('address').value;
        var home_phone = document.getElementById('home_phone').value;
        var mobile = document.getElementById('mobile').value;
        var email = document.getElementById('email').value;
        var semi = document.getElementById('semi').value;
        var year = document.getElementById('year').value;
        var cgpa = document.getElementById('cgpa').value;


        fetch('http://localhost:3020/students/postStudents', {
            method : 'post',
            headers : {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({student_id:student_id,student_name: student_name, address:address , 
                home_phone:home_phone,mobile:mobile, email:email,semi:semi,year:year,cgpa:cgpa})
        }).then(function (data) {
            return data;
        }).then(function (confirm) {
            console.log(confirm);
            alert('successfully student details are sent to the supervisor..!');
        })
    }

    render() {

        const container_display = {
            marginTop : 60,
        };
        const title_display = {
            marginTop : 45,
        };
        const button_css ={
            width: 200,
            height: 40,
            fontSize: 16,
            marginLeft: 300,
        };
        const margin_1 ={
            marginLeft: 250,
        };

        return (
            <div>
                <h3 style={title_display} className="form-title">Industrial Training Management - INTERNSHIP ACCEPTANCE FORM I-1</h3> <br/>
                <h4>Enter student details</h4>
                <hr />
                <form className="form-form">
                    <div className="container" style={container_display}>
                        <div className="row">
                            <div className="col-md-3">
                                <label>Student ID</label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" maxLength="10" className="form-control" id="student_id"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Student's Name</label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="student_name"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Address</label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="address"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Home phone</label>
                            </div>
                            <div className="col-md-6">
                                <input type="number" className="form-control" maxLength="10" id="home_phone"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Mobile Number</label>
                            </div>
                            <div className="col-md-6">
                                <input type="number" maxLength="10" className="form-control" id="mobile"/>
                            </div>
                        </div>
                        <br/>


                        <div className="row">
                            <div className="col-md-3">
                                <label>E-mail Address</label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="email"/>
                                <h6>** Use comma to seperate multiple email addresses</h6>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-2">
                                <label>Semester</label>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" id="semi"/>
                            </div>
                            <div className="col-md-2">
                                <label>Year</label>
                            </div>
                            <div className="col-md-2">
                                <input type="number" className="form-control" id="year"/>
                            </div>
                            <div className="col-md-2">
                                <label>CGPA</label>
                            </div>
                            <div className="col-md-2">
                                <input type="number" className="form-control" id="cgpa"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <button className="btn-form" type="submit" style={button_css} onClick={this.setData01.bind(this)} >Submit Form</button>
                            </div>
                            <div className="col-md-3">
                                <button className="btn-form" type="reset" style={button_css}>Cancel</button>
                            </div>
                        </div>
                        <br />
                        <br />

                    </div>
                </form>
            </div>
        );
    }
}