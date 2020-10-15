import React from 'react';

class BadgeForm extends React.Component{
    // state = {};
    
  /*   handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }; */

    handleClick = e => {
        console.log('Button was clicked');
    };
    
    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log('Form was clicked');
    // };


    render(){
        return (
            <div>
                
                <form onSubmit={this.props.onSubmit} >
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.props.formValue.firstName}
                        />
                    </div><div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.props.formValue.lastName}
                        />
                    </div><div className="form-group">
                        <label htmlFor="">Email</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={this.props.formValue.email}
                        />
                    </div><div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.props.formValue.jobTitle}
                        />
                    </div><div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.props.formValue.twitter}
                        />
                    </div>
                    <button  className="btn btn-primary">
                        Save
                    </button>
                </form>
                {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
            </div>
        )
    }
}

export default BadgeForm;