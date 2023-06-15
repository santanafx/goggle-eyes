import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

    const [data, setData] = React.useState();

    React.useEffect(() => {
        fetch('http://localhost:5000/dataBase', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Context.Provider value={{ data }}>
            {children}
        </Context.Provider>
    )

}