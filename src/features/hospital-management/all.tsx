import React, { useCallback, useState, useEffect } from 'react';
import { Hospital } from '@src/api/hospital/model';
import { useSelector } from '@src/store';
import { HOSPITALS } from '@src/reducers/constants';

export function All() {
  // const [editing, setEditing] = useState(false);

  // @ts-ignore symbol.iterator
  const [state, dispatch] = useSelector(HOSPITALS);

  const getHospitals = (): Hospital[] => Array.from(state.values());
  const hospitalArray = getHospitals();

  return <div className="flex flex-col">
    <div>all page</div>
    <div className="flex flex-col">
      {hospitalArray.map((h, i) => <div key={i.toString()+h.name}>{h.name}{h.address?.state}</div>)}
    </div>
  </div>
}
