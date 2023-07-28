'use client';
import { useState } from 'react'
import {FaPause} from 'react-icons/fa'
import {FaPlay} from 'react-icons/fa'


const Controller = ({ url }) => {
    const [play, setPlay] = useState(false)
    const togglePlay = () => {
        const audio = document.querySelector('audio');
        !play ? audio.play() : audio.pause();
        setPlay(!play)
    }
    
  return (
    <div className="controller">
        <div>
            <input type="range" min="1" max="100" value="1" className="controller-input"/>
        </div>
        <div className="flex justify-center">
            <span className='flex justify-center w-auto' onClick={togglePlay}>
                {!play ? <FaPlay /> : <FaPause />}
            </span>
        </div>
        <audio src={url} autoPlay></audio>
    </div>
  )
}

export default Controller
