import React from 'react';

function BinaryPreview(Props) {

    const items = Props.items.map((item, index) => {
            return (
                <div key={index}>
                    <p>Q. {item.q}
                    </p>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <i className="fa fa-circle-thin"></i>
                            &nbsp; {item.first}
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-circle-thin"></i>
                            &nbsp; {item.second}
                        </li>
                    </ul>
                </div>
            )

        })

    return (
        <div >
            {items}
        </div>
    )
}

export default BinaryPreview;