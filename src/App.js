import { useState } from 'react'
import './App.css';
import Explanation from './Components/Explanation';
import Picture from './Components/Picture'
import Video from './Components/Video';
import DateInputForm from './Forms/DateInputForm';

function App() {

  const [isPicture, setIsPicture] = useState(true)

  return (
    <div className="App">
      <h1>NASA Astronomy Picture Of The Day</h1>
      <DateInputForm/>
      {  
        isPicture ? 
        <Picture /> :
        <Video /> 
      }
      <Explanation/>
    </div>
  );
}

export default App;
