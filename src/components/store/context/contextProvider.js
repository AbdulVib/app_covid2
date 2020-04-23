import React, { useReducer } from 'react';
import Context from './context'

import axios from 'axios'

//reducer
import reducer, { initialState } from '../reducers/reducer'


export default function contextProvider(props) {
    
    const [ state, dispatch ] = useReducer(reducer, initialState)

    const fetchedData = _ => {
            axios.get('https://corona.lmao.ninja/v2/all')
            .then(res => res)
            // .then(res => console.log(res.data, ' ressssssssssssssss'))
            .then(res => {
                dispatch( { type: 'SET_POSTS', payload: res.data } )
            })
    }

    const fetchCountry = _ => {
            axios.get('https://corona.lmao.ninja/v2/countries')
            .then(res => res)
            // .then(res => console.log(res.data, ' ressssssssssssssss'))
            .then(res => {
                dispatch( { type: 'SET_COUNTRIES', payload: res.data } )
            })
    }

    return (
        <Context.Provider value={{ state, dispatch, fetchedData, fetchCountry }}>
            { props.children }
        </Context.Provider>
    )
}

