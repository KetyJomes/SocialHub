import { useState } from "react"

import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"


export const User360 = () => {

    const [isOpen, setIsOpen] = useState(false);

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

            <main className="mt-[8vh]">
                <h1>teste</h1>
            </main>
        </>
    )
}