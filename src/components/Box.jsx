const Box = ({ box, toggle }) => {
    return (
        <div 
            key={box.id} 
            className={`border-2 border-black h-10 w-10 ${box.on ? 'bg-gray-700' : 'bg-none'}`}
            onClick={() => toggle(box.id)}
        ></div>
    );
}
 
export default Box;