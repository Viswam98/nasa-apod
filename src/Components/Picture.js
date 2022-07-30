import { useEffect, useState } from 'react';
import './Picture.css'
const Picture = ({ APOD }) => {
    const [loading, setloading] = useState(true)
    const {url, hdurl} = APOD
    useEffect( ()=>{
        return ()=>setloading(true)
    }, [APOD])
    return ( 
        <div>
            <div id="image-container">
                <div id="image">
                    <div id="overlay" className={loading ? 'overlay' : ''}>
                            <div id="loader" className={loading ? 'loader' : ''}></div>
                    </div>
                    <a 
                        href={hdurl}
                        target='_blank' 
                        className="image-link"
                    >
                        <img 
                            src={url} 
                            className="img"
                            onLoad={()=>setloading(false)} 
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Picture;