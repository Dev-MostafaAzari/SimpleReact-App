import React, { createContext, useState } from 'react';

export var ValidCon = createContext()

function ValidationContext(props) {
    var [alert, setAlert] = useState(false)

    var [error, setError] = useState("invalid username")

    function Hide() {
        setAlert(false)
    }

    function UsernameTest(username){
        var patt = /[^a-z]/i;
        return patt.test(username)
    }



    return (
        <ValidCon.Provider value={{alert,error,Hide:Hide,setError:setError,setAlert:setAlert,UsernameTest:UsernameTest}}>
            {props.children}
        </ValidCon.Provider>
    )
}

export default ValidationContext;