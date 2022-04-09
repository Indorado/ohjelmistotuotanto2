import './css/SaveTrip.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AdSaveTrip = () => {

  //Kun nappia klikataan ja siirtyy matkakohde sivulle 
  //-> rullaa automaattisesti sivun ylös
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className='save-trip'>
        <div>
          <p>Onko matkakuumetta? <br></br
          >Selaa käyttäjiemme lisäämiä matkakohteita sekä tarinoita upeista kohteista ja inspiroidu!</p>
        </div>
        <div>
          <Link to="/Matkakohde">
            <button onClick={scrollToTop}
              type="button"
              className="btn btn-secondary" 
              style={{ margin: 5 }}
            >
              Lähde matkalle!
            </button>
            
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdSaveTrip;