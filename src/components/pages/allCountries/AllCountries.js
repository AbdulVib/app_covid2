import React, { useContext, useEffect } from 'react'
import CountUp from 'react-countup'

import AppContext from '../../store/context/context'

import styles from './AllCountries.css'

export default function AllCountries() {

    const { state, fetchedData } = useContext(AppContext)

    useEffect( _ => {
        fetchedData()
    }, [])


    const { fetchData } = state
    const { cases, deaths, recovered, updated } = fetchData

    // console.log(state, ' state')

    return (
        <div className={ styles.AllCountries }>
            <div className={ styles.AllCases }>
                <h2>Cases</h2>
                <strong>
                    <CountUp start={ 0 } end={ fetchData.cases >= 0 ? cases : 0 } duration={ 2.5 } separator="," />
                </strong>
                <h5>{ fetchData.updated ? new Date(updated).toDateString() : 'Loading !!!'}</h5>
            </div>
            <div className={ styles.AllDeaths }>
                <h2>Deaths</h2>
                <strong>
                    <CountUp start={ 0 } end={ fetchData.deaths >= 0 ? deaths : 0 } duration={ 2.5 } separator="," />
                </strong>
                <h5>{ fetchData.updated ? new Date(updated).toDateString() : 'Loading !!!'}</h5>
            </div>
            <div className={ styles.AllRecovered }>
                <h2>Recoverd</h2>
                <strong>
                    <CountUp start={ 0 } end={ fetchData.recovered >= 0 ? recovered : 0 } duration={ 2.5 } separator="," />
                </strong>
                <h5>{ fetchData.updated ? new Date(updated).toDateString() : 'Loading !!!' }</h5>
            </div>
        </div>
    )
}
