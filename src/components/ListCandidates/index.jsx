import React, { useContext } from 'react';
import Candidate from '../Candidate';
import { CandidateContext } from '../../store/CandidateContext';

const ListCandidates = () => {
  const store = useContext(CandidateContext);

  return (
    <div className="list-candidates">
      <ul>
        <Candidate name={Object.keys(store.data)[0]} votes={store.data.Juan} />
        <Candidate name={Object.keys(store.data)[1]} votes={store.data.Daniel} />
        <Candidate name={Object.keys(store.data)[2]} votes={store.data.Andrea} />
        {/* {
          store?.map((item) => <Candidate key={item} name={item} />)
        } */}
      </ul>
    </div>
  );
};

export default ListCandidates;
