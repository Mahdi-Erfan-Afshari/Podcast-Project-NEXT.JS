'use client'
import { useState } from 'react'
import {PiPlayDuotone} from 'react-icons/pi'
import {PiPauseDuotone} from 'react-icons/pi'

const Controller = ({ url }) => {
    const [play, setPlay] = useState(true)
    const togglePlay = () => {
        const audio = document.querySelector('audio');
        !play ? audio.play() : audio.pause();
        setPlay(!play)
    }
    

  return (
    <div className="controller w-full flex md:flex-row md:items-center flex-col">
        <div className="flex justify-center mt-2">
            <span className='flex justify-center' onClick={togglePlay}>
                {!play ? <PiPlayDuotone className='text-Blue text-3xl' /> : <PiPauseDuotone  className='text-Blue text-3xl'/>}
            </span>
        </div>
        <audio src={url} autoPlay></audio>
        <div className='mx-6 w-full'>
            <input type="range" min="1" max="100" value="1" className="controller-input"/>
        </div>
    </div>
  )
}

export default Controller
