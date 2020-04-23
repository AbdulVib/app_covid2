import React, { useEffect, useContext, useState } from 'react'

import AppContext from '../../store/context/context'

import styles from './SingleCountry.css'

export default function SingleCountry() {

    const { state, fetchCountry } = useContext(AppContext)

    const [ text, setText ] = useState('')

    useEffect( _ => {
        fetchCountry()
    }, [])
    
    const handleChange = e => {
        setText(e.target.value)
    }

    const filterCountries =  state.fetchCountries.filter(i => {
        return text !== '' ? i.country.toLowerCase().indexOf( text.trim().toLowerCase()) !== -1 : i
    })
    // console.log(filterCountries, ' filter')
    // console.log(state, ' state ')
    // console.log(text, ' text ')
    // console.log(totalCountries, ' total')
    return (
        <div className={ styles.SingleCountry }>

            <input type="text" value={ text } onChange={ handleChange } placeholder="FILTER COUNTRIES"/> 

          {
              filterCountries.length ? (
                  <ul>
                      {
                          filterCountries.map(i => {
                              const { active, cases, country, countryInfo: { _id, flag },critical, deaths, recovered, tests, todayCases, todayDeaths, updated } = i
                            //   console.log(_id)
                              return(
                                  <li key={ country }>
                                      <img src={ flag }/>
                                      <div>
                                        <h3>{ country }</h3>
                                        <h5>Cases : { cases }</h5>
                                        <h5>Deahs : { deaths }</h5>
                                        <h5>Recovered : { recovered }</h5>
                                        <h5>Today's Cases : { todayCases }</h5>
                                        <h5>Today's Deaths : { todayDeaths }</h5>
                                        <h5>Active : { active }</h5>
                                        <h5>Critical : { critical }</h5>
                                        <h5>Tests : { tests }</h5>
                                        <h5>Last Updated : {  new Date(updated).toDateString()  }</h5>
                                      </div>
                                  </li>
                              )
                          })
                      }
                  </ul>
              ) : <p style={{ marginTop: '15px'}}>Hang on Loading Content !!!</p>
          }
        </div>
    )
}
