import React from 'react'
import './navbartabs.css'
import { Link } from 'react-router-dom'

export default function Navbartabs() {
    return (
        <div className='navbartabcon'>
            <ul className="nav navtabul justify-content-center">
                <li className="nav-item">
                    <Link to='/' className="nav-link active">All</Link>
                    {/* <a className="nav-link active" href="/#" >All</a> */}
                </li>
                <li className="nav-item">
                <Link to='/active' className="nav-link">Active</Link>
                    {/* <a className="nav-link" href="/#" >Active</a> */}
                </li>
                <li className="nav-item">
                <Link to='/complete'className="nav-link">Complete</Link>
                    {/* <a className="nav-link"  href="/#" >Completed</a> */}
                </li>
            </ul>
        </div>
    )
}
