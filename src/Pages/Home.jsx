import React from 'react'
import '../Css/Home.css'
import Destination from './Destination'
import Crew from './Crew'
import Technology from './Technology'
import { Link } from 'react-router-dom';

import Header from '../component/Header'
const Home = () => {
  return (
    <div className='home-bg'>
        <section className="home">
          <div className="container">
            <article>
              <h1 className='home-h1'>SO, YOU WANT TO TRAVEL TO </h1>
              <span className='home-span'>SPACE</span>
              <p className='home-p'>
              Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
              </p>
            </article>
            <div className='btn'>
                {/* <div className='extra-space'>
                  
                </div> */}
                <Link to='/destination' style={{textDecoration: 'none', color: 'black'}}>
                <button className='home-btn'>
                    Explore
                </button>
                </Link>
              
            </div>
              
          </div> 
        </section> 
    </div>
  )
}

export default Home
