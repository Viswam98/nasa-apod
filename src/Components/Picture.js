import { useEffect, useState } from 'react';
import './Picture.css'
const Picture = ({ src }) => {
    const [loading, setloading] = useState(true)
    useEffect( ()=>setloading(true), [src] )
    return ( 
        <div>
            <div id="image-container">
                <div id="image">
                    <div id="overlay" className={loading ? 'overlay' : ''}>
                            <div id="loader" className={loading ? 'loader' : ''}></div>
                    </div>
                    <a 
                        href={src}
                        target='_blank' 
                        className="image-link"
                    >
                        <img 
                            src={src} 
                            className="img"
                            onLoad={()=>setTimeout(()=>setloading(false),0)} 
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Picture;