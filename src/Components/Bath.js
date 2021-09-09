import React from 'react'

const Bath = (props) => {
    console.log (props)
    return (
        <div className="bath" id={props.bath}>
            {props.bath}
        </div>
    )
}

export default Bath
