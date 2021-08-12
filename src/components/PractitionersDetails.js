import React, {useParams} from 'react';

import { Link } from 'react-router-dom';



function PractitionersDetails() {

    var { id } = useParams();

    return (
        <div>
            <h1>Practitioner Details Page</h1>
            <h3>practitioner n° {id}</h3>
            <Link to="/" >Go to Home page</Link>
        </div>
    )
}

export default PractitionersDetails;
