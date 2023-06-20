import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

    const [data, setData] = React.useState();

    React.useEffect(() => {
        fetch('https://json-server-goggle-eyes.vercel.app/data', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])

    // console.log(data)

    return (
        <Context.Provider value={{ data }}>
            {children}
        </Context.Provider>
    )

}