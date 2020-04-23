export const initialState = {
    fetchData: [],
    fetchCountries: []
  };
  

const reducer = (state , action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                fetchData: action.payload
            }
        case 'SET_COUNTRIES':
            return {
                ...state,
                fetchCountries: [ ...state.fetchCountries, ...action.payload ]
            }

        default:
            return state
    }
}

export default reducer
