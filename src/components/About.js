import { Link } from 'react-router-dom' 

const About = () => {
    
    return (
        //<a href="/">Go Back</a>
        // Link koristimo na ovaj nacin kako bi izbjegli da se svaki put 
        //reload-a stranica
        //<Link to="/">Go Back</Link>
        <div>
            <h4>Version 1.0.0</h4>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About
