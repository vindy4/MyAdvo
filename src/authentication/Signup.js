import React from 'react';

//  this is the sign up form container. it has the form for signup
function Signup(){

    return(
        <div>
              <form>
                <div className="form-group">                      
                    <input
                        type="text"
                        className="form-control"
                        id="Name"                       
                        placeholder="First Name and Last Name"/>                    
                </div>
                <div className="form-group">                      
                    <input
                        type="email"
                        className="form-control"
                        id="Email"                       
                        placeholder="Username or Email"/>
                    
                </div>
                <div className="form-group">                 
                    <input
                        type="password"
                        className="form-control"
                        id="Password"
                        placeholder="Password"/>
                </div>        
                <button type="submit" className="btn btn-success">Login</button>
            </form>
        </div>
    )
}


export default Signup;