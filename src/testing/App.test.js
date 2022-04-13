describe("Yksikkötestaus", () => {
    test('Yksikkötestaus, käyttäjänimen paikka', async () => {

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