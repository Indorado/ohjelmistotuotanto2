import './css/SaveTrip.css';
import { Link } from "react-router-dom";

const AdSaveTrip = () => {
    return (
        <div>
            <div className='save-trip'>
            <div>
              <p>Olitko matkoilla? Haluatko jakaa matkakertomuksesi muille käyttäjille tai vaikka vain itsellesi?<br></br>Alla olevasta napista pääset nopeasti tallentamaan unohtumattoman matkakertomuksesi!</p>
            </div>
            <div>
              <button type="button" className="btn btn-secondary" >Tallenna matkasi!</button>
            </div>
          </div>
        </div>
    )
}

export default AdSaveTrip;