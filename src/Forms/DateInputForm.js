import { useState } from "react";

const DateInputForm = ({handleDate}) => {
    let today = new Date().toJSON().slice(0,10)
    const [date, setDate] = useState(today)
    const handleChange = (e) => {
        e.preventDefault()
        setDate(e.target.value)
        handleDate(e.target.value)
    }

    return ( 
        <input 
            type="date" 
            min="1995-06-20"
            max={today}
            onChange={handleChange}
            value={date}
        />
    );
}
 
export default DateInputForm;