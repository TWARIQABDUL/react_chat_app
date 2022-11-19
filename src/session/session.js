import React, {createContext, useState} from "react";
const SessionContext = createContext({});

export const SessionProvider = ({children})=>{
    const [session,steSes] = useState('')
    

    const setSession=(valu)=>{
        steSes(valu)
    }
    return(
        <SessionContext.Provider value={{session,setSession}}>
            {children}
        </SessionContext.Provider>
    )
}
export default SessionContext

