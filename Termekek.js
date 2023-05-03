import { ADATOK } from "./adat.js";
import Termek from "./Termek.js";

class Termekek
{
    #termekek;
    #kedvencek;

    constructor()
    {
        this.#termekek = [];
        this.#kedvencek = [];
        const TERMEKEK = $("#termekek");
        ADATOK.forEach(termek => this.#termekek.push(new Termek(TERMEKEK, termek.gyarto, termek.nev, termek.evjarat)));
        $(window).on("kedvencekKozeRak", event => this.#kedvencek.push(event.detail));
    }
}

export default Termekek