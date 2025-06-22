import React,{createContext,useState} from 'react';

export var OffcanvosCon = createContext()

function CanvosContext(props){
    var [showcan,setShowcan]=useState(false)
    function Open(){
        setShowcan(true)
    }
    function Close()
    {
        setShowcan(false)
    }
    return(
        <OffcanvosCon.Provider value={{showcan,Open:Open,Close:Close}}>
            {props.children}
        </OffcanvosCon.Provider>
    )
}

export default CanvosContext; 