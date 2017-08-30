import React from 'react';
import './Main.css';
import Header from './Header';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import SocialLogin from './authentication/SocialLogin';
import CreateNewForm from './CreateNewForm';
import FillForm from './FillForm';
import CreateForm from './CreateForm';

//   this is the main wrapper component which container the over all layout all
// the other compnents are included in this.

class MainComponent extends React.Component {

    constructor(Props) {
        super(Props);
        this.state = {
            isLogged: false,
            formCreated: false,            
            adminUser:false,
            toggle: true,
            user:false
        };
        this.loginUser = this.loginUser.bind(this);
        this.toggleColor = this.toggleColor.bind(this);
        this.addForm = this.addForm.bind(this);
        this.loginAdmin = this.loginAdmin.bind(this);
    }

    loginUser() {
          this.setState({user:true,isLogged: true,})
    }

    loginAdmin(){
          this.setState({isLogged: true,adminUser:true})
    }

    toggleColor() {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }))
    }

    addForm() {        
        this.setState({formCreated: true})
    }

    render() {

        let show;
        const color = {
            backgroundColor: "#4b92ce"
        }
        
        if (this.state.isLogged) { //  if user is logged in show him the create form

            if(this.state.user===false){  //  if user has not created the form then show the create form button
                             
                    if (this.state.formCreated === false) {// else show him the question component to add the questions in the form                    
                        show = <CreateNewForm form={this.addForm}/>;
                    } else {
                        show = <CreateForm/>
                    }
            }else{ //   user is loggedin and he is the user going to fill the form.
                    show=<FillForm db={this.state.db}/>            
            }
          
        } else { // show him the login form
            let btn;
            if (this.state.toggle) {
                btn = <div>
                    <button className="btn toggle" style={color} onClick={this.toggleColor}>Login</button>
                    <button className="btn toggle" onClick={this.toggleColor}>Signup</button>
                    <div id="advoForm">
                        <Login login={this.loginAdmin} user={this.loginUser}/>
                    </div>
                    <SocialLogin/>
                </div>
            } else {
                btn = <div>
                    <button className="btn toggle" onClick={this.toggleColor}>Login</button>
                    <button className="btn toggle" onClick={this.toggleColor} style={color}>Signup</button>
                    <div id="advoForm">
                        <Signup/>
                    </div>
                    <SocialLogin/>
                </div>
            }
            show = <div className="formContainer">
                         {btn}
                   </div>;
        }
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="mainContainer">
                        <div className="row">
                            {show}
                        </div>
                    </div>
                </div>
                {/*mainContainer ends here*/}

            </div>
        );
    }
}

export default MainComponent;