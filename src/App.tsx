import React, { useMemo, useReducer } from "react";
import "@src/tailwind.css";

import { Header } from "@src/components/header";
import { Sidebar } from "@src/components/sidebar";
import { Routes } from "@src/routes";

import { seedHospitalData } from "@src/api/hospital/model";
import { DispatchContext, StoreContext } from "@src/store";
import { hospitalReducer } from "@src/reducers/hospitals";

const initialState = seedHospitalData();

export const App = () => {
  const [hospitalState, hospitalDispatch] = useReducer(
    hospitalReducer,
    initialState
  );

  // React.useEffect(() => {
  //   console.log('state change');
  // }, [hospitalState])
  //
  // React.useEffect(() => {
  //   console.log('dispatch changed')
  // }, [hospitalDispatch])

  // makeshift redux store we'll pass useReducer state and dispatch to per "reducer"
  const store = {
    hospitals: [hospitalState],
  };
  const dispatch = useMemo(() => ({ hospitals: [hospitalDispatch] }), []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StoreContext.Provider value={store}>
        <div className="flex">
          <Sidebar />
          <div className="w-5/6 overflow-y-auto h-screen">
            <div className="sticky top-0 bg-[#f8f6f4] p-5">
              <Header />
            </div>
            <div className="bg-white overflow-scroll-y px-5 pb-5">
              <Routes />
            </div>
          </div>
        </div>
      </StoreContext.Provider>
    </DispatchContext.Provider>
  );
};
