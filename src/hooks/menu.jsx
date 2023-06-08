import { createContext, useContext, useState } from "react";
export const MenuContext = createContext({})

function MenuHandler({children}) {
    const [menuOpened, setMenuOpened] = useState(false)

    function toggleMenu() {
        setMenuOpened(prevState => !prevState)
    }

    return (
        <MenuContext
            value={{
                toggleMenu,
                menuOpened
            }}
        
        >
            {children}
        </MenuContext>
    )
}

function useMenu() {
    const context = useContext(MenuContext)
    return context
}

export { MenuHandler, useMenu }