import React from 'react';

function Option(Props){
    if(Props.item === null){
        return null
    }
    return(
        <div>
             <div className="form-check">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                className="form-check-input"   
                                name="single"                 
                            />
                            {Props.item}
                        </label>
             </div>
        </div>
    )
}


function OptionMl(Props){
    if(Props.item === null){
        return null
    }
    return(
        <div>
             <div className="form-check">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                className="form-check-input"                                  
                            />
                            {Props.item}
                        </label>
             </div>
        </div>
    )
}


function FinalForm(Props) {

 //  setting up the text based questions  
    let ar = new Array(Props.text.length);
    var len = Props.text.length, i;
        for (i = 0; i < len; i++) {             
            ar[i] = Props.text[i];
        }
     
    let text= ar.map(  (item,index) =>{
           return(
                <div className="form-group" key={index}>
                <p>Q. {item.question}</p>                            
                <textarea className="form-control" id="Textarea" rows="3"></textarea>
            </div>
           )
    } )

//   setting up components for  multiple and one correct
     ar = new Array(Props.one.length);
        for (let i = 0; i < Props.one.length; i++) {             
            ar[i] = Props.one[i];
        }

    let one= ar.map(  (item,index) =>{
           return(
                <fieldset className="form-group" key={index}>
                    <legend>Q. {item.question}</legend>                   
                    <Option item={item.option1} /> 
                    <Option item={item.option2} /> 
                    <Option item={item.option3} /> 
                    <Option item={item.option4} /> 
                    <Option item={item.option5} /> 
                </fieldset>
           )
    } )


    //   setting up components for  multiple and multiple correct
        ar = new Array(Props.multiple.length);
        for (let i = 0; i < Props.multiple.length; i++) {             
            ar[i] = Props.multiple[i];
        }

    let multiple= ar.map(  (item,index) =>{
           return(
                <fieldset className="form-group" key={index}>
                    <legend>Q. {item.question}</legend>                   
                    <OptionMl item={item.option1} /> 
                    <OptionMl item={item.option2} /> 
                    <OptionMl item={item.option3} /> 
                    <OptionMl item={item.option4} /> 
                    <OptionMl item={item.option5} /> 
                </fieldset>
           )
    } )


// setting up the binary component questions
        ar = new Array(Props.binary.length);
        for (let i = 0; i < Props.binary.length; i++) {             
            ar[i] = Props.binary[i];
        }

    let binary= ar.map(  (item,index) =>{
           return(
              <div key={index}>
                    <p>Q. {item.question}</p> 
                     <div className="form-check">
                    <label className="form-check-label">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="binary"
                        />
                        {item.first}
                    </label>
                </div>
                <div className="form-check disabled">
                    <label className="form-check-label">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="binary"
                        />
                        {item.second}
                    </label>
            </div>
              </div>
           )
    } )



    return (
        <div className="finalform">  {/* below components will be put into switch statement to produce the form */}
            {text}
            {one}
            {multiple}
            {binary}        
          <button className="btn btn-primary">Submit</button> 
        </div>
    )
}

export default FinalForm;