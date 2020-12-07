import {Jumbotron, Button} from "react-bootstrap"
import { useEffect, useState } from 'react';

function Home() {
    const [time, setTime] = useState(0)

    useEffect(() => {
        fetch('/api/time').then(res => res.json()).then(data => setTime(data.time))
    },[])

    return(
        <Jumbotron>
            <h1>Welcome to FishTips</h1>
            <p>A one-stop shop to all things fishing:</p>
            <ul>
                <li>Tides and Weather</li>
                <li>Map Reconnaissance</li>
                <li>Species Information</li>
            <li>Current time is: {new Date(time * 1000).toLocaleString("en-US", {timeZoneName: "short"})}</li>
            </ul>
            <Button variant="primary">Sign In</Button>
        </Jumbotron>
    )

}

export default Home