import { useEffect, useState } from "react";
import Country from "../country/country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitCountries, setVisitCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitCountry = country =>{
        console.log('add this visit country ')
        console.log(country)

        const newVisitCountry = [...visitCountries, country]
        setVisitCountries(newVisitCountry)
    }

    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                <h3>Visited Countries: {visitCountries.length}</h3>

                <ol>
                    {
                        visitCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ol>
            </div>

            <div className="countries-container">
                {
                    countries.map(country => <Country key={country.cca2}
                        handleVisitCountry={handleVisitCountry}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;