import React from 'react'
import './footer.css'
import Logo from "../images/logoImagen.svg"
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
       <div className = "footer">
        <div className="footercont">
        <div className="logo-footer-container">
            <div className="footerlogo">
            <Link to="/"><img src={Logo}></img></Link>
            </div>
            <div className="footertext">
                <p>Empoderando financieramente a las mujeres mexicanas.</p>
            </div>
        </div>
          <div className='social-media-container'>
            <a href="" target="_blank" class="fa fa-facebook"></a>
            <a href="" target="_blank" class="fa fa-instagram"></a>
          </div>
          
          <div>
            <p>	&#169; Freya. All rights reserved.</p>
        </div>
        </div>
     </div>
    </>
  )
}

export default Footer
