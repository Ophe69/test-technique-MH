import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';





function Practitioners() {

    const [allPractictioners, setAllPractitioners] = useState([]);


    
        const getPractitioners = async () => {
            
            const data = await fetch('http://hapi.fhir.org/baseR4/Practitioner/')
            //const list = await response.json()

            const response = await data.json()
            const practitionersList = JSON.stringify(response.entry);
            console.log('practitioners listttt = ', practitionersList);
            

            setAllPractitioners(practitionersList)
            
        } 

    useEffect(() => {
        getPractitioners()
    }, [])


    return (
        <div className="App">
            <div>
                <h1>Practitioners Page</h1>
                
                <Link to="/" >Go to Home page</Link>
            </div>
            <div>
                {allPractictioners}
            </div>
            
        </div>
        
    )
}

export default Practitioners
