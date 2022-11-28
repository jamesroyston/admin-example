import { useSelector } from "@src/store";

export const useSortedState = (key: string) => {
  // @ts-ignore
  const [state] = useSelector(key);
  return Array.from(state.values()).sort(
    (a: any, b: any) => b.updatedAt - a.updatedAt
  );
};

export const useGetById = (key: string, id: number) => {
  // @ts-ignore
  const [state] = useSelector(key);
  if (state.has(id)) {
    return state.get(id);
  }

  return undefined;
};
