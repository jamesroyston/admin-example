import { Hospital, HospitalProps } from "@src/api/hospital/model";

/*
 *
 * [x] Ability to view a list of Hospitals
 * [ ] Ability to add a new Hospital
 * [ ] Ability to edit a Hospital
 * [ ] Ability to remove a Hospital
 * */

export const ADD_HOSPITAL = "ADD_HOSPITAL";
export const DELETE_HOSPITAL = "DELETE_HOSPITAL";
export const EDIT_HOSPITAL = "EDIT_HOSPITAL";

export const addHospital = (payload: Partial<HospitalProps>) => ({
  type: ADD_HOSPITAL,
  payload,
});

export const deleteHospital = (id: number) => ({
  type: DELETE_HOSPITAL,
  payload: {
    id,
  },
});

export const editHospital = (payload: Partial<Hospital>) => ({
  type: EDIT_HOSPITAL,
  payload,
});
