import React from 'react';
import axios from 'axios';


function serachingfor(term) {
    return function(x){
        return x.comp_name.toLowerCase().includes(term.toLowerCase())||!term;
    }
}
export default class Allocatesup extends React.Component {

    constructor(props){
        super(props);
        this.state={company:[{comp_name:"aaa",stu_name:"st1",stu_id:"IT15151834"},{comp_name:"bbb",stu_name:"st2",stu_id:"IT15153434"}],
        assign:[],term:''}
        
    }

    componentDidMount(){
        
        axios.get('http://localhost:8000/students')
        .then(res => {
            this.setState({company:res.data});
            console.log(res.data)
        });
        axios.get('http://localhost:8000/company')
        .then(res => {
            this.setState({com_detail:res.data});
            console.log(res.data)
        });
    
    }
    searchHandler(event){
        event.preventDefault();
        this.setState({term:event.target.value})
    }

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
                    <div className="card-header">Company Details</div>
                    <div className="card-body">
                        <div className="row"> 
                            <div className="col-md-6">
                                <div className="form-group ">
                                    <label className="col-form-label">Company Name  </label>
                                    <select className="form-control" onChange={this.searchHandler.bind(this)} ref='companyname'>
                            {this.state.company.filter(serachingfor(this.state.term)).map(users=>
                            <option>
                                    {users.comp_name}
                            </option>
                    )}
                            </select>
                                </div>  
                            </div>
                            <div className="form-group ">
                            <label className="col-form-label "
                                   htmlFor="inputDefault">E-Mail <text style={{color:'red'}}>*</text></label>
                            <input type="text" className="form-control " ref="email" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                        </div>
                            </div>
                        </div>
                   

                    <div className="card-header">Allocation details</div>
                    <div className="card-body">
                        <div className="form-group ">
                            <label className="col-form-label" htmlFor="inputDefault">Student Reg Number <text style={{color:'red'}}>*</text></label>
                            <select className="form-control" ref='studentid'>
                            {this.state.company.filter(serachingfor(this.state.term)).map(users=>
                            <option>
                                    {users.stu_id}
                            </option>
                    )}
                            </select>
                        </div>
                        <div className="form-group ">
                            <label className="col-form-label" htmlFor="inputDefault">Student Name <text style={{color:'red'}}>*</text></label>
                            <select className="form-control" ref='student'>
                            {this.state.company.filter(serachingfor(this.state.term)).map(users=>
                            <option>
                                    {users.stu_name}
                            </option>
                    )}
                            </select>
                        </div>
                        <div className="form-group ">
                            <label className="col-form-label "
                                   htmlFor="inputDefault">Supervisor <text style={{color:'red'}}>*</text></label>
                           <input type="text" className="form-control " ref="supervisor" required="required" placeholder="Enter Supervisor name "/>
                            
                        </div>
                        <div className="row"> 
                            <div className="col-md-6">
                                <div className="form-group ">
                                    <label className="col-form-label">Project  </label>
                                    <input type="text" className="form-control " ref="project" required="required" placeholder="Enter project name "/>
                                </div>  
                                <div className="form-group ">
                                    <label className="col-form-label">Duration (months) </label>
                                    <input type="number" className="form-control " ref="duration" required="required" placeholder="Enter project duration "/>
                                </div> 
                            </div>
                           
                            <div className="form-group ">
                            <label className="col-form-label "
                                   htmlFor="inputDefault">Start Date</label>
                            <input type="date" className="form-control " ref="date"/>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <div className="form-group ">
                            <label className="col-form-label "
                                   htmlFor="inputDefault">Position</label>
                            <input type="test" className="form-control " ref="position" required='required'/>
                        </div>
                            </div>
                        
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

