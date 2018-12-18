import React from 'react'
import ContactApi from '../components/api/contact'

class Contact extends React.Component {
    handleSubmit(e){
        e.preventDefault();
        let message = e.target.elements[0].value
        new ContactApi().sendMessage(message, (response)=> {
            console.log(response);
        }, (error) => {
            console.log(error);
        })

    };

    
	render () {
		return (
            <div className="container" style = {{padding: '40px 0'}}>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1>Contact Us.</h1>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" name="message" className="form-control" placeholder="Send Us a Message!"/>
                            <button className="btn btn-primary" type="submit">Contact Us</button>
                        </form>
                    </div>
                </div>
            </div>
        ) 
    } 
} 
export default Contact