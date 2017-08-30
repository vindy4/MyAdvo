import React from 'react';
import TextPreview from './TextPreview';
import MultipleOnePreview from './MultipleOnePreview';
import BinaryPreview from './BinaryPreview';
import MultipleMultiplePreview from './MultipleMultiplePreview';

function Preview(Props){


    const text= Props.items.filter( (item,index) =>{
        return (item.type ==="text")
    } )

       const one= Props.items.filter( (item,index) =>{
        return (item.type ==="one")
    } )
       const multiple= Props.items.filter( (item,index) =>{
        return (item.type ==="multiple")
    } )
       const binary= Props.items.filter( (item,index) =>{
        return (item.type ==="binary")
    } )

    return(
        <div id="preview">
           <h4>Preview</h4> 
           <TextPreview   items={text} />
           <MultipleOnePreview items={one}/>
           <MultipleMultiplePreview items={multiple}/>
           <BinaryPreview items={binary}/>
        </div>
    )
}

export default Preview;