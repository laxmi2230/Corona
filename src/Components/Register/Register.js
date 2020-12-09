import React, { Component, useState } from 'react';
import { withRouter } from "react-router-dom";

import './Register.css'

const nameValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') {
        return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
        return 'Invalid characters';
    }
    if (fieldValue.trim().length < 3) {
        return `${fieldName} needs to be at least three characters`;
    }
    return null;
};

const emailValidation = email => {
    if (
        /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(
            email,
        )
    ) {
        return null;
    }
    if (email.trim() === '') {
        return 'Email is required';
    }
    return 'Please enter a valid email';
};


const ageValidation = age => {
    if (!age) {
        return 'Age is required';
    }
    if (age < 18) {
        return 'Age must be at least 18';
    }
    if (age > 99) {
        return 'Age must be under 99';
    }
    return null;
};


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: 'male',
            age: '',
            email: '',
            username: '',
            password: '',

        };
        this.handleGender = this.handleGender.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.submit = this.submit.bind(this);
    }
    handleName(event) {
        this.setState({ name: event.target.value });
    }

    handleAge(event) {
        this.setState({ age: event.target.value });
    }

    handleGender(event) {
        this.setState({ value: event.target.value });
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleUsername(event) {
        this.setState({ username: event.target.value });
    }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }


    submit() {
        this.props.history.push("/Upload");
    }




    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="register" className="ba b--transparent ph0 mh0">
                            <br /><br />
                            <form>
                                <div className="form-group">
                                    <label className="db fw6 lh-copy f6" htmlFor="name"><strong>Name		</strong></label>
                                    <input required value={this.state.name} onChange={this.handleName} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                                </div>
                                <br></br>
                                <div>
                                    <label className="db fw6 lh-copy f6" htmlFor="gender"><strong>Gender	</strong></label>
                                    <select value={this.state.value} onChange={this.handleGender}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option selected value="other">Other</option>
                                    </select>
                                </div>
                                <br></br>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="age"><strong>Age		</strong></label>
                                    <input required value={this.state.age} onChange={this.handleAge} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="age" min="1" max="100" id="age" />
                                </div>
                                <br></br>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address"><strong>Email		</strong></label>
                                    <input required value={this.state.email} onChange={this.handleEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                                </div>
                                <br></br>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="username"><strong>Username		</strong></label>
                                    <input required value={this.state.username} onChange={this.handleUsername} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="username" name="username" id="username" />
                                </div>
                                <br></br>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password"><strong>Password			</strong></label>
                                    <input required value={this.state.password} onChange={this.handlePassword} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                                </div>
                                <br />
                                <button variant="info" onClick={this.submit}>Submit</button>

                            </form>
                        </fieldset>
                    </div>
                </main>
            </article>

        )
    }
}



export default withRouter(Form);