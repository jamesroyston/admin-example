import React, { useReducer } from 'react';
import "@src/tailwind.css"

import { Routes } from '@src/routes'
import { StoreContext } from '@src/store';

import { seedHospitalData } from '@src/api/hospital/model';
import { hospitalReducer } from '@src/reducers/hospitals';

const initialState = seedHospitalData();
export const App = () => {
  // const [state, dispatch] = useReducer(hospitalReducer, initialState);

  // React.useEffect(() => {
  //   console.log(state);
  // }, [state])

  // makeshift redux store we'll pass useReducer state and dispatch to per "reducer"
  const store = {
    hospitals: useReducer(hospitalReducer, initialState)
  }

  return (
    <StoreContext.Provider value={store}>
      <Routes />
    </StoreContext.Provider>
  )
}
