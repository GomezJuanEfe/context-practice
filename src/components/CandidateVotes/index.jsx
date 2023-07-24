import React, { useContext } from 'react';
import { CandidateContext } from '../../store/CandidateContext';

const CandidateVotes = () => {
  const store = useContext(CandidateContext);
  const { type, total, selected } = store;

  return (
    <div className="candidate-votes-card">
      <ul>
        <li className={selected === Object.keys(store.data)[0] || selected === 'all' ? '' : 'hide'}>
          {`${Object.keys(store.data)[0]} : ${
            type === 'number'
              ? store.data.Juan
              : (`${Math.floor((store.data.Juan / total) * 100)}%`)
          }`}
        </li>
        <li className={selected === Object.keys(store.data)[1] || selected === 'all' ? '' : 'hide'}>
          {`${Object.keys(store.data)[1]} : ${
            type === 'number'
              ? store.data.Daniel
              : (`${Math.floor((store.data.Daniel / total) * 100)}%`)
          }`}
        </li>
        <li className={selected === Object.keys(store.data)[2] || selected === 'all' ? '' : 'hide'}>
          {`${Object.keys(store.data)[2]} : ${
            type === 'number'
              ? store.data.Andrea
              : (`${Math.floor((store.data.Andrea / total) * 100)}%`)
          }`}
        </li>
      </ul>
    </div>
  );
};

export default CandidateVotes;
