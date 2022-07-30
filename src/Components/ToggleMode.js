import './ToggleMode.css'

const ToggleMode = ({handleToggle, isDarkMode}) => {

    return (
        
        <span className='mode-container' onClick={() => handleToggle()}>
            {
            isDarkMode ?
                <span 
                    className="material-symbols-outlined"
                    id='dark'
                >light_mode</span>
                :
                <span 
                    className="material-symbols-outlined"
                    id='dark'
                >dark_mode</span>
            }
        </span>
        
    );
}
 
export default ToggleMode;