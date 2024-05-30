import { createContext, useState } from "react";


export const RespostaContext = createContext({})

export default function RespostaProvider({children}) {
    const [resposta, setResposta] = useState({

    })

    return(
        <RespostaContext.Provider value={{resposta, setResposta}}>
            {children}
        </RespostaContext.Provider>
    )
}