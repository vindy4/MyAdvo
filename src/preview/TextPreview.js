import React from 'react';

function TextPreview(Props){

  const items = Props.items.map( (item,index)  =>{
           return(
               <div key={index}>
                    <p>Q. {item.q}</p>
                    <p>A. answer will be added here</p>
               </div>
           )} );

    return(    
        <div id="textPreviw"> 
            {items}
        </div>
    )
}

export default TextPreview;