import { useEffect, useState } from 'react'
import './App.css';
import Explanation from './Components/Explanation';
import Picture from './Components/Picture'
import ToggleMode from './Components/ToggleMode';
import Video from './Components/Video';
import DateInputForm from './Forms/DateInputForm';

function App() {
  const [pictureOfTheDay, setPictureOfTheDay] = useState(null)
  const [selectedDate, setSelectedDate] = useState(new Date().toJSON().slice(0,10))
  const [darkMode, setDarkMode] = useState(false)
  
  useEffect(()=>{
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&date=${selectedDate}`)
        .then( response => response.json())
        .then( data => {
            setPictureOfTheDay(data)
        })
  }, [selectedDate])

  const handleDate = (date) => {
    setSelectedDate(date)
  }

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <h1>NASA Astronomy Picture Of The Day</h1>
      <div className='input-container'>
        <DateInputForm
          handleDate={handleDate}
        />
        <ToggleMode
          handleToggle={toggleMode}
          isDarkMode={darkMode}
        />
      </div>
      { 
        pictureOfTheDay && (pictureOfTheDay.media_type === "image" ? 
          <Picture APOD = {pictureOfTheDay}/> : <Video APOD = {pictureOfTheDay}/>)
      }
      {
        pictureOfTheDay && <Explanation explanation={pictureOfTheDay.explanation}/>
      }
    </div>
  );
}

export default App;
