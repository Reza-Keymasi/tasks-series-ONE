import React from 'react'

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import {FiSend} from "react-icons/fi"

import {useStateContext} from "../context/StateContextProvider"

const Inputs = ({show}) => {

    const { setShowModal, data, setData } = useStateContext()


    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value})
        console.log(event)
        return data
    }


  return (
    <div>
         <div className={show ? "input-container" : "hidden"}>    
            <div className="inputs">
                <div className="input">    
                    <label>Name</label>
                    <input value={data.name} type="text" name="name" onChange={changeHandler} placeholder="Write Your Name" />
                </div>
                
                <div className="input">    
                    <label>Email</label>
                    <input value={data.email} type="text" name="email" onChange={changeHandler} placeholder="Write Your Email" />
                    {/* {data.email && <p>{data.email}</p>} */}
                </div>
            </div>
            <div className="input-button-container" onClick={() => setShowModal(true)}>
                <ButtonComponent className="button"><FiSend style={{color:"blue"}} /></ButtonComponent>
            </div>
        </div>
    </div>
  )
}

export default Inputs