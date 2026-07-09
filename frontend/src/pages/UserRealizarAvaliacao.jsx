import { useState } from "react"

import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"


export const UserRealizarAvaliacao = () => {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <>  
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />


            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

           <main className="mt-[8vh] h-[calc(100vh-11.5vh)]">

                <div className="p-10 h-full flex flex-col">

                    

                </div>

            </main>
        </>
    )
}