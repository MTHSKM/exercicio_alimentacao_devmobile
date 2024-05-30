import { createContext, useState } from "react";


export const RespostaContext = createContext({})

export default function RespostaProvider({children}) {
    const [resposta, setResposta] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: ''
    })

    return(
        <RespostaContext.Provider value={{resposta, setResposta}}>
            {children}
        </RespostaContext.Provider>
    )
}