import { useEffect, useState } from "react";

const Api = () => {
    // 1. Get the data (fetch)
    // 2. Save the data to state
    const [starWarsData, setStarWarsData] = useState();
    // side effect: Out of reach of React: could cause infinite loop => hence useEffect hook
    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))

    useEffect(() => {
        fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    }, []);

    return ( 
        <div>
            <p>{JSON.stringify(starWarsData)}</p>
            {/* <p>{starWarsData.name}</p>
            <p>{starWarsData['hair_color']}</p> */}
        </div>
    );
}
 
export default Api;