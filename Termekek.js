import Termek from "./Termek.js";

class Termekek
{
    #termekek;
    #kedvencek;

    constructor()
    {
        this.#termekek = [];
        this.#kedvencek = [];
        this.adatBetolt("adat.json", adat =>
        {
            const ADATOK = adat.adatLista;
            const TERMEKEK = $("#termekek");
            ADATOK.forEach(termek => this.#termekek.push(new Termek(TERMEKEK, termek.gyarto, termek.nev, termek.evjarat)));
            $(window).on("kedvencekKozeRak", event => this.#kedvencek.push(event.detail));
        });
    }

    adatBetolt(vegpont, callback)
    {
        fetch(vegpont)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.log(error));
    }
}

export default Termekek