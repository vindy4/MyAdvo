import React from 'react';

// this is the Login form container. it has the login form.

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
        this.handleUserName = this
            .handleUserName
            .bind(this);
        this.handlePassword = this
            .handlePassword
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleUserName(e) {
        this.setState({username: e.target.value})
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.password.toLowerCase() === "admin" && this.state.username.toLowerCase() === "admin") {         
            this.props.login();
        } else if(this.state.password.toLowerCase() === "user" && this.state.username.toLowerCase() === "user") {

          this.props.user();
        }else{
            alert("username password not correct");
        } 
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="Email"
                            value={this.state.username}
                            placeholder="Username or Email"
                            onChange={this.handleUserName}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="Password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handlePassword}/>
                    </div>
                    <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;