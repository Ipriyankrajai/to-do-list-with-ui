import React from 'react'
// import './showbar.css'
import './showbar2.css';
import { useDispatch } from 'react-redux';
import { deleteFromToDoFn,editStatusFromToDoFn,editNewValueFn} from '../action';
import { MdEdit,MdDelete } from 'react-icons/md';
import { useState } from 'react';

export default function Showbar(props) {
    const dispatch=useDispatch();
    // const [checkBox,setCheckBox]=useState(false)
    const checkBox= props.status;
    const [editable,setEditable]=useState(false)
    const [newEdited,setNewEdited]=useState(props.data)
    const changeVal=()=>{

        console.log('changeval')
            dispatch(editNewValueFn([props.unique,newEdited]));
            setNewEdited(newEdited);
            setEditable(!editable);


    }

    return (

        // <div className="form-check">
        //     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        //     <label className="form-check-label" for="flexCheckDefault">
        //         Default checkbox
        //     </label>
        // </div>
        // <div className='main'>
        //     <div>

        //         <label className="container">
        //             <input type="checkbox" />One <MdEdit/>
        //             <span className="checkmark"></span>

        //         </label>

        //     </div>
        //     <div className='buttons'>


        //     </div>

        // </div>
        <div className="temp">
        <div className='main-input'>
            <div className="input-tag">
            <span onClick={()=>{
                // setCheckBox(!checkBox);
                console.log("checkbox clicked",checkBox);

                dispatch(editStatusFromToDoFn(props.unique));


            }}>
            <input type="checkbox" checked={checkBox?true:false} onChange={()=>{}} />
            </span>
            </div>

            <div className="val-text d-flex" style={{textDecoration: checkBox?"line-through":'none'}}>

            {props.data}
            {/* <input value={props.data}  onChange={(e)=>{}} style={{border:'0px'}}/> */}

             <span  onClick={()=>setEditable(!editable)}><MdEdit/></span>

             <span onClick={()=>dispatch(deleteFromToDoFn(props.unique))}><MdDelete/></span>
             <div className='ml-3' style={{display:editable?'inline-block':'none'}} >
                <input type='text' value={newEdited} onChange={(e)=>setNewEdited(e.target.value)}/>
                <button className="btn btn-primary" onClick={changeVal} >Enter</button>
            </div>
            </div>

        </div>

        </div>

    )
}
