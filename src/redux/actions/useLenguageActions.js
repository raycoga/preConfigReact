import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useLenguageActions = () => {
  const dispatch = useDispatch();
  const setLenguage = useCallback(
    (data) => dispatch({ type: "SET_LENGUAGE", payload: data }),
    [dispatch]
  );
  /* Here u can add more functions like this and exported here on the return */
  return [setLenguage];
};
