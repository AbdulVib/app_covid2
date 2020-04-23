import React from 'react'

import AllCountries from '../allCountries/AllCountries'
import SingleCountry from '../singleCountry/SingleCountry'

export default function Home() {
    return (
        <div style={{ border: '', padding: '30px 0'}}>
            <AllCountries />
            <SingleCountry />
        </div>
    )
}
