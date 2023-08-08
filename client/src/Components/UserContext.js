import { createContext} from "react"
import { useEffect } from "react"
import { useState } from "react"

export const UserContext = createContext(null)

export const UserProvider = ({children})=>{
    
    const [user, setUser] = useState('')
    const [status, setStatus]= useState('loading')

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/me/profile`)
        .then(response => response.json())
        .then(parsed => {
          setUser(parsed.profile);
          setStatus('loaded')
        })
      }, []);
      



    return(
        <UserContext.Provider value={{user, status}}>
            {children}
        </UserContext.Provider>
    )

    

}