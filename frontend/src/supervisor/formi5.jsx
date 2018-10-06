import React from 'react';
import axios from 'axios';


export default class formi5 extends React.Component {

    constructor(props){
        super(props);
        this.state={company:[{comp_name:"aaa",stu_name:"st1",stu_id:"IT15151834"},{comp_name:"bbb",stu_name:"st2",stu_id:"IT15153434"}],
            assign:[],term:''}

    }

    componentDidMount(){
        /**
         * student service calling
         */
        axios.get('http://localhost:8000/students')
            .then(res => {
                this.setState({company:res.data});
                console.log(res.data)
            });
        /*  axios.get('http://localhost:8000/company')
          .then(res => {
              this.setState({com_detail:res.data});
              console.log(res.data)
            });
      */
    }

    /**
     * Handling user input for search
     */
    searchHandler(event){
        event.preventDefault();
        this.setState({term:event.target.value})
    }

    /**
     * button click
     */
    handleClick(){
        axios.get("http://localhost:3015/forms/getforms").then((res) => {


        })



    };
    render() {
        return (
            <div style={{textAlign:'left',marginLeft:'5px',marginRight:'5px',padding:'4px'}}>
                <h4>FormI-5</h4>

                <div className="card border-info">
                    <form>


                        <div className="card-header">Final Evaluation of the Internship Student</div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <label className="col-form-label">Student ID </label>
                                        <input type="text" className="form-control " id="supName"ref="project" required="required" />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <div className="form-group ">
                                            <label className="col-form-label">Student Name</label>
                                            <input type="number" className="form-control " id="supPhone" ref="duration" required="required" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <label className="col-form-label">Employer's Name  </label>
                                        <input type="text" className="form-control " ref="project" required="required" />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <div className="form-group ">
                                            <label className="col-form-label">Supervisor's Name </label>
                                            <input type="number" className="form-control " ref="duration" required="required" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label>Describe the differences, if any, between student's initial contract and actual assignment which developed</label>
                            <textarea style={{width:'100%',height:'100px'}}></textarea><br/>
                            <label>Performance of Student</label>
                            <table border="1">
                                <tr>
                                    <th>Category</th>
                                    <th>Above Average</th>
                                    <th>Average</th>
                                    <th>Below Average</th>
                                    <th>Comments, Examples, Observations</th>
                                </tr>
                                <tr>
                                    <td>Volume of work</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Quality of work</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Analytical ability</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Ability to resolve problems</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Accuracy and thoroughness</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Ability to work under pressure</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Oral communications</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Written communications</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Original and critical thinking</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Ability to learn</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                            </table>
                            <label>Note: Please make sure to tick only one check box for each category</label>
                            <label>Work Habits of Student</label>
                            <table border="1">
                                <tr>
                                    <th>Category</th>
                                    <th>Above Average</th>
                                    <th>Average</th>
                                    <th>Below Average</th>
                                    <th>Comments, Examples, Observations</th>
                                </tr>
                                <tr>
                                    <td>Effective in organizing work</td>
                                    <td align="center"><input  type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Takes the initiative</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Flexible to non-routine work</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Active and alert</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Attitude toward organization</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Team player</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Diligence and perseverance</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Accepts responsibility</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td align="center"><input type="checkbox" name="name1" />&nbsp;</td>
                                    <td></td>
                                </tr>

                            </table>
                            <label>Note: Please make sure to tick only one check box for each category</label>
                            <label>List positive personal characteristics (Business Acumen, Vigor, Adaptability, Teamwork, Leadership, Confidence, etc.)</label>
                            <textarea style={{width:'100%',height:'100px'}}></textarea><br/>
                            <label>List personal characteristics that will help the student in his/her professional development</label>
                            <textarea style={{width:'100%',height:'100px'}}></textarea><br/>
                            <label>How effective has the Internship Program been in meeting the needs of your organization?</label>
                            <textarea style={{width:'100%',height:'100px'}}></textarea><br/>
                            <label>Please suggest ways you feel we could make our program more meaningful to the student and you, the employer.</label>
                            <textarea style={{width:'100%',height:'100px'}}></textarea><br/>
                            <label>Please comment on the appropriateness of the student's academic training as it related to a position in your organization.</label>
                            <textarea style={{width:'100%',height:'100px'}}></textarea><br/>
                            <label>Any other comments about the student or on the Faculty Advisor:</label>
                            <textarea style={{width:'100%',height:'100px'}}></textarea><br/>
                            <br/>
                            <label><b>Overall student performance</b></label><br/>
                            <div className="row">
                            <div className="col-md-2">
                            <input type="checkbox" name="name1" />&nbsp;<label>Outstanding</label></div>
                            <div className="col-md-2">
                            <input type="checkbox" name="name1" />&nbsp;<label>Very Good</label></div>
                            <div className="col-md-3">
                            <input type="checkbox" name="name1" />&nbsp;<label>Good</label></div>
                            <div className="col-md-3">
                            <input type="checkbox" name="name1" />&nbsp;<label>Marginal</label></div>
                            <input type="checkbox" name="name1" />&nbsp;<label>Unsatisfactory</label><br/>
                            </div>
                            <label>Note: Please make sure to tick only one check box </label><br/>
                            <label>This report has been discussed with the student.</label>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <label className="col-form-label">External supervisor Name  </label>
                                        <input type="text" className="form-control " ref="project" required="required" />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <div className="form-group ">
                                            <label className="col-form-label">Date </label>
                                            <input type="date" className="form-control " ref="duration" required="required" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label>Note:Please e-mail this form within two weeks after the date of completion of the 6 month internship directly to saman.g@sliit.lk by the external supervisor’s official e-mail
                            </label><br/>
                            <div className="form-group text-right">
                                <button onClick={this.handleClick.bind(this)} className="btn btn-info pull-right">Submit </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

