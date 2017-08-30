import React from 'react';


function CreateNewForm(Props){

    return(
        <div className="newForm">
            <h4>Click to add new form</h4>
            <div id="addForm"  onClick={Props.form} >
                <i className="fa fa-plus fa-5x"></i>
            </div>            
        </div>
    )
}


export default CreateNewForm;