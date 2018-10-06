import React from 'react';
import axios from 'axios';


export default class formi1_part2 extends React.Component {

    constructor(props){
        super(props);
        this.state={company:[{comp_name:"aaa",stu_name:"st1",stu_id:"IT15151834"},{comp_name:"bbb",stu_name:"st2",stu_id:"IT15153434"}],
            assign:[],term:''}

    }

    componentDidMount() {
        /**
         * student service calling
         */
        axios.get('http://localhost:8000/students')
            .then(res => {
                this.setState({company: res.data});
                console.log(res.data);
            });


    }
    render() {
        return (
            <div style={{textAlign:'left',marginLeft:'5px',marginRight:'5px',padding:'4px'}}>
                <h4>Part2- Form I1</h4>
                <button  className="btn btn-info pull-left" style={{align:"right"}}>View Part1 </button>
                <div className="card border-info">
                    <form method="post" action="send">


                        <div className="card-header">To be filled by the employer</div>
                        <div className="card-body">
                            <div className="form-group ">
                                <label className="col-form-label" htmlFor="inputDefault">Employer's Name <text style={{color:'red'}}>*</text></label>
                                <input type="text" className="form-control " name="empName" ref="project" required="required" />
                            </div>
                            <div className="form-group ">
                                <label className="col-form-label" htmlFor="inputDefault">Employer's Address <text style={{color:'red'}}>*</text></label>
                                <input type="text" className="form-control " name="empAddress" ref="project" required="required" />
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <label className="col-form-label">Supervisor's Name  </label>
                                        <input type="text" className="form-control " name="supName"ref="project" required="required" />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                <div className="form-group ">
                                    <div className="form-group ">
                                        <label className="col-form-label">Supervisor's Phone </label>
                                        <input type="number" className="form-control " name="supPhone" ref="duration" required="required" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <label className="col-form-label">Supervisor's Title  </label>
                                        <input type="text" className="form-control " name="supTitle" ref="project" required="required" />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                <div className="form-group ">
                                    <div className="form-group ">
                                        <label className="col-form-label">Supervisor's Email </label>
                                        <input type="number" className="form-control " name="supEmail" ref="duration" required="required" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <label className="col-form-label">Internship start date</label>
                                        <input type="date" className="form-control " name="stDate" ref="project" required="required" />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                <div className="form-group ">
                                    <div className="form-group ">
                                        <label className="col-form-label">Internship end date </label>
                                        <input type="date" className="form-control " name="endDate" ref="duration" required="required" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <label>(Recomended period is no less than 6 months)</label>
                            <div className="form-group ">
                                <div className="col-md-6">
                                    <label className="col-form-label">No of Hours per week </label>
                                    <input type="number" className="form-control " name="hoursPerWeek" ref="duration" required="required" />
                                </div>
                            </div>
                            <label>Please list the tasks student is expected to complete</label>
                            <textarea style={{width:'100%',height:'100px'}} name="task"></textarea><br/>
                            <label>List what student will learn during the internship period</label>
                            <textarea style={{width:'100%',height:'100px'}} name="period"></textarea><br/>
                            <div className="form-group text-right">
                                <button  className="btn btn-info pull-right">Submit </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

