import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";



const TodoContext = createContext();

function TodoProvider({ children }) {

    const [confetti, setConfetti] = useState(false); 

    useEffect(()=>{
        if(confetti){
            setTimeout(()=>{
                setConfetti(false);
            }, 500)
        }
    }, [confetti])
    

    return (
        <TodoContext.Provider value={{ confetti, setConfetti }}>
            {children}
        </TodoContext.Provider>
    );
}

function useTodoContext() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodoContext must be used within a TodoProvider");
    }

    return context;
}

export { TodoProvider, useTodoContext };
