import { useState, useEffect } from "react";

const Meme = () => {
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
    
    return ( 
        <main>
            <div>
                <input 
                    type="text" 
                    placeholder="Top text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    className="w-1/3 px-2 py-2 mr-4 bg-gray-400"
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    className="w-1/3 px-2 py-2 bg-gray-400"
                />
                <hr />
                <button onClick={handleClick} className="px-4 py-2 font-bold text-white bg-indigo-700">Get a new meme image</button>
            </div>
            {meme && <div className="relative">
                <img src={meme.url} alt="Meme image" className="w-full h-full"  />
                <h2 className="absolute text-xl font-bold text-white uppercase top-5 left-1/4">{meme.topText}</h2>
                <h2 className="absolute text-xl font-bold text-white uppercase bottom-5 left-1/4">{meme.bottomText}</h2>
            </div>}
        </main>
    );
}
 
export default Meme;