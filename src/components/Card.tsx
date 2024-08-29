import React from 'react'

const Card = (props) => {
    return (
        <div className='shadow-md ' {...props}>{props.children}</div>
    )
}

export default Card