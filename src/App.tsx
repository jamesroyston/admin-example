import React, { useReducer } from 'react';
import "@src/tailwind.css"

import { Routes } from '@src/routes'
import { StoreContext } from '@src/store';

// import { ListItem } from '@src/components/ListItem';
import { Hospital } from '@src/api/hospital/model';
import { hospitalReducer } from '@src/reducers/hospitals';

export const App = () => {
  // const data = () => {
  //   return Array.from(Hospital.seedHospitalData().values());
  // }

  const initialState = Hospital.seedHospitalData();
  const [state, dispatch] = useReducer(hospitalReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <Routes />
    </StoreContext.Provider>
  )
}
