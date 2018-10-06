import React from 'react';
import axios from 'axios';


export default class formi3_feedback extends React.Component {

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
                <h4>Feedback- Form I3</h4>
                <button  className="btn btn-info pull-right">View form I3 </button>
                <div className="card border-info">
                    <form method="post" action="send">


                        <div className="card-header">REMARKS AND CERTIFICATION BY THE EXTERNAL SUPERVISOR FOR THE MONTH OF MONTH/YEAR</div>
                        <div className="card-body">
                            <textarea style={{width:'100%',height:'100px'}}></textarea><br/>
                            <button  className="btn btn-info pull-left" align="right">Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

