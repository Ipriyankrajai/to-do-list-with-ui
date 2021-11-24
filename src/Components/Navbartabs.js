import React from 'react'
import './navbartabs.css'

export default function Navbartabs() {
    return (
        <div className='navbartabcon'>
            <ul className="nav navtabul justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="/">All</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"  href="/">Completed</a>
                </li>
            </ul>
        </div>
    )
}
