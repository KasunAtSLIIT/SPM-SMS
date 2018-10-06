import React from 'react';
import iconn from "./images/icon.png";


export default class Formithree extends React.Component {
    render() {

        const btn_form6 = {
            height:100,
            width:100
        };


        return (
            <div>
                <hr />
                <h3>Industrial Training Management - INTERNSHIP ACCEPTANCE FORM I-3</h3> <br/>

                <hr />

                <form>
                    <div className="container">

                        <h5 className="form-label"> Internship Information </h5><br/>
                    
                        <a href='../doc/Form I-6.pdf' className="form-6-download" download>Download Industrial Report</a>
                        <br />
                        <img href='../doc/Form I-6.pdf' className="form6-btn" src={iconn} alt="" style={btn_form6}/>
                        
                    </div>
                </form>
            </div>
        );
    }
}