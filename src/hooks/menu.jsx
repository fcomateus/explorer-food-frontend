import { createContext, useContext, useState } from "react";
export const MenuContext = createContext({});

function MenuHandler({ children }) {
    const [menuOpened, setMenuOpened] = useState(false)

    function toggleMenu() {
        setMenuOpened(prevState => !prevState)
    }

    return (
        <MenuContext.Provider
            value={{
                toggleMenu,
                menuOpened,
                setMenuOpened
            }}
        
        >
            {children}
        </MenuContext.Provider>
    )
}

function useMenu() {
    const context = useContext(MenuContext)
    return context
}

export { MenuHandler, useMenu }