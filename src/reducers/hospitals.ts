import { Hospital } from '@src/api/hospital/model';

export interface Action<T = any> {
  type: T
}

export interface AnyAction extends Action {
  [extraProps: string]: any
}

type HospitalReducer = Map<string, Hospital>;

export function hospitalReducer(state: HospitalReducer = new Map(), action: AnyAction): HospitalReducer {
  switch (action.type) {

    default: {
      return state;
    }
  }
}
