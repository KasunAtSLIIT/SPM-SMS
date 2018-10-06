import React from 'react';
import './../App.css';

export default class Formione extends React.Component {

    
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

        //Inline CSS For the Form
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
        const select_option = {
            width : 500,
        };

        return (
            <div>
                
                {/*//BODY PART - HEADING PART*/}
                <h3 style={title_display}>Industrial Training Management - INTERNSHIP ACCEPTANCE FORM I-1</h3> <br/>
                <center><h5>(Enter Student ID and Check Details**)</h5>
                </center>

                <form>
                    <div className="container" style={container_display}>

                        <div className="row" style={margin_1}>
                            <div className="col-md-2">
                                <label>Student ID</label>
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" id="studentid"/>
                                <button type="submit" style={button_css}>Search Student Details</button>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Select Supervisor using Name</label>
                            </div>
                            <div className="col-md-6">
                                <select style={select_option} className="form-control" id="testpriority">
                                    {/*//TODO: TO RETRIEVE AL THE SUPERVISOR'S DETAILS TO THE FORM*/}
                                    <option id="p0">--Choose one--</option>
                                    <option id="p1">Mr.xxxxxxxxxxxxxxx</option>
                                    <option id="p2">Mr.yyyyyyyyyyyyyyy</option>
                                    <option id="p3">Mr.uuuuuuuuuuuuuuu</option>
                                </select>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Student's Name</label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="studentname"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Address</label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="studentaddress"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Home phone</label>
                            </div>
                            <div className="col-md-6">
                                <input type="number" className="form-control" id="studentnum"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Mobile Number</label>
                            </div>
                            <div className="col-md-6">
                                <input type="number" className="form-control" id="studenthpnum"/>
                            </div>
                        </div>
                        <br/>


                        <div className="row">
                            <div className="col-md-3">
                                <label>E-mail Address</label>
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" id="studentemail"/>
                                <h6>** Use comma to seperate multiple email addresses</h6>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-2">
                                <label>Semester</label>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" id="studentsemester"/>
                            </div>
                            <div className="col-md-2">
                                <label>Year</label>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" id="studentyr"/>
                            </div>
                            <div className="col-md-2">
                                <label>CGPA</label>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" id="studentcgpa"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-md-3">
                                {/*//BUTON PART --> TODO : DISPLAY A SUCCESSFULL MESSAGE WHEN SUBMIT BUTTON IS PRESSED.*/}
                                <button type="submit" style={button_css}>Submit Form</button>
                            </div>
                            <div className="col-md-3">
                                <button type="reset" style={button_css}>Cancel</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}
