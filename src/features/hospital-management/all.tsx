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
        //   <div className="pb-3" key={i.toString() + h.name}>
        //     <span>
        //       <div
        //         onClick={(e) => {
        //           e.stopPropagation();
        //           goToDetails(h.id);
        //         }}
        //       >
        //         {h.name} - {h.formattedAddress} - {h.formattedUpdatedAt}
        //       </div>
        //     </span>
        //     <span className="ml-3">
        //       <button onClick={() => dispatch(deleteHospital(h.id!))}>
        //         delete
        //       </button>
        //       <button
        //         onClick={() =>
        //           dispatch(
        //             editHospital({
        //               id: h.id!,
        //               name: "NEW NAME",
        //               street: "NIGHT CITY STREET BOY",
        //             })
        //           )
        //         }
        //       >
        //         edit
        //       </button>
        //       <button
        //         onClick={() =>
        //           dispatch(
        //             addHospital({
        //               id: 123123,
        //               name: "asdfasdf",
        //             })
        //           )
        //         }
        //       >
        //         add
        //       </button>
        //     </span>
        //   </div>
      ))}
    </div>
  );
}
