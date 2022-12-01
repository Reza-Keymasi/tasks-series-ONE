import React, { useState, createContext, useContext } from 'react'


const StateContext =  createContext()

const positionObject = {
    sizeX: "",
    sizeY: "",
    row: "",
    col: "",
}

// const addObject = {
//     sizeXA: "",
//     sizeYA: "",
//     rowA: "",
//     colA: "",
// }

const resizeObject = {
    clientX: "",
    clientY: "",
    layerX: "",
    layerY: "",
    movementX: "",
    movementY: "",
    offSetX: "",
    offSetY: "",
    pageX: "",
    pageY: "",
    screenX: "",
    screenY: "",
}





export const StateContextProvider = ({children}) => {

    const [ showModal, setShowModal ] = useState(false);

    const [ position, setPosition ] = useState(positionObject)

    // const [ addingPanel, setAddingPanel ] = useState(addObject)

    const [ resizePanel, setResizePanel ] = useState(resizeObject)

    const [ data, setData ] = useState({

        name:"",

        email:"",
    })

    // const [stopDetails, setStopDetails] = useState(stopState)

  return (
    <StateContext.Provider value={{showModal, setShowModal, data, 
        setData, position, setPosition, resizePanel, setResizePanel}}>
        {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)