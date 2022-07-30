import { useState } from "react";

const DateInputForm = () => {
    const [date, setDate] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setDate(e.target.value)
        console.log(e.target.value)
    }

    return ( 
        <input 
            type="date" 
            onChange={handleChange}
            value={date}
        />
    );
}
 
export default DateInputForm;