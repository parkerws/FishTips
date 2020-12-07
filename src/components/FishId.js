import React, {useState, useLayoutEffect, useEffect} from 'react';
import endpoints from '../endpoints/apiendpoints';



function FishId() {
    const [species, setSpecies] = useState('')
    const [endpoint, setEndpoint] = useState(endpoints.test)
    const [tides, setTides] = useState([{"t":"12:00", "v":"2.034", "type":"h"}]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(endpoints.test).then(res => res.json()).then(data => {
            setTides(data.predictions);
            setLoading(false);
        });
    },[])
        console.log(tides)
        return(
                <>
                    <p>This is the response</p>
                    {loading && <p>Loading...</p>}

                    
                    {tides.map((item, key) => { console.log(item.t);
                    <ul>
                        <li>{item.t.value}</li>
                    </ul>
                    })}           
                </>   
        )
    
    }

    

    

export default FishId;

/* */