import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const[isAuth,setIsAuth] = useState(false);
    const handleAuth=(dt)=>{
        setIsAuth(!isAuth);
    }
    return (
        <AuthContext.Provider value={{isAuth,handleAuth,setIsAuth}}>
        {children}
        </AuthContext.Provider>
    )
}