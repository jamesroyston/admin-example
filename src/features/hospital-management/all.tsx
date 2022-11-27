import React, { useCallback, useState, useEffect } from "react";

import { Hospital } from "@src/api/hospital/model";

import {
  addHospital,
  deleteHospital,
  editHospital,
} from "@src/reducers/hospitals/actions";
import { HOSPITALS } from "@src/reducers/constants";
import { useDispatch, useSelector } from "@src/store";

export function All() {
  // @ts-ignore symbol.iterator
  const [state] = useSelector(HOSPITALS);
  // @ts-ignore symbol.iterator
  const [dispatch] = useDispatch(HOSPITALS);

  const getHospitals = (): Hospital[] => Array.from(state.values());

  // useEffect(() => {
  //   setList(getHospitals())
  // }, [state])

  return (
    <div className="flex flex-col">
      <div>all page</div>
      <div className="p-10 flex flex-col">
        {getHospitals().map((h, i) => (
          <div className="pb-3" key={i.toString() + h.name}>
            <span>
              {h.name} - {h.formattedAddress}
            </span>
            <span className="ml-3">
              <button onClick={() => dispatch(deleteHospital(h.id!))}>
                delete
              </button>
              <button
                onClick={() =>
                  dispatch(
                    editHospital({
                      id: h.id!,
                      name: "NEW NAME",
                      street: "NIGHT CITY STREET BOY",
                    })
                  )
                }
              >
                edit
              </button>
              <button
                onClick={() =>
                  dispatch(
                    addHospital({
                      id: 123123,
                      name: "asdfasdf",
                    })
                  )
                }
              >
                add
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
