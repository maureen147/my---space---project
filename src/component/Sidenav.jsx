import React, {useEffect, useState, useRef} from 'react'
import '../Css/SideNav.css'
import logo from "../assets/image/shared/logo.svg";
import hamburger from "../assets/image/shared/icon-hamburger.svg";
import { Link } from "react-router-dom";
import close from "../assets/image/shared/icon-close.svg";

const Sidebar = () => {

    
  const [menu, setMenu] = useState(false);

  let menuRef = useRef();
 
  useEffect(()=>{
    document.addEventListener('mousedown', (event)=>{
      if(!menuRef.current.contains(event.target)){
        setMenu(false);
      }
    })
  })

  return (
    <div>
      <div className="sidebar" ref={menuRef}>
            <div className='left'>
              <Link to='/'>
                <img src={logo} title='logo' className='img-side'/>
              </Link>
            </div>
            
            <div className='right' onClick={()=>{
              setMenu(!menu)
            }} >
               {menu ?  <img src={close} alt="Menu" className='img-side' id='tt'/> 
               : 
                <img src={hamburger} alt="Menu" className='img-side' id='tt'/>}
            </div>
          {menu ? 
          
          <div className="right-side-nav ">
        {/* <div className="right-side-nav " style={{display: 'none'}}> */}
          <ul>
            <div className="nav active">
              <Link to="/" style={{textDecoration: 'none'}}>
                <li>
                  <span>00</span> Home
                </li>
              </Link>
            </div>
            <div className="nav"  >
                <Link to="/destination" style={{textDecoration: 'none'}}>
                <li>
                <span>01</span> Destination
              </li>
                </Link>
            </div>
            <div className="nav" to="/crew">
                <Link to='/crew' style={{textDecoration: 'none'}}>
              <li>
                <span>02</span> Crew
              </li>
              </Link>
            </div>
            <div className="nav" to="/technology">
            <Link to='/technology' style={{textDecoration: 'none'}}>
              <li>
                <span>03</span> Technology
              </li>
              </Link>
            </div>
          </ul>
        </div> 
        
        :
         <div className="right-side-nav " style={{display: 'none'}}>
        {/* <div className="right-side-nav " style={{display: 'none'}}> */}
          <ul>
            <div className="nav active"  >
              <Link to="/" style={{textDecoration: 'none'}}>
                <li>
                  <span>00</span> Home
                </li>
              </Link>
            </div>
            <div className="nav"  >
                <Link to="/destination" style={{textDecoration: 'none'}}>
                <li>
                <span>01</span> Destination
              </li>
                </Link>
            </div>
            <div className="nav" to="/crew">
                <Link to='/crew' style={{textDecoration: 'none'}}>
              <li>
                <span>02</span> Crew
              </li>
              </Link>
            </div>
            <div className="nav" to="/technology">
            <Link to='/technology' style={{textDecoration: 'none'}}>
              <li>
                <span>03</span> Technology
              </li>
              </Link>
            </div>
          </ul>
        </div> }
      </div>
    </div>
  );
};

export default Sidebar;
