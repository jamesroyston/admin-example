import { createContext, useContext } from 'react';
import type { Dispatch } from 'react';
import type { AnyAction } from '@src/store/types';

type ContextProps<T> = {
  [key: string]: T[]
}

export const StoreContext = createContext<ContextProps<Map<string, object>>>({});
export const DispatchContext = createContext<ContextProps<Dispatch<AnyAction>>>({})

// makeshift useSelector hook
export function useSelector(key: string)  {
  const context = useContext(StoreContext);

  if (context.hasOwnProperty(key)) {
    const [state] = context[key];
    return [state];
  }

  return undefined;
}

export function useDispatch(key: string) {
  const context = useContext(DispatchContext);

  if (context.hasOwnProperty(key)) {
    const [dispatch] = context[key];
    return [dispatch];
  }

  return undefined;
}
