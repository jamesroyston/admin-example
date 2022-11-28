import { merge } from "lodash";

import { Hospital } from "@src/api/hospital/model";
import {
  ADD_HOSPITAL,
  DELETE_HOSPITAL,
  EDIT_HOSPITAL,
} from "@src/reducers/hospitals/actions";
import type { AnyAction } from "@src/store/types";

type HospitalReducer = Map<number, Hospital>;

export function hospitalReducer(
  state: HospitalReducer = new Map(),
  action: AnyAction
): HospitalReducer {
  switch (action.type) {
    case ADD_HOSPITAL: {
      let map = new Map(state);
      map.set(action.payload.id, Hospital.fromAPIResponse(action.payload));
      console.log(action.payload);
      return map;
    }
    case DELETE_HOSPITAL: {
      let map = new Map(state);
      if (map.has(action.payload.id)) {
        map.delete(action.payload.id);
      }
      return map;
    }
    case EDIT_HOSPITAL: {
      let map = new Map(state);
      if (map.has(action.payload.id)) {
        let hospital = map.get(action.payload.id) as Hospital;
        merge(hospital, action.payload);
        map.set(action.payload.id, hospital);
        return map;
      }
      return map;
    }
    default:
      return state;
  }
}
