import React, { useReducer } from 'react';
import "@src/tailwind.css"

import { Routes } from '@src/routes'
import { DispatchContext, StoreContext } from '@src/store';

import { seedHospitalData } from '@src/api/hospital/model';
import { hospitalReducer } from '@src/reducers/hospitals/reducer';

const initialState = seedHospitalData();

export const App = () => {
  const [hospitalState, hospitalDispatch] = useReducer(hospitalReducer, initialState);

  // makeshift redux store we'll pass useReducer state and dispatch to per "reducer"
  // React.useEffect(() => {
  //   console.log('state change');
  // }, [hospitalState])
  //
  // React.useEffect(() => {
  //   console.log('dispatch changed')
  // }, [hospitalDispatch])

  const store = {
    hospitals: [hospitalState]
  }
  // TODO: need better name
  const dispatch = {
    hospitals: [hospitalDispatch]
  }

  return (
    <DispatchContext.Provider value={dispatch}>
      <StoreContext.Provider value={store}>
        <Routes />
      </StoreContext.Provider>
    </DispatchContext.Provider>
  )
}
