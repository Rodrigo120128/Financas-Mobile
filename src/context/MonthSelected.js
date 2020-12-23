import React ,{createContext,useState} from "react"

const MonthSelectedContext = createContext()

const MonthSelectedProvider = ({children}) => {
    const [month,setMonth] = useState("")

    return(
        <MonthSelectedContext.Provider value={{month,setMonth}}>
            {children}
        </MonthSelectedContext.Provider>
    )
}

export {MonthSelectedProvider,MonthSelectedContext}