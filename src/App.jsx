// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import './App.scss';
import { Candidate } from './components/Candidate';
import { CandidateVotes } from './components/CandidateVotes';
import { Filter } from './components/Filter';
import { ListCandidates } from './components/ListCandidates';
import { TotalVotes } from './components/TotalVotes';

const App = () => (
  <main className="main">
    <h2>Voting App</h2>
    <ListCandidates>
      <Candidate name="Candidate 1" />
      <Candidate name="Candidate 2" />
      <Candidate name="Candidate 3" />
      <Candidate name="Candidate 4" />
    </ListCandidates>
    <div className="content-container">
      <Filter />
      <div className="report-container">
        <CandidateVotes />
        <TotalVotes />
      </div>
    </div>
  </main>
);

export default App;
