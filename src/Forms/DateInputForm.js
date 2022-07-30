import { useState } from "react";
import './DateInputForm.css'

const DateInputForm = ({handleDate}) => {
    let today = new Date().toJSON().slice(0,10)
    const [date, setDate] = useState(today)
    
    const handleChange = (e) => {
        e.preventDefault()
        setDate(e.target.value)
        handleDate(e.target.value)
    }

    const handleBack = () => {
        let new_date = new Date(new Date(date) - 86400000).toJSON().slice(0,10)
        setDate(new_date)
        handleDate(new_date)
    }

    const handleForward = () => {
        let old_date = new Date(date)
        let new_date = new Date(old_date.getFullYear(),old_date.getMonth(),old_date.getDate()+2).toJSON().slice(0,10)

        if(new_date>today) return
        setDate(new_date)
        handleDate(new_date)
    }

    return ( 
        <>
            <span className="material-symbols-outlined arrow" onClick={handleBack}>
                arrow_back
            </span>

            <input 
                className="date-input"
                type="date" 
                min="1995-06-20"
                max={today}
                onChange={handleChange}
                value={date}
            />
        
            <span className="material-symbols-outlined arrow" onClick={handleForward}>
                arrow_forward
            </span>
        </>
    );
}
 
export default DateInputForm;