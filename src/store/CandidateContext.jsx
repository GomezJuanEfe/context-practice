import React, { createContext, useState } from 'react';

export const CandidateContext = createContext();

export const CandidateProvider = ({ children }) => {
  const [data, setData] = useState({
    Juan: 0,
    Daniel: 0,
    Andrea: 0,
  });

  const handleClick = (name) => {
    setData({
      ...data,
      [name]: data[name] + 1,
    });
  };

  const [type, setType] = useState('number');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const [selected, setSelected] = useState('all');

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  const total = data.Juan + data.Daniel + data.Andrea;

  return (
    <CandidateContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        handleClick,
        handleChange,
        total,
        type,
        selected,
        handleSelect,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
};
