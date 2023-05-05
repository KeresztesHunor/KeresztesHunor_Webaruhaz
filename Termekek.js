import Termek from "./Termek.js";
import Aszinkron from "./Aszinkron.js";

class Termekek
{
    #termekek = [];
    #kedvencek = {};

    constructor()
    {
        const ASZINKRON = new Aszinkron();
        ASZINKRON.adatBetolt("http://localhost:3000/adatLista", adatok => {
            const TERMEKEK = $("#termekek");
            adatok.forEach(termek => this.#termekek.push(new Termek(TERMEKEK, termek.id, termek.gyarto, termek.nev, termek.evjarat)));
        });
        const KEDVENCEK = $("#kedvencek");
        $(window).on("kedvencekKozeRak", event => {
            const TERMEK_ID = event.detail.getId();
            if (!this.#kedvencek.hasOwnProperty(TERMEK_ID))
            {
                event.detail.megjelenitDivben(KEDVENCEK);
                this.#kedvencek[TERMEK_ID] = {
                    objektum: event.detail,
                    htmlElem: $(KEDVENCEK.children("div:last-child"))
                };
            }
        });
        $(window).on("kedvencekbolKivesz", event => {
            const KEDVENC_ID = event.detail.getId();
            this.#kedvencek[KEDVENC_ID].htmlElem.remove();
            delete this.#kedvencek[KEDVENC_ID];
        });
    }
}

export default Termekek