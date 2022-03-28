import AdSaveTrip from './parts/AdSaveTrip';
import Mainos from './Mainos';

// Jos käyttäjä on rekisteröitynyt -> Näkyy tietyt osat sivulla
// Jos käyttäjä EI OLE rekisteröitynyt -> Näkyy tietyt osat sivulla

const SignedUser = () => {
    return (
        <div>
            <hr></hr>
            <div>
                <Mainos />
            </div>
            <hr></hr>
            <div>
                <AdSaveTrip/>
            </div>
            <hr></hr>
        </div>
    )
}

export default SignedUser;