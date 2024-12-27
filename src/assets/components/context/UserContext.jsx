import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ( {children} ) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const loginStorage = JSON.parse(localStorage.getItem("isLoged"))
        loginStorage && setUser(loginStorage)
    }
    , []);


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider };