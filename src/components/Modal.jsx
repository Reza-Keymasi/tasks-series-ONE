import React from 'react'
import "./NewPage.css"

import { useStateContext } from "../context/StateContextProvider"

const Modal = () => {
    const { showModal, setShowModal, data} = useStateContext()
  return (
    <div>
        <div className={!showModal ? "hidden" : "modal"}>
            {data.name && <h1>{data.name}</h1>}
            {data.email && <h1>{data.email}</h1>}
            {/* <h1>Hello World</h1> */}
        </div>
        <div className={showModal ? "overlay" : "hidden"} onClick={() => setShowModal(false)}></div>
    </div>
  )
}

export default Modal