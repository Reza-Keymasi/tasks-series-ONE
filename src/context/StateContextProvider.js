import React, { useState, createContext, useContext } from 'react'


const StateContext =  createContext()

export const StateContextProvider = ({children}) => {

    const [ showModal, setShowModal ] = useState(false);

    const [ data, setData ] = useState({

        name:"",

        email:"",
    })

  return (
    <StateContext.Provider value={{showModal, setShowModal, data, setData}}>
        {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)