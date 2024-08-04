import { useState } from 'react';
import SearchBox from './SearchBox';
import './App.css';
import InfoCard from './InfoCard';

function App() {
  const [info, setInfo] = useState({});

  const updateInfo = (data) => {
    setInfo(data);
  };

  return (
    <div className='components'>
      <SearchBox updateInfo={updateInfo} />
      <InfoCard info={info} />
    </div>
  );
}

export default App;
