import React, { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSortedState } from "@src/selectors/hospitals";

import { Hospital } from "@src/api/hospital/model";

import {
  addHospital,
  deleteHospital,
  editHospital,
} from "@src/reducers/hospitals/actions";

import { DETAILS_PATH } from "@src/routes";

import { HOSPITALS } from "@src/reducers/constants";
import { useDispatch, useSelector } from "@src/store";

export function All() {
  const history = useHistory();
  // @ts-ignore symbol.iterator
  // const [state] = useSelector(HOSPITALS);
  // @ts-ignore symbol.iterator
  const [dispatch] = useDispatch(HOSPITALS);

  // const getHospitals = (): Hospital[] => Array.from(state.values());

  const hospitals = useSortedState(HOSPITALS) as Hospital[];

  const goToDetails = (id: number) => history.push(`${DETAILS_PATH}/${id}`);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <div className="flex-col">
      {hospitals.map((h, i) => (
        <div className="pb-3" key={i.toString() + h.name}>
          <span>
            <div
              onClick={(e) => {
                e.stopPropagation();
                goToDetails(h.id);
              }}
            >
              {h.name} - {h.formattedAddress} - {h.formattedUpdatedAt}
            </div>
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
  );
}
