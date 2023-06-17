import {Children, createContext} from "react"

import { useState } from "react"

export const UserContext = createContext(null)

export const UserProvider = useState(()=>{


    return(
        <UserContext.Provider value={}>
            {children}
        </UserContext.Provider>
    )

    
})