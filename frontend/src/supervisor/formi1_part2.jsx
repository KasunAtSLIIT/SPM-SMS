import React from 'react';
import axios from 'axios';

//function for convert flied value to lowercase
function serachingfor(term) {
    return function(x){
        return x.comp_name.toLowerCase().includes(term.toLowerCase())||!term;
    }
}
export default class formi1_part2 extends React.Component {

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
        var sup = this.refs.supervisor.value;
        var std = this.refs.student.value;
        var stdid = this.refs.studentid.value;
        var date = this.refs.date.value;
        var position = this.refs.position.value;
        var mail=this.refs.email.value;
        var pro = this.refs.project.value;
        var cmp = this.refs.companyname.value;
        var dur  = this.refs.duration.value;

        axios.get("http://localhost:8000/assign/" + std).then((res) => {

            if (res.data.length !== 0) {
                alert("Student is already registered.")
            }
            else {




                var assignment = {"supname":sup,"stdid":stdid,"stdname":std,"date":date,"position":position,"project":pro,"compname":cmp,"email":mail,"duration":dur};

                this.setState({assign:assignment});

                //check user fields
                if(cmp==='' || std===''|| sup==='' || mail==='' || position===''||pro===''||dur===''){
                    alert('Enter Correct details');
                }
                else{

                    axios.post('http://localhost:8000/assign',assignment).then(function(data){

                        alert("Assign Succesfully !!!");
                    });

                }
            }
        })

    };
    render() {
        return (
            <div style={{textAlign:'left',marginLeft:'5px',marginRight:'5px',padding:'4px'}}>
                <h4>Supervisor Allocation</h4>
                <div className="card border-info">
                    <form>


                        <div className="card-header">To be filled by the employer</div>
                        <div className="card-body">
                            <div className="form-group ">
                                <label className="col-form-label" htmlFor="inputDefault">Employer's Name <text style={{color:'red'}}>*</text></label>
                                <input type="text" className="form-control " ref="project" required="required" />
                            </div>
                            <div className="form-group ">
                                <label className="col-form-label" htmlFor="inputDefault">Employer's Address <text style={{color:'red'}}>*</text></label>
                                <input type="text" className="form-control " ref="project" required="required" />
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <label className="col-form-label">Supervisor's Name  </label>
                                        <input type="text" className="form-control " ref="project" required="required" />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                <div className="form-group ">
                                    <div className="form-group ">
                                        <label className="col-form-label">Supervisor's Phone </label>
                                        <input type="number" className="form-control " ref="duration" required="required" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <label className="col-form-label">Supervisor's Title  </label>
                                        <input type="text" className="form-control " ref="project" required="required" />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                <div className="form-group ">
                                    <div className="form-group ">
                                        <label className="col-form-label">Supervisor's Email </label>
                                        <input type="number" className="form-control " ref="duration" required="required" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group ">
                                        <label className="col-form-label">Internship start date</label>
                                        <input type="date" className="form-control " ref="project" required="required" />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                <div className="form-group ">
                                    <div className="form-group ">
                                        <label className="col-form-label">Internship end date </label>
                                        <input type="date" className="form-control " ref="duration" required="required" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <label>(Recomended period is no less than 6 months)</label>
                            <div className="form-group ">
                                <div className="col-md-6">
                                    <label className="col-form-label">No of Hours per week </label>
                                    <input type="number" className="form-control " ref="duration" required="required" />
                                </div>
                            </div>
                            <label>Please list the tasks student is expected to complete</label>
                            <textarea style={{width:'100%',height:'100px'}}></textarea><br/>
                            <label>List what student will learn during the internship period</label>
                            <textarea style={{width:'100%',height:'100px'}}></textarea><br/>
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

