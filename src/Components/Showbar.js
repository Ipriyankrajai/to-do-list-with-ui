import React from 'react'
// import './showbar.css'
import './showbar2.css';
// import './showbar3.css';
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


        <div className='main-input'>
            <div className="input-tag">

            <input type="checkbox" checked={checkBox?true:false} onChange={()=>{
                // setCheckBox(!checkBox);
                console.log("checkbox clicked",checkBox);
                dispatch(editStatusFromToDoFn(props.unique));
            }} />

            </div>
            <span className="val-text" style={{textDecoration: checkBox?"line-through":'none'}}>
            {props.data}

            </span>

            {/* <div className="val-text" style={{textDecoration: checkBox?"line-through":'none'}}> */}

            {/* <input value={props.data}  onChange={(e)=>{}} style={{border:'0px'}}/> */}
            <div className="main-3">

            <span  style={{display:editable?'inline-block':'none'}} >
                <input className='edit-input' type='text' value={newEdited} onChange={(e)=>setNewEdited(e.target.value)}/>
                <button className="btn btn-primary" onClick={changeVal} >Enter</button>
            </span>
            </div>
            <div className="main-2">
            <span  onClick={()=>setEditable(!editable)}><MdEdit/></span>

             <span onClick={()=>dispatch(deleteFromToDoFn(props.unique))}><MdDelete style={{color:'red'}}/></span>
            </div>
            {/* </div> */}

        </div>





    //     <div class="main-con">
    //     <div class="main-1">
    //         <span>
    //             <input type="checkbox"/>
    //         </span>
    //         <span class="value-text">
    //             Lorem, ipsum dolor.
    //         </span>
    //         <span>
    //         <input class="input-tag" type="text"/>
    //         <button class="btn-tag">add</button>
    //         </span>
    //     </div>
    //     <div class="main-2">

    //             <span id='edit'>
    //             <MdEdit/>
    //             </span>
    //             <span id='delete'>
    //             <MdDelete/>
    //             </span>


    //     </div>

    // </div>

    )
}
