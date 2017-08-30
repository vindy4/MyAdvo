import React from 'react';


function Header(Props){
return(
    <div className="header">
     <h1 className="brand">MYADVO</h1>
     <div className="userDetails">
          <p>Vinay,Yadav</p>
         <i className="fa fa-user-o fa-lg"></i>
        <i className="fa fa-bars fa-lg" ></i>
     </div>
    </div>
)

}



export default Header;