import React from 'react'

const Bedroom = (props) => {
    console.log(props.bedrooms)
    return (
        <div className="bedroom" id={`bed-${props.bedrooms}`}>
           Bedroom {props.bedrooms}
        </div>
    )
}

export default Bedroom
