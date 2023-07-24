import React, { createContext, useState, useEffect } from 'react';
// import jsonData from '../../data.json';

export const CandidateContext = createContext();

export const CandidateProvider = ({ children }) => {
  const [data, setData] = useState({
    Juan: 'hola',
    Daniel: 0,
    Andrea: 0,
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setData(jsonData);
  //   }, 1000);
  // }, []);

  return (
    <CandidateContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
};
