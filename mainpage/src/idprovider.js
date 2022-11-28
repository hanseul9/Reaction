import {createContext, useContext, useState} from "react";

const IdContext = createContext();
export const useId = () => useContext(IdContext);
const init = "reaction@hansung.ac.kr";

const IdProvider = ({ children}) => {
    const [id, setId] = useState(init);
    const idSetter = (settingid) => setId(settingid);
    return (
        <IdContext.Provider
        value={{id, setId, idSetter}}>
            {children}
        </IdContext.Provider>
    );
}
export default IdProvider;