import React, { useReducer } from 'react'

//#region MUI Imports
import Box from '@mui/material/Box'
//#endregion

//#region Component Imports
import SearchFilterContainer from './SearchFilterContainer'
import ProductCollectionContainer from './ProductCollectionContainer'
//#endregion

const initialFilter = {
    searchText: '',
    filter: 0
}

const filterReducer = (state, action) => {
    switch (action.type) {
        case 'search_changed': {
            return {
                ...state,
                searchText: action.searchText,
            };
        }
        case 'filter_changed': {
            return {
                ...state,
                filter: action.filter
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

const Collections = () => {

    const [filterState, filterDispatch] = useReducer(filterReducer, initialFilter);

    const handleChangeSearchText = (event) => {
        filterDispatch({ type: 'search_changed', searchText: event.target.value });
    }

    return (
        <>
            <SearchFilterContainer onChangeSearch={handleChangeSearchText} filter={filterState} />
            <ProductCollectionContainer filter={filterState} />
        </>
    )
}

export default Collections