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
        $(window).on("kedvencekbolKivesz", event => this.#kedvencekbolKivesz(event.detail.getId()));
        $(window).on("adatotTorol", event => {
            const TERMEK_ID = event.detail.getId();
            this.#termekek[TERMEK_ID].getHTMLElem().remove();
            this.#termekek.splice(TERMEK_ID, 1);
            if (this.#kedvencek.hasOwnProperty(TERMEK_ID))
            {
                this.#kedvencekbolKivesz(TERMEK_ID);
            }
            ASZINKRON.adatTorol("http://localhost:3000/adatLista", TERMEK_ID);
        });
    }

    #kedvencekbolKivesz(id)
    {
        this.#kedvencek[id].htmlElem.remove();
        delete this.#kedvencek[id];
    }
}

export default Termekek