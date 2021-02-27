import logo from './logo.svg';
import './App.css';
import  { Table } from './components/table'
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div>
        <Table/>
      </div>
    </RecoilRoot>
  );
}

export default App;
