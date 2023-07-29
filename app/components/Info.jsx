'use client'
import Link from "next/link"
import { useState  } from "react"

const Info = ({data}) => {
  const [summaryDisplay, SetSummaryDisplay] = useState(true)
  const [transcriptDisplay, SetTranscriptDisplay] = useState(false)
  const [refrencesDisplay, SetRefrencesDisplay] = useState(false)
      const audio = data
      const getTime = () => {
        if(audio){
          return audio.currentTime
        }
      }

      const time = getTime()

  const changeLable = (e) => {
    let infoBtn = document.querySelectorAll('#info-btn')
      for (let index = 0; index < infoBtn.length; index++) {
        infoBtn[index].classList.remove('btn-active');
      }
    e.target.classList.add('btn-active');
  }
  return (
    <div className="">
      <div className="md:mx-28 md:my-6 md:w-auto my-3 py-2 px-3 bg-white shadow-lg rounded-md flex lg:justify-center justify-between items-center btn-info w-full">
        <Link href='#'><button id="info-btn" className="btn-active font-semibold rounded-md md:py-4 md:px-5 py-2 px-3 mx-1 duration-150" onClick={
          (e) =>{ changeLable(e) 
          SetSummaryDisplay(true)
          SetTranscriptDisplay(false)
          SetRefrencesDisplay(false)
        }
        }>Summary</button></Link>
        <Link href='#'><button id="info-btn" className="font-semibold rounded-md md:py-4 md:px-5 py-2 px-3 mx-1 duration-150" onClick={
          (e) =>{ changeLable(e) 
          SetTranscriptDisplay(true)
          SetRefrencesDisplay(false)
          SetSummaryDisplay(false)
        }
        }>Transcript</button></Link>
        <Link href='#'><button id="info-btn" className="font-semibold rounded-md md:py-4 md:px-5 py-2 px-3 mx-1 duration-150" onClick={
          (e) =>{ changeLable(e) 
          SetRefrencesDisplay(true)
          SetSummaryDisplay(false)
          SetTranscriptDisplay(false)
        }
        }>Refrences</button></Link>
      </div>

      <div className="info-body hidden md:mx-28 md:my-6 md:w-auto my-3 py-2 px-3 shadow-lg rounded-md flex justify-center items-center bg-white w-full" style={{display: summaryDisplay ? "block" : "none"} }>
        <div className="w-full h-auto rounded-md p-3">
          <h1 className="text-center font-bold text-2xl mb-2">Summary</h1>
          <span className="text-gray-800 text-justify">
            <p className="text-center">
              {
                time / 60 < 30 ? 'This is a Summary Until 30' : time /60 < 60 ? 'This is a Summary Until 60' : time /60 > 60 ? 'This is Summary For After 60' : 'This is Summary'
              }
            </p>
          </span>
        </div>
      </div>
      <div className="info-body hidden md:mx-28 md:my-6 md:w-auto my-3 py-2 px-3 shadow-lg rounded-md flex justify-center items-center bg-white w-full" style={{display: transcriptDisplay ? "block" : "none"}}>
        <div className="w-full h-auto rounded-md p-3">
          <h1 className="text-center font-bold text-2xl mb-2">Transcript</h1>
          <p className="text-gray-800 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sed dolor harum excepturi accusantium tempore exercitationem! Pariatur, sequi nisi. Nesciunt minus non illum totam fugiat iste itaque ducimus odio facilis necessitatibus, aspernatur delectus officiis repellendus velit nam! Dolorum quaerat eos, labore ut eum quidem consequuntur dolores autem officia ad dolore maiores earum tempora eaque atque nisi harum consequatur in, dignissimos qui voluptates rem consectetur. Aliquid accusantium ea dicta repellat debitis, earum, sequi repudiandae quam sint, aperiam sunt provident assumenda eos.</p>
        </div>
      </div>
      <div className="info-body hidden md:mx-28 md:my-6 md:w-auto my-3 py-2 px-3 shadow-lg rounded-md flex justify-center items-center bg-white w-full" style={{display: refrencesDisplay ? "block" : "none"}}>
        <div className="w-full h-auto rounded-md p-3">
          <h1 className="text-center font-bold text-2xl mb-2">Refrences</h1>
          <p className="text-gray-800 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sed dolor harum excepturi accusantium tempore exercitationem! Pariatur, sequi nisi. Nesciunt minus non illum totam fugiat iste itaque ducimus odio facilis necessitatibus, aspernatur delectus officiis repellendus velit nam! Dolorum quaerat eos, labore ut eum quidem consequuntur dolores autem officia ad dolore maiores earum tempora eaque atque nisi harum consequatur in, dignissimos qui voluptates rem consectetur. Aliquid accusantium ea dicta repellat debitis, earum, sequi repudiandae quam sint, aperiam sunt provident assumenda eos.</p>
        </div>
      </div>
    </div>
  )
}

export default Info
