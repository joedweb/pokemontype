import { useEffect } from "react"
import { useState } from "react"
import Type from "./Type"

import './TypeList.css'

const TypeList = () => {
    const [types, setTypes] = useState([])

    useEffect( () => {
            async function fetchData(){

                try{
                    const data = await fetch('https://pokeapi.co/api/v2/type');

                    const {results} = await data.json();
                    setTypes(results)
                }catch(error){
                     console.error("Error fetch data " + error)
                }

            }
            fetchData();

    }, [types.length])


    return(
        <div className = "type-list">
            {
                types.map( (type) => (
                <Type key = {type.id}{...type} />
                )
                )
            }

        </div>
    )

}

export default TypeList