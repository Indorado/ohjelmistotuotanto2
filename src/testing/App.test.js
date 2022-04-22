import React from 'react'
import { render, screen } from '@testing-library/react'
// import {
//     ButtonAsLink
//   } from './button.composition'
// import {button} from './Jasenet';

// Menee testistä läpi vaikka ei testaa mitään

var testataan = document.getElementById("Rekisteröidy");

describe('Onko nappi olemassa', function () {    
   
    // The 'it' function is next to call, where we can name our test and then
    // execute the code we want to run for our test.
    /*
    it('Napin pitäisi olla olemassa', function () {
        // Here is the code for our test that is triggered by Mocha
        var result = true;
        if (typeof (testataan) != 'undefined' && testataan != null) {
            assert.equal(result, true); //testi läpi
        } else {
            alert('Nappia ei ole olemassa');
        }
        
    });
    */
});


describe("Yksikkötestaus", () => {
    test('Yksikkötestaus, käyttäjänimen paikka', async () => {
        //await screen.findByText(/Hei!/i);
        //jotta testejä voi ajaa asenna ensin npm install --save-dev @testing-library/react

        // const username = screen.getByText("Koti");
        // const username = screen.getByRole('link', { name: 'Koti'});

        // await screen.findByText(/Savonia AMK/i);

        // HUOM! Lopullisessa testissä tullaan testaamaan että näytöllä lukee teksti oikeassa muodossa! 
        // expect(screen.getByText(/päivä/i)).toBeInTheDocument();

        /*
         // Tässä testataan ensin löytyykö kirjautumissivu -> jos löytyy, oletetaan että tehtävä 28 on tehty
            try{
                let nimiInput = screen.getByLabelText(/Etunimi/i);
                // Testi ok
                expect(1).toBe(1);
            }
            catch {
                console.log("KIRJAUTUMINEN")
                // Ei löydy Kirjautumissivua -> pitäisi löytyä Autot-lista
                const lista = await screen.findByRole("list");
                const { findAllByRole } = within(lista)
        
                const items = await findAllByRole("listitem")    
                expect(items.length).toBeGreaterThan(5)        
            }
        */
    })
})