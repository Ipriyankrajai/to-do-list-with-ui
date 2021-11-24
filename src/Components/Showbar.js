import React from 'react'
// import './showbar.css'
import './showbar2.css'

import { MdEdit } from 'react-icons/md';


export default function Showbar() {
    return (

        // <div class="form-check">
        //     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        //     <label class="form-check-label" for="flexCheckDefault">
        //         Default checkbox
        //     </label>
        // </div>
        // <div className='main'>
        //     <div>

        //         <label class="container">
        //             <input type="checkbox" />One <MdEdit/>
        //             <span class="checkmark"></span>

        //         </label>

        //     </div>
        //     <div className='buttons'>


        //     </div>

        // </div>
        <div className="temp">
        <div className='main-input'>
            <div className="input-tag">
            <input type="checkbox" />
            </div>

            <div className="val-text">

            Lorem ipsum dolor sit amet.
             <span onClick={()=>console.log("clicked")}><MdEdit/></span>
            </div>

        </div>

        </div>

    )
}
