import React from 'react'
// import './showbar.css'
import './showbar2.css';
import { useDispatch } from 'react-redux';
import { deleteFromToDoFn,editStatusFromToDoFn} from '../action';
import { MdEdit,MdDelete } from 'react-icons/md';


export default function Showbar(props) {
    const dispatch=useDispatch();
    // const [checkBox,setCheckBox]=useState(false)
    const checkBox= props.status;
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
            <input type="checkbox" />
            </span>
            </div>

            <div className="val-text" style={{textDecoration: checkBox?"line-through":'none'}}>

            {props.data}

             <span  onClick={()=>console.log("clicked")}><MdEdit/></span>

             <span onClick={()=>dispatch(deleteFromToDoFn(props.unique))}><MdDelete/></span>
            </div>

        </div>

        </div>

    )
}
