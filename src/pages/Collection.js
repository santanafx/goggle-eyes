import React from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../context/GlobalContext';

export const Collection = () => {

    const { data } = React.useContext(Context);
    const params = useParams();

    return (
        <section>
            {data !== undefined ?
                <>
                    {/* <span>Home / {unit.collection}</span> */}
                    {/* <h1>{unit.collection}</h1> */}
                    <div>
                        {/* <h4>Showing all {unit.items.length} results</h4> */}
                        <select>
                            <option value="">Default sorting</option>
                            <option value="">Sort by popularity</option>
                            <option value="">Sort by avarage rating</option>
                            <option value="">Sort by latest</option>
                            <option value="">Sort by price:high to low</option>
                            <option value="">Sort by price:low to high</option>
                        </select>
                    </div>
                </> : ''}
        </section >
    )
}
