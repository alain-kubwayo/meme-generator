// import memes from "../shareable/memesData";
import { useState, useEffect } from "react";
import Count from "./Count";


const Meme = () => {
    // const [count, setCount] = useState(0);
    // const [isGoingOut, setIsGoingOut] = useState(false);
    // const [person, setPerson] = useState({
    //     name: 'alain',
    //     isStudent: false
    // });
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: "https://i.imgflip.com/30b1gx.jpg"
    })
    const[allMemes, setAllMemes] = useState([]);

    const handleClick = () => {
        const randomNum = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNum].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            url
        }))
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    useEffect(() => {
        const fetchMemes = async () => {
            const res = await fetch('https://api.imgflip.com/get_memes');
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
       fetchMemes();
    }, []);

    // const add = () => {
    //     setCount(prevCount => prevCount + 1);
    // }

    // const remove = () => {
    //     setCount(prevCount => prevCount - 1);
    // }

    // const handleToggleStudent = () => {
    //     setPerson(prevPerson => ({...prevPerson, isStudent: !prevPerson.isStudent}));
    // }

    return ( 
        <main>
            <div>
                <input 
                    type="text" 
                    placeholder="Top text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    className="px-2 py-2 bg-gray-400 w-1/3 mr-4"
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    className="px-2 py-2 bg-gray-400 w-1/3"
                />
                <hr />
                <button onClick={handleClick} className="px-4 py-2 bg-indigo-700 text-white font-bold">Get a new meme image</button>
            </div>
            {meme && <div className="relative">
                <img src={meme.url} alt="Meme image" className="w-full h-full"  />
                <h2 className="absolute top-5 left-1/4 text-white text-xl uppercase font-bold">{meme.topText}</h2>
                <h2 className="absolute bottom-5 left-1/4 text-white text-xl uppercase font-bold">{meme.bottomText}</h2>
            </div>}
            <hr />
            {/* <Count count={count} />
            <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
            <p>{isGoingOut ? 'Hello World' : 'Not Going Out'}</p>
            <button onClick={() => setIsGoingOut(!isGoingOut)}>Toggle Is Going Out</button>
            <br />
            <h2>Person Object in State</h2>
            <p>{person.name}. Is He a student? {person.isStudent ? 'Yes' : 'No'}</p>
            <button onClick={handleToggleStudent}>Toggle Student</button> */}
        </main>
    );
}
 
export default Meme;