import { useEffect, useState } from 'react'
import './App.css';
import Explanation from './Components/Explanation';
import Picture from './Components/Picture'
import Video from './Components/Video';
import DateInputForm from './Forms/DateInputForm';

function App() {
  const [pictureOfTheDay, setPictureOfTheDay] = useState(null)
  const [selectedDate, setSelectedDate] = useState(new Date().toJSON().slice(0,10))
  const [isPicture, setIsPicture] = useState(true)
  
  useEffect(()=>{
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&date=${selectedDate}`)
        .then( response => response.json())
        .then( data => {
            // if(data.media_type == "image") return handleImage(data)
            // handleVideo(data)
            setPictureOfTheDay(data)
        })
  }, [selectedDate])

  const handleDate = (date) => {
    setSelectedDate(date)
  }

  return (
    <div className="App">
      <h1>NASA Astronomy Picture Of The Day</h1>
      <DateInputForm
        handleDate={handleDate}
      />
      { 
        pictureOfTheDay && <Picture APOD = {pictureOfTheDay}/>
      }
      {
        pictureOfTheDay && <Explanation explanation={pictureOfTheDay.explanation}/>
      }
    </div>
  );
}

export default App;
