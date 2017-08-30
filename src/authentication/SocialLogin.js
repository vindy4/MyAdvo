import React from 'react';

// this has the buttons for Social media login options

function SocialLogin(){
    
    return(
        <div className="row socialLogin">
            <p> : or connect with</p>
            <div className="col-lg-3 col-md-3 col-sm-4 col-3 facebookLogin">
                 <i className="fa fa-facebook"> </i>
                 <a href="#" className="btn">facebook</a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-3 googleLogin">
                 <i className="fa fa-google-plus"> </i>
                 <a href="#" className="btn">google</a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-3 linkdinLogin">
                 <i className="fa fa-linkedin"> </i>
                 <a href="#" className="btn">Linkdin</a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-3 githubLogin">
                 <i className="fa fa-github"> </i>
                 <a href="#" className="btn">github</a>
            </div>
        </div>
    )
}


export default SocialLogin;