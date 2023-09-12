import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitCountry}) => {

    const [visit, setVisit] = useState(false)

    const handleLoad = () =>{
        setVisit(!visit)
    }

   
    const {name, flags, area,population, region, cca2} = country;
    return (
        <div className='country'>
            <h3>Country: {name?.common}</h3>
            <img height={210} src={flags.png} alt="image" />
            <p>area: {area}</p>
            <p>population: {population}</p>
            <p>Region: {region}</p>
            <p>{cca2}</p>
            <button onClick={()=> (handleVisitCountry(country))}>mark visit</button>
            <button onClick={handleLoad}>{visit? 'visited' : 'visit'}</button>
            {visit? 'i have visited this country': 'i want to visit'}
        </div>
    );
};

export default Country;