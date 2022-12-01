import React, {useState} from 'react'
import "./NewPage.css"
import Inputs from './Inputs';

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import {HiCursorClick} from "react-icons/hi"

const Button = ({showModal, setShowModal}) => {

    const [show, setShow] = useState(false);

  return (
    <div className="container">   
        <span className="header">Hello World</span>

        <div className="button-container" onClick={() => setShow(true)}>
            <ButtonComponent className="button"><HiCursorClick style={{color:"blue"}} /></ButtonComponent>
        </div>

       <Inputs show={show} />
    </div>
  )
}

export default Button