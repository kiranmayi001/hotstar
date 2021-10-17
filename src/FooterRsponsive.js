import React from 'react'
import './FooterResponsive.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faTv,faVideo,faVolleyballBall} from '@fortawesome/free-solid-svg-icons'

const FooterRsponsive = () => {
    return (
        <div className="fo-re">
              <div className="header position-fix">
      <div className="header-content">
        <div className="header-left">
        
          <span className="menu-footer">
              <FontAwesomeIcon icon={faHome} className="icon-footer"/>
              <br/>
              Home</span>
          <span className="menu-footer">
          <FontAwesomeIcon icon={faTv} className="icon-footer"/>
              <br/>
              TV</span>
          <img
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt=""
            className="footer-logo"
          />
          <span className="menu-footer">
          <FontAwesomeIcon icon={faVideo} className="icon-footer"/>
              <br/>
              Movies</span>
          <span className="menu-footer">
          <FontAwesomeIcon icon={faVolleyballBall} className="icon-footer"/>
              <br/>
              Sports</span>
      
          <img
            src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg"
            alt=""
            className="kids"
          />
        </div>
        <div className="header-right">
 
          <i class="fas fa-search"></i>
          <button className="btn">SUBSCRIBE</button>
          <span className="log">Login</span>
        </div>
   
      </div>
    </div>
        </div>
    )
}

export default FooterRsponsive
