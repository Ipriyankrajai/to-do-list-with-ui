import React from 'react'
import './input.css'

export default function Input() {
    return (
        <div className="temp">
        <div className='input-cont'>
            <input type="text" placeholder='What have you worked on?'  />
            <button  class="btn btn-primary">ADD</button>
        </div>
        </div>

    )
}
