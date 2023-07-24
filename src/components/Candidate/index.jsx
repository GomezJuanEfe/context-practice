import React, { useContext } from 'react';
import { CandidateContext } from '../../store/CandidateContext';

const Candidate = ({ name, votes }) => {
  const store = useContext(CandidateContext);

  return (
    <li className="candidate-card" onClick={() => store.handleClick(name)}>
      {name}
    </li>
  );
};

export default Candidate;
