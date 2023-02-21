import { useState } from "react";
import boxData from "../shareable/boxes";
import Box from "./Box";

const Boxes = () => {
    const [squares, setSquares] = useState(boxData);
    const [isShown, setIsShown] = useState(false);

    const toggle = id => {
        setSquares(prevSquares => {
            return prevSquares.map(square => {
                return square.id === id ? {...square, on: !square.on} : square;
            })
        })
    }

    const toggleIsShown = () => {
        setIsShown(prevIsShown => !prevIsShown);
    }
    return ( 
        <div className="grid grid-cols-3 gap-5">
            {
                squares.map(box => <Box key={box.id} box={box} toggle={toggle} toggleIsShown={toggleIsShown} isShown={isShown} />)
            }
        </div>
    );
}
 
export default Boxes;