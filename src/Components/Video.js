import './Video.css'

const Video = ({APOD}) => {
    const {url} = APOD
    return ( 
        <div>
            <iframe 
                src={url}
                className='video'
                allowFullScreen
            ></iframe>
        </div>
     );
}
 
export default Video;