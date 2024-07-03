import React,{createContext, useState} from "react";

// create a context
export const UserContext = createContext();

// create a context provider component
export const UserProvider = ( {children} ) => {
    const [user,setUser] = useState(null);

    return( 
        <UserContext.Provider value = {{ user,setUser }}>
            {children}
        </UserContext.Provider>
    )
}