import { useEffect, useState } from "react"

const WindowTracker = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const watchWidth = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', watchWidth)

        return () => {
            window.removeEventListener('resize', watchWidth);
        }
        
    }, [windowWidth])
    return ( 
        <>
            <h2>Window width: {windowWidth}</h2>
        </>
     );
}
 
export default WindowTracker;