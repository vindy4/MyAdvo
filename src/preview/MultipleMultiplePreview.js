import React from 'react';

function ListItems(Props){


return(
      <li className="list-group-item" >
            <i className="fa fa-circle-thin"></i>
            &nbsp;{Props.item.value}
     </li> 
)

}


function MultipleMultiplePreview(Props) {

    const items = Props
        .items
        .map((item, index) => {
            return (
                <div key={index}>
                    <p>Q.  {item.q}  </p>
                    <ul className="list-group">
                    {   item.options.map( (i,p) =>{                        
                        return <ListItems key={p}   item={i}/>
                    } )

                    }                                            
                    </ul>

                </div>
            )
        });

    return (
        <div>
            {items}
        </div>
    )
}

export default MultipleMultiplePreview;
