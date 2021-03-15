import { createRef } from 'react';

const useRefs = ({ keys }) => {
  const refs = keys.reduce((accumulator, current) => {
    accumulator[current] = createRef();

    return accumulator;
  }, {});

  return refs;
};

export default useRefs;
