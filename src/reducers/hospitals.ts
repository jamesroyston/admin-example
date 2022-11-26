import { Hospital } from '@src/api/hospital/model';
import type { AnyAction } from '@src/store/types';

type HospitalReducer = Map<string, Hospital>;

export function hospitalReducer(state: HospitalReducer = new Map(), action: AnyAction): HospitalReducer {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
