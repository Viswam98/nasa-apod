import { useState } from 'react';
import './Picture.css'
const Picture = ({ src }) => {
    const [loading, setloading] = useState(true)
    return ( 
        <div>
            <div id="image-container">
                <div id="image">
                    <div id="overlay">
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
                            onLoad={()=>setloading(false)} 
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Picture;