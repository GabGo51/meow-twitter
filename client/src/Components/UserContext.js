import {children, createContext} from "react"

import { useState } from "react"

export const UserContext = createContext(null)

export const UserProvider = ({children})=>{
    
    const [user, setUser] = useState(null)
    const [status, setStatus]= useState('loading')

    useEffect(() => {
        fetch(`/api/me/profile`)
        .then(response => response.json())
        .then(parsed => {
          setUser(parsed.profile);
        })
      }, []);
      console.log(profile);



    return(
        <UserContext.Provider value={{user, status}}>
            {children}
        </UserContext.Provider>
    )

    

}