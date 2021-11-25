import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { searchValueFn } from '../action';
export default function Navbar() {
    const searchVal=useSelector((s)=>s.searchReducer.search)
    const dispatch =useDispatch();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" >My Task</a>


                        <form className="d-flex">
                            <input value={searchVal} onChange={(e)=>dispatch(searchValueFn(e.target.value))} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>

            </nav>
        </div>
    )
}
