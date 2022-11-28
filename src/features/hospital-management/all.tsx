import React, { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSortedState } from "@src/selectors/hospitals";

import { ListItem } from "@src/components/list-item";

import { Hospital } from "@src/api/hospital/model";

import {
  addHospital,
  deleteHospital,
  editHospital,
} from "@src/reducers/hospitals/actions";

import { DETAILS_PATH } from "@src/routes";
import { HOSPITALS } from "@src/reducers/constants";
import { useDispatch } from "@src/store";

export function All() {
  const history = useHistory();
  const hospitals = useSortedState(HOSPITALS) as Hospital[];

  const goToDetails = (id: number) => history.push(`${DETAILS_PATH}/${id}`);

  return (
    <div className="flex-col">
      {hospitals.map((h, i) => (
        // @ts-ignore
        <ListItem key={`${h.name}_${i}`}>
          <span className="cursor-pointer" onClick={() => goToDetails(h.id)}>
            {h.name}
          </span>
        </ListItem>
      ))}
    </div>
  );
}
