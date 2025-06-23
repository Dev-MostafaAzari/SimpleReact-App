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
        return patt.test(username);
    }

    function LnameTest(lname){
        var patt = /[^a-z]/i;
        return patt.test(lname);
    }

    function GmailTest(gmail){
        var patt = /@gmail.com$/;
        return patt.test(gmail);
    }



    return (
        <ValidCon.Provider value={{alert,error,Hide:Hide,setError:setError,setAlert:setAlert,UsernameTest:UsernameTest,LnameTest:LnameTest,GmailTest:GmailTest}}>
            {props.children}
        </ValidCon.Provider>
    )
}

export default ValidationContext;