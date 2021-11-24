import React,{useState} from 'react';
import './input.css';
import {addingToDoFn} from '../action/index.js';
import {useDispatch } from 'react-redux';


export default function Input() {
    // const todos=useSelector((s)=>s.addingToDoReducer.todos);
    const dispatch = useDispatch();
    const[textVal,SetTextVal]=useState("");
    return (
        <div className="temp">
        <div className='input-cont'>
            <input type="text" value={textVal} onChange={(e)=>SetTextVal(e.target.value)} placeholder='What have you worked on?'  />
            <button  className="btn btn-primary" onClick={()=>{dispatch(addingToDoFn(textVal));SetTextVal('')}}>ADD</button>
        </div>
        </div>

    )
}
