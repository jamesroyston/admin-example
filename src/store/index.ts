import { createContext, useContext } from 'react';
import type { Dispatch } from 'react';
import type { AnyAction } from '@src/store/types';

type ContextProps = {
  [key: string]: [Map<string, any>, Dispatch<AnyAction>]
}

export const StoreContext = createContext<ContextProps>({});

// makeshift useSelector hook
export function useSelector(key: string)  {
  const context = useContext(StoreContext);

  if (context.hasOwnProperty(key)) {
    const [state, dispatch] = context[key];
    return [state, dispatch];
  }

  return undefined;
}
