import React, { createContext, useState } from 'react';

export var ValidCon = createContext()

function ValidationContext(props) {
    var [alert, setAlert] = useState(true)

    var [error, setError] = useState("invalid username")

    function Hide() {
        setAlert(false)
    }


    return (
        <ValidCon.Provider value={{alert,error,Hide:Hide}}>
            {props.children}
        </ValidCon.Provider>
    )
}

export default ValidationContext;