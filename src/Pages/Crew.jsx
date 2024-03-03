import React, { useState } from 'react'
import "../Css/Crew.css"
import { CrewDB } from '../DB/CrewDB'

const Crew = () => {
  const [partners] = useState(CrewDB);
  const [value, setValue] = useState(0);
  const {name, images, role, bio} = partners[value]

  // const [slider, setSlider] = useState(value)


  // if(value === 0){
  //   setTimeout(()=>{
  //     setValue(1)
  //   }, 3000)
  // }
  // if(value === 1){
  //   setTimeout(()=>{
  //     setValue(2)
  //   }, 3000)
  // }
  // if(value === 2){
  //   setTimeout(()=>{
  //     setValue(3)
  //   }, 3000)
  // }
  // if(value === 3){
  //   setTimeout(()=>{
  //     setValue(0)
  //   }, 3000)
  // }
  // const handleSlide = ()=>{
  //   const [slider, setSlider] = useState(value)
    

  // }

  // <div className='top-text-crew mobile txt'>
  //           <h1><span>02</span> MEET YOUR CREW</h1>
  //         </div>
  //         <div className='right-img-crew mobile'>
  //         <img src={images} title={name} className='crew-img  ' />
          
  //       </div>
  //       <div className='border-crew'></div>
  //       <div className='left-text-crew'>
  //       <div className='top-text-crew desktop txt-tab'>
  //           <h1><span>02</span> MEET YOUR CREW</h1>
  //         </div>
  //         <div className='middle-text-crew'>
  //           <h2>{role.toUpperCase()}</h2>
  //           <h1>{name.toUpperCase()}</h1>
  //           <p>{bio}</p>
  //         </div>
  //         <div className='btn-crew '>
  //           {partners.map((patner, index) =>
  //               <li key={index} onClick={() =>{
  //                 setValue(index) }}
  //                 className={`${index === value && 'white-dot'}`}
  //             >
  //                 {/* use this as the dot */}
  //               </li>
  //           )}
            
  //         </div>
  //       </div>
  //       <div className='right-img-crew desktop'>
  //         <img src={images} title={name} className='crew-img desktop' />
  //       </div>


  return (
    <div className='crew-bg'>
       <div className='crew'>
       <main className='main'>
          <div className="title-crew">
            <h1>
              <span>02</span>MEET YOUR CREW
            </h1>
          </div>
          <div className='content-crew'>
            <div className='left-content-crew'>
              <div className='left-content-text'>
                  <h2>{role.toUpperCase()}</h2>
                  <h1>{name.toUpperCase()}</h1>
                  <p>{bio}</p>
              </div>
              <div className='left-content-btn'>
              {partners.map((patner, index) =>
                 <button key={index} onClick={() =>{
                   setValue(index) }}
                   className={`${index === value && 'active'}`}
               >
                   {/* use this as the dot */}
                 </button>
           )}
              </div>
            </div>
            <div className='right-content-crew'>
            <img src={images} title={name} className='crew-img' />
            </div>
          </div>
       </main>
       </div>
    </div>
  )
}

export default Crew
