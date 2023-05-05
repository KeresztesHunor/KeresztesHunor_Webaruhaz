import { ujTagekKozeIr } from "./qualityOfLifeMetodusok.js";

class Termek
{
    #id;
    #gyarto;
    #nev;
    #evjarat;

    constructor(szuloElem, id, gyarto, nev, evjarat)
    {
        this.#id = id;
        this.#gyarto = gyarto;
        this.#nev = nev;
        this.#evjarat = evjarat;
        this.megjelenitDivben(szuloElem);
    }

    megjelenitDivben(szuloElem)
    {
        const KEDVENCEK_KOZE = szuloElem.attr("id") === "kedvencek";
        szuloElem.append(ujTagekKozeIr("div", "class='termek'", (() => {
            let txt = "";
            txt += ujTagekKozeIr("h3", null, this.#nev);
            txt += ujTagekKozeIr("p", null, "Gyártó: " + this.#nev);
            txt += ujTagekKozeIr("p", null, "Évjárat: " + this.#evjarat);
            txt += ujTagekKozeIr("button", null, !KEDVENCEK_KOZE ? "Kedvencek közé" : "Kedvencekből kivesz");
            if (!KEDVENCEK_KOZE)
            {
                txt += "<br>";
                txt += ujTagekKozeIr("button", null, "Töröl");
            }
            return txt;
        })()));
        const EZ_A_TERMEK_GOMBJAI = $(szuloElem.children("div:last-child")).find("button");
        $(EZ_A_TERMEK_GOMBJAI[0]).on("click", !KEDVENCEK_KOZE
            ? () => window.dispatchEvent(new CustomEvent("kedvencekKozeRak", { detail: this }))
            : () => window.dispatchEvent(new CustomEvent("kedvencekbolKivesz", { detail: this }))
        );
        if (EZ_A_TERMEK_GOMBJAI[1] !== "undefined")
        {
            $(EZ_A_TERMEK_GOMBJAI[1]).on("click", () => window.dispatchEvent(new CustomEvent("adatotTorol", { detail: this })));
        }
    }

    getId()
    {
        return this.#id;
    }

    getGyarto()
    {
        return this.#gyarto;
    }

    getNev()
    {
        return this.#nev;
    }

    getEvjarat()
    {
        return this.#evjarat;
    }
}

export default Termek