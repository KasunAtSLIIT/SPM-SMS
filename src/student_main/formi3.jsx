import React from 'react';
import {Table} from 'react-bootstrap';

export default class Formithree extends React.Component {

    constructor(){
        super();
        this.state = { items: [] };
    }

    setData(e){
        e.preventDefault();
        var internshiptitle = document.getElementById('internshiptitle').value;
        var specialization = document.getElementById('specialization').value;
        var fromdate = document.getElementById('fromdate').value;
        var todate = document.getElementById('todate').value;

        var trainparty1 = document.getElementById('trainparty1').value;
        var traindesc1 = document.getElementById('traindesc1').value;
        var fromdate1 = document.getElementById('fromdate1').value;
        var todate1 = document.getElementById('todate1').value;

        var trainparty2 = document.getElementById('trainparty2').value;
        var traindesc2 = document.getElementById('traindesc2').value;
        var fromdate2 = document.getElementById('fromdate2').value;
        var todate2 = document.getElementById('todate2').value;
        var trainparty3 = document.getElementById('trainparty3').value;
        var traindesc3 = document.getElementById('traindesc3').value;
        var fromdate3 = document.getElementById('fromdate3').value;
        var todate3 = document.getElementById('todate3').value;
        var trainparty4 = document.getElementById('trainparty4').value;
        var traindesc4 = document.getElementById('traindesc4').value;
        var fromdate4 = document.getElementById('fromdate4').value;
        var todate4 = document.getElementById('todate4').value;

        var month = document.getElementById('month').value;
        var summary = document.getElementById('summary').value;
        var details = document.getElementById('details').value;


        fetch('http://localhost:3020/forms/postforms', {
            method : 'post',
            headers : {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({internshiptitle:internshiptitle,specialization: specialization,fromdate:fromdate,
                todate:todate,trainparty1:trainparty1,traindesc1:traindesc1,fromdate1:fromdate1,todate1:todate1,
                trainparty2:trainparty2,traindesc2:traindesc2,fromdate2:fromdate2,todate2:todate2,
                trainparty3:trainparty3,traindesc3:traindesc3,fromdate3:fromdate3,todate3:todate3,
                trainparty4:trainparty4,traindesc4:traindesc4,fromdate4:fromdate4,todate4:todate4,month:month,summary:summary,details:details})
        }).then(function (data) {
            return data;
        }).then(function (confirm) {
            console.log(confirm);
            alert('successfully Form I-3 details are sent for  ' + month + " month");
        })
    }

    componentDidMount(){
        fetch(`http://localhost:3020/forms/getforms`)
            .then(result=>result.json())
            .then(items=>this.setState({items}))
    }


    render() {

        const container_display = {
            marginTop : 10,
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
       
        const table ={
            borderspacing: 0,
            width: 100,
            // border:black,
        };

        var lablist = this.state.items.map(item=> {
            return(

                <Table>
                    <thead>
                    <tr>
                        <th>Internship Title</th>
                        <th>Specialization</th>
                        <th>from date</th>
                        <th>To date</th>
                        <th>Month</th>
                        <th>Monthly summary</th>
                        <th>Monthly detailed view</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{item.internshiptitle}</td>
                        <td>{item.specialization}</td>
                        <td>{item.fromdate}</td>
                        <td>{item.todate}</td>
                        <td>{item.month}</td>
                        <td>{item.summary}</td>
                        <td>{item.details}</td>
                        
                    </tr>
                    </tbody>
                </Table>
            )
        }

    )
        

        return (
            <div>
                <h3 style={title_display} className="form-title">Industrial Training Management - INTERNSHIP ACCEPTANCE FORM I-3</h3> <br/>

                <form>
                    <div className="container" style={container_display}>

                        <h5 className="form-label"> Internship Information </h5><br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Internship Title</label>
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" id="internshiptitle" required/>
                            </div>
                            <div className="col-md-3">
                                <label>Specialisation</label>
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" id="specialization" required/>
                            </div>
                        </div><br/>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Overall Internship period from</label>
                            </div>
                            <div className="col-md-3">
                                <input type="date" className="form-control" id="fromdate" required/>
                            </div>
                            <div className="col-md-3">
                                <label>Period To</label>
                            </div>
                            <div className="col-md-3">
                                <input type="date" className="form-control" id="todate" required/>
                            </div>
                        </div><br/>

                        <br/>

                        <hr />
                        <h5 className="form-label"> Internal Training Information </h5>
                        <table className="table">
                            <tr>
                                <th>Training Party</th>
                                <th>Training Description</th>
                                <th>From</th>
                                <th>To</th>
                            </tr>
                            <tr>
                                <td>ex.cambio</td>
                                <td>ex.Installation</td>
                                <td>ex.01/12/201</td>
                                <td>ex.10/12/2018</td>
                            </tr>
                            <tr>
                                <td><input type="text" id="trainparty1" required/></td>
                                <td><input type="text" id="traindesc1" required/></td>
                                <td><input type="date" id="fromdate1" required/></td>
                                <td><input type="date" id="todate1" required/></td>
                            </tr>
                            <tr>
                            <td><input type="text" id="trainparty2" required/></td>
                                <td><input type="text" id="traindesc2" required/></td>
                                <td><input type="date" id="fromdate2" required/></td>
                                <td><input type="date" id="todate2" required/></td>
                            </tr>
                            <tr>
                            <td><input type="text" id="trainparty3" required/></td>
                                <td><input type="text" id="traindesc3" required/></td>
                                <td><input type="date" id="fromdate3" required/></td>
                                <td><input type="date" id="todate3" required/></td>
                            </tr>
                            <tr>
                            <td><input type="text" id="trainparty4" required/></td>
                                <td><input type="text" id="traindesc4" required/></td>
                                <td><input type="date" id="fromdate4" required/></td>
                                <td><input type="date" id="todate4" required/></td>
                            </tr>

                        </table>

                        <hr />
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>SELECT MONTH :</label>
                                </div>
                                <div className="col-md-6">
                                <select id="month" className="month-form">
                                    <option value="janary">January</option>
                                    <option value="february">February</option>
                                    <option value="march">March</option>
                                    <option value="april">April</option>
                                    <option value="may">May</option>
                                    <option value="june">June</option>
                                    <option value="july">July</option>
                                    <option value="august">August</option>
                                    <option value="september">September</option>
                                    <option value="october">October</option>
                                    <option value="november">November</option>
                                    <option value="december">December</option>
                                </select>
                                </div>
                            </div>
                            <br/>

                            <div className="row">
                                <div className="col-md-6">
                                    <label>SUMMARY OF KEY TASKS COMPLETED FOR THE MONTH OF :</label>
                                </div>
                                <div className="col-md-6">
                                    <textarea className="form-control" id="summary" rows="10" required/>
                                </div>
                            </div><br/>

                            <div className="row">
                                <div className="col-md-6">
                                    <label>DETAILS AND NOTES OF WORK CARRIED OUT, PROBLEMS ENCOUNTERES AND HOW SOLVED ETC, SKETCHES AND DIMENSIONS TO BE GIVEN WHEREVER POSSIBLE :</label>
                                </div>
                                <div className="col-md-6">
                                    <textarea className="form-control" id="details" rows="10" required/>
                                </div>
                            </div><br/>

                            <div className="row">
                                
                                <div className="col-md-12">
                                    <button className="btn-form" onClick={this.setData.bind(this)} style={button_css}>Submit form</button>
                                    <button  className="btn-form"  type="reset" style={button_css}>Reset</button>
                                </div>
                            </div>

                            <br />
                            <br />

                        </div>
                    </div>
                        <h3><center> View details</center></h3>
                    {lablist}
                </form>
            </div>
        );
    }
}