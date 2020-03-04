import React, { createContext, useState, useContext } from 'react'


const Context = createContext({
    currentPage: 1,
    changePage: () => { }
})

const Page = ({ children, pageIndex }) => {
    const { currentPage, changePage } = useContext(Context)
    return currentPage === pageIndex ? children : null

}
const Controls = () => {
    const context = useContext(Context)

    return (
        <div>
            <button disabled={context.currentPage === 1 ? true : false} onClick={() => context.changePage(context.currentPage - 1)}>Previous</button>
            <button disabled={context.currentPage === 3 ? true : false} onClick={() => context.changePage(context.currentPage + 1)}>Next</button>
            <button>Submit</button>
        </div>
    )
}

const Multistep = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const changePage = (newPageIndex) => {
        setCurrentPage(newPageIndex)
    }
    return (
        <Context.Provider value={{ currentPage, changePage }}>{children}</Context.Provider>
    )
}
export { Multistep, Page, Controls }