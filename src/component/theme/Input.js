import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input
                placeholder='Search...'
                className='w-full focus:outline-none border-2 pl-4'
                value={props.value}
                onChange={(e) => props.funChange(e)}
            ></input>
        </div>
    )
}
