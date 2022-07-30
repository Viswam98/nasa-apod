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
        <Picture 
          src = 'https://apod.nasa.gov/apod/image/2205/CatsPaw_Bemmerl_960.jpg'
        /> :
        <Video /> 
      }
      <Explanation
        explanation = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit itaque quod accusantium saepe, corporis nesciunt dolore voluptates deleniti ex eligendi architecto, quia optio vitae nemo consequuntur. A numquam ipsam vitae.'
      />
    </div>
  );
}

export default App;
