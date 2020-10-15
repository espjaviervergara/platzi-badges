import React from 'react';
import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import api from '../api';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';

class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form:{
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',

    }};

    handleChange = e => {
        this.setState ({
            form : {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error:null });
        try {
            await api.badges.create(this.state.form);
            this.setState({ 
                loading: false,
             });
             this.props.history.push('/badges');
        } catch (error) {
            this.setState({
                loading:false,
                error:error
            })
        }
    }

    render(){
        if (this.state.loading) {
            return <PageLoading />;
        }
        return (
        <React.Fragment>
            
            <div className="BadgeNew__hero">
                <img className="BadgeNew__hero-img img-fluid" src={header} alt="Logo"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            twitter={this.state.form.twitter || 'TWITTER'}
                            jobTitle={this.state.form.jobTitle || 'JOBTITLE'}
                            email={this.state.form.email || 'EMAIL'}
                            avatarUrl="https://s.gravatar.com/avatar/8877659cc5e5e5ee2bd1dedb6d179ed7?s=80"
                        />
                    </div>

                    <div className="col-6">
                    <h1>New attendant</h1>
                        <BadgeForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValue={this.state.form} 
                            error={this.state.error}
                        />
                    </div>

                </div>

            </div>
        </React.Fragment>
        
        )
    }
}

export default BadgeNew;