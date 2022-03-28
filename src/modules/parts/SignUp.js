import React from "react";
import './css/SignUp.css';

const SignUp = () => {
    return (
        <div>
            <div className='sign-up'>
            <div>
                <p>Etkö ole vielä rekisteröitynyt Kuopion Kulkijoiden sovellukseen?<br></br>Rekisteröidy heti alla olevan painikkeen avulla!</p>
            </div>
            <div>
            <button type="button" className="btn btn-secondary" style={{margin: 5}}>Rekisteröidy</button>
            </div>
            </div>
        </div>
    )
}

export default SignUp;