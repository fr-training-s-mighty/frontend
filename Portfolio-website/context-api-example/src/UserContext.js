import React,{createContext, useState} from "react";

// create a context
export const UserContext = createContext();

// create a context provider component
export const UserProvider = ( {children} ) => {
    const [user,setUser] = useState(null);

    const login = (username) => {
        setUser({ name : username });
    };

    const logout = () => {
        setUser(null);
    }

    return( 
        <UserContext.Provider value = {{ user,login,logout }}>
            {children}
        </UserContext.Provider>
    );
}