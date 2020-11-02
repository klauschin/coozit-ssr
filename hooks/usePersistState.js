import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const getPersistState = (value, key) => {
  if (value) return value;
  return Cookies.get(key);
};

const usePersistState = (initState) => {
  const [state, setState] = useState();

  useEffect(() => {
    setState(initState);
  }, [initState]);

  return state;
};

export default usePersistState;
